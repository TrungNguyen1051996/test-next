import Link from 'next/link';
import React from 'react';

export const MainLayout = ({ children }) => {
    return (
        <div>
            <h1>Main Layout</h1>

            <Link href="/">Home</Link>
            <br />
            <Link href="/about">About</Link>

            <div>{children}</div>
        </div>
    );
};
