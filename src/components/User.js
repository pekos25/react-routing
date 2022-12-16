import React from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./userstyle.css";

const User = ({ user }) => {
  let navigate = useNavigate();

  return (
    <>
      <h1>{user.id}</h1>

      <p>{user.isDeveloper ? "developer" : "not developer"}</p>

      {/* <Link to={`/profile/${user.id}`}>
        <button className="button">Show user data </button>
      </Link> */}
      <button
        className="button"
        onClick={() => {
          navigate(`/profile/${user.id}`);
        }}
      >
        Show user data
      </button>
    </>
  );
};

export default User;
