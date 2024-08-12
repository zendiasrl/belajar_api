// import React from "react";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [dataKota, setDataKota] = useState("");
  const [data, setData] = useState("");

  // API Kota
  useEffect(() => {
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((response) => response.json())
      .then((dataKota) => {
        setDataKota(dataKota.slice(0, 20));
        // console.log(dataKota);
      });
  }, []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon-species")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results);
        setData(data.results);
      });
  }, []);

  // if (data && Array.isArray(data)) {
  //   data.map((item) => {
  //     console.log(item.name);
  //   });
  // } else {
  //   console.log("Data is not an array");
  // }
  return (
    <div>
      <Sidebar />
      <div className="container w-3/5 right-0 mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <header className="flex justify-between w-[60rem] mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
          {/* <div>Data: {data}</div> */}
        </header>
        <main className="w-[60rem] h-auto">
          <div className="bg-white shadow-md p-4 rounded">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="text-black">
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Kota</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  {/* row 1 */}
                  <tr>
                    <th>
                      {data.length > 0 &&
                        data.map((item, index) => (
                          <div className="-ms-3" key={index}>
                            <th>{index + 1}</th>
                            {/* <tr>{item.name}</tr> */}
                          </div>
                        ))}
                    </th>
                    <td>
                      {/* {data.results} */}
                      {data.length > 0 &&
                        data.map((item, index) => (
                          <div className="-ms-3" key={index}>
                            {/* <th>{index + 1}</th> */}
                            <td>{item.name}</td>
                          </div>
                        ))}
                    </td>
                    <td>
                      {dataKota.length >= 20 &&
                        dataKota.map((item, index) => (
                          <div className="-ms-3" key={index}>
                            <td>{item.name}</td>
                          </div>
                        ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
