import { StudentDetail } from "@/components/swr";
import React, { useState } from "react";

const SWRConfig = () => {
  const [detailList, setDetailList] = useState([1, 1, 1]);
  function handleAddClick() {
    setDetailList((prev) => [...prev, 1]);
  }

  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleAddClick}>add detail</button>
      <ul>
        {detailList.map((el, index) => {
          return (
            <li key={index}>
              <StudentDetail studentId="lea11ziflg8xoiza" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SWRConfig;
