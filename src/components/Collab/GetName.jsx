import React, { useEffect, useState } from "react";

export const GetName = ({ userId }) => {
  const [names, setName] = useState(null);
  const fetchdata = () => {
    const name = fetch(
      `https://intense-mesa-39554.herokuapp.com/v1/users/${userId}`
    );
    const data = JSON.stringify(name);
    setName(data);
  };
  useEffect(() => {
    fetchdata();
  });

  return (
    <>
      <div>{names}</div>
    </>
  );
};
