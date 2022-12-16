import React from "react";
import User from "../components/User";
import "./style.css";

const Profile = ({ data }) => {
  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{<User user={user} />}</li>
        ))}
      </ul>
    </>
  );
};

export default Profile;
