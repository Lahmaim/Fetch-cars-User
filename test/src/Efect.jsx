import { useState, useEffect, use } from "react";
import Compo from "./Compo";
import "../src/Efect.css";

export default function Efect() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, []);

//   console.log(user);
  user.length = 10;
  return (
    <>
      <h1>Full name</h1>
      {user.map((use) => {
        return (
          <>
            <Compo
              name={"Name :" + use.name}
              username={"Username :" + use.username}
              email={"email :" + use.email}
              addres={"Address :" + use.address.city}
              phone={"Phone :" + use.phone}
              website={"Website :" + use.website}
            />
          </>
        );
      })}
    </>
  );
}
