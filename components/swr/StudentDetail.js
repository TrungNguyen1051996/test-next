import React from "react";
import useSWR from "swr";

export const StudentDetail = ({ studentId }) => {
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: 2000,
  });

  function handleMutateClick() {
    mutate({ name: "frontend" }, false);
  }
  return (
    <div>
      Name: {data?.name || "none"}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
};
