import React from 'react';
import useSWR from 'swr';

export const StudentDetail = ({ studentId }) => {

    const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
        revalidateOnFocus: false,
        
    })
    return (
        <div>
            Name: {data?.name || 'none'}
        </div>
    );
};