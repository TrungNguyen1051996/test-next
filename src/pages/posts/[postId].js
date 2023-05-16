import { useRouter } from 'next/router';
import React from 'react';

const PostDetailPage = ({ post }) => {
    const router = useRouter()

    if (!post) return null;

    return (
        <div>
            <h1>Post PostDetailPage</h1>
            <p>{post.title}</p>
        </div>
    );
};

export default PostDetailPage;


export const getStaticProps = async (context) => {
    if(!context.params?.postId) return {
        notFound: true
    }

    const response = await fetch(`https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts/${context.params?.postId}`)
    const data = await response.json();
    
    return {
        props: {
            post: data
        }
    }
}

export const getStaticPaths = async () => {

    const response = await fetch("https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts")
    const data = await response.json();
    console.log("\ngetStaticPaths", data);

    
    return {
        paths: data.map(post => ({ params: { postId: post.id }})),
        fallback: false,
    }
}