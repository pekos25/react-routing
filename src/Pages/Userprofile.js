import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Userprofile = ({ data }) => {
  let navigate = useNavigate();
  let { id } = useParams();
  const user = data.filter((user) => user.id === id);
  return (
    <div>
      <h1>First name:{user[0].firstName}</h1>
      <h1>Last name:{user[0].lastName}</h1>
      <h4>{user[0].isDeveloper ? "DEVELOPER" : "NOT DEVELOPER"}</h4>
      <button
        className="button button-back"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Back to profile
      </button>
    </div>
  );
};

export default Userprofile;
