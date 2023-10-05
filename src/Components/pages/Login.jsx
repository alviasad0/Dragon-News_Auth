import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";


const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location);

  const { logIn} = useContext(AuthContext);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value
    const password = event.target.password.value
    logIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
    .catch(error => {
        console.log(error.code, error.message);
      });
    

  }


    return (
        <div>
            <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Login now!</h1>
             
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleFormSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
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
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>

              <p className=" text-center pb-3">Do not have an Account? <Link to="/register" className="text-lg text-violet-600 font-bold">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;