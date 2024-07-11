import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  function homepage() {
    navigate("/");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:42000/api/userinsert", {
      method: "post",
      body: JSON.stringify({ name, email, password, confirmpassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json;
    localStorage.setItem("users", JSON.stringify(result));
  };
  return (
    <>
      <h1 className="text-center">Add Tender</h1>
      <section id="login" class="my-5">
        <div class="container">
          <div class="row">
            {/* <!-- Column-1 --> */}
            {/* <!-- End Column-1 -->

                <!-- Column-2 --> */}
            <div class="col-lg-6 offset-3 bglogin p-4">
              <form onSubmit={collectData}>
                {/* <!-- logo --> */}
                <center>
                  <img
                    class="mb-4 rounded-circle"
                    src="./Images/SignUpImage.jpeg"
                    alt="Sign Up Image"
                    width="20%"
                    height="20%"
                  />
                </center>

                {/* <!-- Heading (Register Here) --> */}
                <h1 class="mb-5 text-center">Add Tender Here</h1>

                {/* <!-- User Name --> */}
                <div class="row mb-4">
                  <div class="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Company Name
                  </div>
                  <div class="col-lg-10">
                    <input
                      class="form-control text-capitalize"
                      type="text"
                      placeholder="company"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                {/* <!-- Email --> */}
                <div class="row mb-3">
                  <div class="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Email
                  </div>
                  <div class="col-lg-10">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* <!-- Password --> */}
                <div class="row mb-4">
                  <div class="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Password
                  </div>
                  <div class="col-lg-10">
                    <input
                      class="form-control"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* <!-- Confirm Password --> */}
                <div class="row mb-4">
                  <div class="col-lg-3 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Confirm Password
                  </div>
                  <div class="col-lg-9">
                    <input
                      class="form-control"
                      type="password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* <!-- Choose File --> */}

                {/* <!-- Button (Login) --> */}
                <center>
                  <button
                    onClick={homepage}
                    class="btn btn-primary mb-5 btn-lg"
                  >
                    Register
                  </button>
                </center>

                <center>
                  <p class="text-uppercase fw-light">
                    Do You have an account? &nbsp;
                    <Link to="/">Login</Link>
                  </p>{" "}
                </center>
              </form>
            </div>
            {/* <!-- End Column-2 --> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
