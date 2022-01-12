import React, { useState } from "react";
import { getUser, removeUserSession } from "./Utils/Common";
import axios from "axios";

function Dashboard(props) {
  const user = getUser();
  const country = useFormInput("");
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  const searchCountry = () => {
    setTimeout(function () {
      axios
        .get("/user/")
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  };

  return (
    <div>
      Welcome {user.name}!<br />
      <br />
      <input type="input" {...country} onKeyUpCapture={searchCountry} />
      {/* <div class="response"></div> */}
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default Dashboard;
