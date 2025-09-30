import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/jaswant-23')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <>
      <div className="max-w-xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-6 mt-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          GitHub Followers: {data.followers}
        </h2>

        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="mx-auto rounded-full border-4 border-white shadow-md w-48 h-48 object-cover mb-4"
        />

        <h3 className="text-2xl font-bold mb-2">{data.name}</h3>

        {data.blog && (
          <Link
            to={data.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline block mb-2"
          >
            {data.blog}
          </Link>
        )}

        {data.html_url && (
          <Link
            to={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white underline"
          >
            View GitHub Profile
          </Link>
        )}
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/jaswant-23");
  return response.json();
};
