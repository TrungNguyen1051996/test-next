import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ParamPage = ({ post, query }) => {
    console.log("🚀 ~ file: params.js:5 ~ ParamPage ~ { post, query }:", { post, query })
    const router = useRouter()

    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((x) => {
                if (x>60) clearInterval(intervalId)

                return x + 1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    },[])

    return (
        <div>
            <h1>Post ParamPage</h1>

            <p>Time: {seconds}s</p>

            <p>{post?.title}</p>

            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
};

export default ParamPage;

export async function getServerSideProps(context) {
    context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')

    await new Promise((res) => setTimeout(res,3000))

    const postId = context.query.postId
    if (!postId) return {
        props: { query: context.query }
    }

    const response = await fetch(`https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts/${postId}`)
    const data = await response.json();

    return {
        props: {
            query: context.query,
            post: data
        }
    }
}