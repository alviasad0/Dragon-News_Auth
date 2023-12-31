import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Register = () => {
     const { createUser } = useContext(AuthContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const password2 = event.target.password2.value
        if (password !== password2) { 
            return Swal.fire("Error!", "Password and Confirm password  should same !", "error");
        } else if (password < 6) {
            return Swal.fire("Error!", "Password should be at least 6 characters long!", "error");
        } else if (!/[A-Z]/.test(password)) {
            return Swal.fire("Error!", "Password should contain at least one uppercase letter!", "error");
        } else if (!/[a-z]/.test(password)) {
            return Swal.fire("Error!", "Password should contain at least one lowercase letter!", "error");
        }


        createUser(email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error.code, error.message);
          });
        
        console.log('clicked register',name, email, password , password2);
    }

  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleFormSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    name="password2"
                    placeholder="Confirm password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>

              <p className="text-center pb-2">
                Already have an Account?
                <Link to="/login" className="text-lg text-violet-600 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
