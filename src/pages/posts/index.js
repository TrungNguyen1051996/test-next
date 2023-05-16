import Link from 'next/link';
import React from 'react';

const PostListPage = (props) => {

    return (
        <div>
            <h1>Post List Page</h1>
            <ul>
                {props.posts.map((el,index) => {
                    return (
                        <li key={index}>
                            <Link href={`/posts/${el.id}`}>{el.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default PostListPage;

export const getStaticProps = async (context) => {
    const response = await fetch("https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts")
    const data = await response.json();
    
    return {
        props: {
            posts: data
        }
    }
}