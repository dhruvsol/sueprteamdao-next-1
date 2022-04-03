import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

export const GetName = ({ userId }) => {
  // const [names, setName] = useState(null);
  // const fetchdata = async () => {
  //   const name = await fetch(
  //     `http://localhost:5000/v1/users/${userId}`
  //   );
  //   // console.log(name);
  //   const data = JSON.stringify(name);
  //   console.log(data);
  //   setName(data);
  // };
  // useEffect(() => {
  //   fetchdata();
  // }, []);
  const [names, setNames] = useState("");
  const test = async () => {
    fetch(`http://localhost:5000/v1/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setNames(data.name));
  };
  test();
  return (
    <>
      <div>{names}</div>
    </>
  );
};
