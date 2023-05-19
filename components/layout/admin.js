import Link from 'next/link';
import React from 'react';

export const AdminLayout = ({ children }) => {
    return (
        <div>
            <h1>Admin Layout</h1>

            <div>Side Bar</div>

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>

            <div>{children}</div>
        </div>
    );
};