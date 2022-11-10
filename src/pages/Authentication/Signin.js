import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import useTitle from "../../components/UseTitle";

const Signin = () => {
  const { ProviderLogin, signInWithMailPass } = useContext(AuthContext);
  const [error, setError] = useState("");

  useTitle("ZP | Signin");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password);
    signInWithMailPass(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        // get jwt token
        const currentUser = {
          email: user.email,
        };
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("zero-token", data.token);
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error("error : ", error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        if (result.user.uid) {
          toast.success("Login Successful");
        }
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url("https://pbblogassets.s3.amazonaws.com/uploads/2019/03/06130402/shooting-event.jpg")`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-1/2 shadow-2xl hero-overlay">
          <div className="hero-content">
            <img
              src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/270747295_646139710148481_1997361153063211465_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHaGzuA6DVMHkt_8y8tp56E6gidaAh_x-HqCJ1oCH_H4e_i3xUXYgF5WLAGKxLKUQgmIIE_7RQtdOrXkJmC_QYX&_nc_ohc=EP7pMRU_TpQAX_tbAfM&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCcxwzISdQ6NrBCkZFvVH0S4ArIJKrkhteNQiIxKYshNQ&oe=636F6C91"
              alt="Sign in"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <h1 className="text-4xl text-center font-extrabold mb-8">
                Sign in to Zero Photography!
              </h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {/* <label className="label">
                <Link
                  to="/reset-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label> */}
              <p
                className="mb-2 
          text-orange-500 text-center text-sm font-semibold
          dark:border-gray-400"
              >
                {error}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign in</button>
              
              <p className="mt-8 text-md text-center text-gray-200">
                Don't have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
                >
                  Create One
                </Link>
              </p>
              <h5 className="text-center text-lg font-semibold mt-4">OR</h5>
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="btn flex items-center justify-center w-full py-2 mt-4 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none"
              >
                <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                  <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                </svg>

                <span className="hidden mx-2 sm:inline">
                  Sign in with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
<h2>sign in</h2>;
