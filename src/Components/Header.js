import React from "react";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
const handleSignOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/");
  }).catch((error) => {
    // An error happened.
    navigate("/error");
  });
}
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
      className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="p-3 flex">
        <img src="https://occ-0-179-300.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABcLtVOXjghzlDrVwmPHGQtkXjoJPmpISBttze62ZpxaaFWq-LZVH5yZxMD15UVLU6nd4GIUtTSHOMsbUOdPCIYRL2-2bGNU.png?r=b38" alt="userIcon"/>
        <button onClick={handleSignOut} className="font-bold text-white">Sign Out</button>
      </div>
}
    </div>
  );
};

export default Header;
