// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  //   const [token, setToken]  = useState ("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  // const dashboard = link;
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    fetch("https://40d4-118-99-65-105.ngrok-free.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: name, password: password }),
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
    console.log(data.data.token.access_token);
    localStorage.setItem("token", data.data.token.access_token);
    setData(data);
    const token = localStorage.getItem("token");
    console.log(token);
    // dashboard.push("/dashboard");
    fetch("https://40d4-118-99-65-105.ngrok-free.app/api/traits/get_traits", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };
  return (
    <>
      <div className="flex flex-col items-center my-48">
        <h2 className="text-3xl text-white font-bold mb-5">Login</h2>
        <div className="card card-compact bg-white w-96 shadow-xl">
          <div className="card-body text-black">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col ms-3">
                <label className="font-semibold">
                  Username:
                  <input
                    className="input input-bordered w-full max-w-xs text-white"
                    type="email"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>

                <label className="font-semibold">
                  Password:
                  <input
                    className="input input-bordered w-full max-w-xs text-white"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
                <div className="text-black">
                  <button
                    type="submit"
                    className="btn btn-outline w-80 btn-primary mt-5"
                  >
                    <Link to="/Dashboard">Submit</Link>
                    {/* Submit */}
                  </button>
                </div>
              </div>
            </form>
            {data && <p>Data from server: {data.message}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
