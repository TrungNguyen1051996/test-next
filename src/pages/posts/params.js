import { useRouter } from 'next/router';
import React from 'react';

const ParamPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Post ParamPage</h1>
            <p>Query: {JSON.stringify(router.query)}</p>
        </div>
    );
};

export default ParamPage;