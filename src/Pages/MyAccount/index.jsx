import Layout from "../../Components/Layout"
import { useAuth } from "../../Components/auth";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function MyAccount() {
  const navigate = useNavigate();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout(null);
    navigate("/sign-in", {
      replace: true,
    });
  };
  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="w-screen md:w-fit text-4xl px-5 md:px-0 font-display mt-20 md:mt-0 mb-12 text-black-700 md:pl-10 ">
          Welcome!
          <span
            style={{
              display: "inline-block",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            className="pl-3 underline underline-offset-4 font-display"
          >
            {auth.user.username}
          </span>
        </h1>

        <div className="top flex flex-col justify-evenly h-2/4 w-11/12 mb-10 md:mb-20 md:flex-row">
          <div className="img-container relative md:w-2/5">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-5xl font-corben text-white mb-2">
                Get up to 25% off
              </p>
              <button className="md:w-7/12 w-11/12  h-12 my-4 text-base md:text-lg font-display bg-green-300 rounded-2xl text-center border-b-4 border-black  text-black hover:translate-y-1 focus:translate-y-0 active:translate-y-1 transition-transform">
                <Link to="/">Shop Now</Link>
              </button>
            </div>
            <img
              className="object-cover h-full max-h-fit rounded-lg border-b-4 border-green-300"
              src="https://i.postimg.cc/kMz7ss5G/pexels-antoni-shkraba-6207744.jpg"
              alt="discount"
            />
          </div>

          <img
            className="md:w-2/4 object-cover h-full rounded-lg mt-9 md:m-0 border-b-4 border-green-300"
            src="https://i.postimg.cc/59Z4xgLv/pexels-robin-1020370.jpg"
            alt="clothes"
          />
        </div>

        <div className="bottom flex flex-col md:flex-row justify-between w-11/12 md:w-10/12 md:ml-10">
          <Link
            to={"/my-orders"}
            className="font-display text-xl flex items-center justify-around w-28 hover:underline "
          >
            My orders
            <ArrowLongRightIcon className="w-5 h-5" />
          </Link>
          <button
            className="btn-logout text-lg pointer mt-10 md:mt-0 w-full md:w-48 font-display h-14 my-4 bg-green-300 rounded-2xl text-center border-b-4 border-black font-medium text-black hover:translate-y-1 active:translate-y-1 transition-transform"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </motion.section>
    </Layout>
  );
}

export default MyAccount;
