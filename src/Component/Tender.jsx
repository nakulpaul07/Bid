import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

function Tender() {
  return (
    <>
      <Header />
      <h1 classNameName="text-center mb-3 mt-5">Latest Tender</h1>

      <table className="table table-dark mt-4 mb-4">
        <thead>
          <tr>
            {/* <td>ID</td> */}
            <td>Company Name</td>
            <td>Cost</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr>
              {/* <td>{item._id}</td> */}
              <td>{item.companyName}</td>
              <td>{item.cost}</td>
              <td>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <div className="container">
          <div className="copyright">
            <div>Designed by Paul</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Tender;
