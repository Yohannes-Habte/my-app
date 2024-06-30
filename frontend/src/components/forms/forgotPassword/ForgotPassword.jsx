import { useState } from "react";
import "./ForgotPassword.scss";
import { toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet-async";

import { validEmail } from "../../../utils/validation/validate";

const ForgotPassword = () => {


  const [email, setEmail] = useState("");

  // If user is logged in, uer will not access the forgot password page
  //   useEffect(() => {
  //     if (currentUser) {
  //       navigate('/');
  //     }
  //   }, [navigate, currentUser]);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    try {
      const { data } = await axios.post(`/auths/forgot-password`, {
        email,
      });
      toast.success(data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <main className="password-page">
      <Helmet>
        <title>Forget Password</title>
      </Helmet>
      <section className="password-page-container">
        <h1 className="title">Forget Password</h1>
        <form onSubmit={handleSubmit} action="" className="form">
          <div className="input-container">
            <span className="icon"> {email} </span>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="input-field"
            />

            <label htmlFor="email" className="input-label">
              Email Address
            </label>

            <span className="input-highlight"></span>
          </div>

          <button className="password-btn">Submit</button>
        </form>
      </section>
    </main>
  );
};

export default ForgotPassword;
