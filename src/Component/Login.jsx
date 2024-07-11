import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section id="login" class="my-5">
        <div class="container">
          <div class="row">
            {/* <!-- Column-1 --> */}
            {/* <div class="col-lg-6">
              <img
                class="w-100"
                src="/Images/images.jpg"
                alt="College Students Image-1"
                height="100%"
                style={{ borderRadius: "50%" }}
              />
            </div> */}
            {/* <!-- End Column-1 -->

                <!-- Column-2 --> */}
            <div class="col-lg-6 offset-3 bglogin p-4">
              <form>
                {/* <!-- logo --> */}
                <center>
                  <img
                    class="mb-4 rounded-circle"
                    src="/Images/360_F_511603371_H5FcgZn4GRg786gu3WUZ2XZytFuZ8Gdq.jpg"
                    alt="logo"
                    width="20%"
                    height="20%"
                  />
                </center>

                {/* <!-- Heading (Login) --> */}
                <h1 class="mb-5 text-center">Login</h1>

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
                    />
                  </div>
                </div>

                {/* <!-- Password --> */}
                <div class="row mb-5">
                  <div class="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">
                    Password
                  </div>
                  <div class="col-lg-10">
                    <input class="form-control" type="password" required />
                  </div>
                </div>

                {/* <!-- Button (Login) --> */}
                <center>
                  <button class="btn btn-primary mb-5 btn-lg">Login</button>
                </center>

                {/* <!-- Register Now --> */}
                <center>
                  <p class="text-uppercase fw-light">
                    Don't have an account? &nbsp;
                    <Link to="/register">Register Now</Link>
                  </p>
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

export default Login;
