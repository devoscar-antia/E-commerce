import { useState } from "react";
import Layout from "../../Components/Layout";
import { useAuth } from "../../Components/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SignIn() {
  const navigate = useNavigate();
  const auth = useAuth();
  const [username, setUserName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login({ username });
    navigate("/my-account", {
      replace: true,
      state: {
        logged: true,
        username,
      },
    });
  };
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col w-full px-3 md:px-0 md:w-auto md:flex-row h-full justify-between mt-20 md:mt-0"
      >
        <div className="left w-full md:w-2/5 md:h-3/6 ">
          <h1 className="text-4xl font-corben mb-9 text-black-700">Log In</h1>

          <form
            onSubmit={handleLogin}
            className="flex flex-col h-52 justify-evenly font-display text-black-600"
          >
            <label htmlFor="username" className="text-xl">
              Write your username:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="border border-b-2 mb-6 rounded-lg h-10 pl-5 focus:outline-none focus:ring-2 focus:ring-green-300 "
            />
            <button
              type="submit"
              className="pointer md:mb-0 font-display w-full h-12 text-lg bg-green-300 rounded-2xl text-center border-b-4 border-black font-medium text-black transition-all duration-300 hover:translate-y-1"
            >
              Log In
            </button>
          </form>
        </div>

        <div className="right hidden md:w-2/4 md:flex justify-center">
          <img
            className="h-5/6 rounded-lg border-b-8 border-green-300"
            src="https://i.postimg.cc/Y9sBX61t/pexels-cottonbro-studio-3585089.jpg"
            alt="login"
          />
        </div>
      </motion.section>
    </Layout>
  );
}

export default SignIn;
