
import Header from '@/components/common/header';
// import MainLayout from '@/components/layout/main';
import { MainLayout } from '@/components/layout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import("@/components/common/header"), { ssr: false })

const About = props => {
    const [postList, setPostList] = useState([])
    const router = useRouter()
    
    const page = (+router.query?.page || 1)
    
    useEffect(()  => {
        ;(async ()  => {

            const response = await fetch(`https://6295e38d75c34f1f3b23e68f.mockapi.io/api/v1/blogposts`)
            const data = await response.json();

            setPostList(data)
        })()
    }, [page])
    
    return (
        <div>
            <h1>About Page</h1>
            
            <Header />

            <ul>
                {postList.map((el,index)  => {
                    return (
                        <li key={index}>{el.title}</li>
                    )
                })}
            </ul>
        </div>
    );
};
export default About;

About.Layout = MainLayout

export const getStaticProps = async (context) => {    
    return {
        props: {}
    }
}