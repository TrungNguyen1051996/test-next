import { StudentDetail } from '@/components/swr';
import React from 'react';

const SWRConfig = () => {
    return (
        <div>
            <h1>SWR Playground</h1>
            <ul>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza"/>
                </li>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza"/>
                </li>
                <li>
                    <StudentDetail studentId="lea11ziflg8xoiza"/>
                </li>
            </ul>
        </div>
    );
};

export default SWRConfig;