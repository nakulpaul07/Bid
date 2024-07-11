import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-blue">
        <div className="container">
          <Link className="navbar-brand" to="/index">
            <img
              src="/Images/360_F_511603371_H5FcgZn4GRg786gu3WUZ2XZytFuZ8Gdq.jpg"
              alt="Angular Project"
              style={{ width: "2cm", height: "2cm", borderRadius: "50%" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            style={{
              justifyContent: "space-around",
            }}
            id="navbarCollapse"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  ADD Tender
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link" to="/tender">
                  Bid
                </Link> */}
              </li>
            </ul>
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link href="/register" class="nav-link">
                  Admin Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
