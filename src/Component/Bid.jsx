import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Bid() {
  const navigate = useNavigate();
  function bidpage() {
    navigate("/");
  }

  const [users, setusers] = useState([]);

  const useList = async () => {
    const res = await axios.get("http://localhost:42000/api/mybids");
    console.log(res.data.productsData);
    setusers(res.data.productsData);
  };

  useEffect(() => {
    useList();
  }, []);
  console.log(users);

  const [companyName, setcompanyName] = useState("");
  const [cost, setCost] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:42000/api/bidinsert", {
      method: "post",
      body: JSON.stringify({ companyName, cost }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json;
    localStorage.setItem("Product", JSON.stringify(result));
  };

  return (
    <>
      <Header />

      <h1 className="text-center">Latest Bids</h1>

      <table className="table table-dark mt-4 mb-4">
        <thead>
          <tr>
            <td>ID</td>
            <td>Company Name</td>
            <td>Cost</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.companyName}</td>
              <td>{item.cost}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-center">Add Bid</h1>

      <form onSubmit={collectData}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <label for="inputEmail4">Company Name</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={(e) => setcompanyName(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4">Cost</label>
              <input
                type="Number"
                className="form-control"
                id="inputPassword4"
                placeholder="₹"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
          </div>
        </div>
        <center>
          <button
            type="submit"
            onClick={bidpage}
            className="btn btn-primary mt-5 mb-5"
          >
            Sign in
          </button>
        </center>
      </form>

      <footer className="mt-5" style={{ marginTop: "3cm" }}>
        <div class="container mt-2">
          <div class="copyright">
            <div>Designed by Paul</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Bid;
