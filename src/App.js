import "./styles.css";
import { useState } from "react";
import Card from "./card";
import Visitors from "./visitors";
//let data = ['john' ,'ross'];
export default function App() {
  const [color, setcolor] = useState("orange");
  const [user, setuser] = useState(["omkar"]);
  const [username, setname] = useState("");
  const adduser = () => {
    setuser((prevusers) => {
      return [...prevusers, username];
      //to update list with new users , prevusers is just an argument you can put any name
    });
  };
  const addname = (e) => {
    setname(e.target.value);
    // i am using username just because i want to adduser when i click the adduser button so to get entered name i am doing this
  };

  return (
    <div className="App" style={{ backgroundColor: `${color}` }}>
      <h1>welcome {username} </h1>
      <label>Color </label>
      <input type="text" onChange={(e) => setcolor(e.target.value)} />
      <button> update</button>
      <br />
      <br />
      <label>Name </label>
      <input type="text" onChange={addname} />
      <button onClick={adduser}> add user</button>

      <h2>Start editing to see some magic happen!</h2>
      <Visitors users={user} />
      {/* just passing updated user to visitors component */}
    </div>
  );
}
