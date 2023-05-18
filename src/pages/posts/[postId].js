import { useRouter } from 'next/router';
import React from 'react';

const PostDetailPage = ({ post }) => {
    const router = useRouter()

    if (router.isFallback) {

    }
    
    if (!post) return null;

    return (
        <div>
            <h1>Post PostDetailPage</h1>
            <p>{post.title}</p>
        </div>
    );
};

export default PostDetailPage;

export const getStaticPaths = async () => {

    // const response = await fetch("https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts")
    const response = await fetch("https://js-post-api.herokuapp.com/api/posts?_page=1")
    const data = await response.json();
    console.log("\ngetStaticPaths", data);

    
    return {
        paths: data.data.map(post => ({ params: { postId: post.id }})),
        fallback: 'blocking',
    }
}

export const getStaticProps = async (context) => {
    console.log("🚀 getStaticProps ~ context.params?.postId:", context.params?.postId)
    if(!context.params?.postId) return {
        notFound: true
    }

    // const response = await fetch(`https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts/${context.params?.postId}`)
    const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${context.params?.postId}`)
    const data = await response.json();
    
    return {
        props: {
            post: data
        },
        revalidate: 15
    }
}
