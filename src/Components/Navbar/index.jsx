import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { HomeIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../../Components/auth"; 
import PropTypes from 'prop-types'; 

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const auth = useAuth();

  const NavItem = ({ to, children, activeStyle, onClick }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `w-full h-10 inline-flex py-1 px-4  ${isActive ? activeStyle : undefined
          }`
        }
        onClick={onClick}
      >
        {children}
      </NavLink>
    );
  };

  NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    activeStyle: PropTypes.string,
    onClick: PropTypes.func,
  };

  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="bg-green-400 flex justify-between items-center fixed z-10 top-0 w-full py-2 px-8 text-base font-normal">
      <ul className="flex items-center gap-3">
        <li className="font-extrabold text-3xl">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <HomeIcon className="n-6 w-6 text-black"></HomeIcon>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => context.setSearchByCategory("furnitures")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => context.setSearchByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => context.setSearchByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex justify-between items-center h-2/5 px-2">
        {auth.isLoggedIn ? (
          <div className="private flex justify-center">
            <li>
              <NavItem
                to="/my-account"
                activeStyle={activeStyle}
                onClick={null}
              >
                My account
              </NavItem>
            </li>
            <li>
              <NavItem to="/my-orders" activeStyle={activeStyle} onClick={null}>
                My orders
              </NavItem>
            </li>
          </div>
        ) : (
          <div className="public flex items-center justify-center">
            <li>
              <NavItem to="/sign-in" activeStyle={activeStyle} onClick={null}>
                <UserCircleIcon className="w-8 h-8 "></UserCircleIcon>
                Sign In
              </NavItem>
            </li>
          </div>
        )}
        <li className="flex items-center justify-center text-black-300">
          <ShoppingBagIcon className="w-6 h-6 " />
          {context.cartProducts.length}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
