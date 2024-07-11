import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

function Home() {
  const [users, setusers] = useState([]);

  const useList = async () => {
    const res = await axios.get("http://localhost:42000/api/getalluser");
    // console.log(res.data.data);
    setusers(res.data.data);
  };

  useEffect(() => {
    useList();
  }, []);
  // console.log(users);
  return (
    <>
      <Header />
      <section className="banner">
        <div className="banner-box">
          <div className="intro-text">
            <div className="intro-text-box">
              <h1>Latest Tender</h1>
              <table className="table table-dark mt-4 mb-4">
                <thead>
                  <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Time At Created</td>
                    <td>Add New Bid</td>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
                    <tr>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.createdAt}</td>

                      <td>
                        <Link to="/bid">
                          <button className="btn btn-md btn-primary">
                            Add Bid
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                All information relating to any bid, including the names of
                prospective customers and the prices, terms or other conditions
                of sale.
              </p>
            </div>
          </div>
          {/* <img
            src="/Images/banner.jpg"
            alt="banner"
            style={{ height: "10cm" }}
          /> */}
        </div>
        {/* <h1 className="text-center mt-5">Latest Blogs</h1> */}
      </section>
    </>
  );
}

export default Home;
