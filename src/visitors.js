//import {useState} from 'rea
import "./visitorlist.css";
function visitors(props) {
  return (
    <ul className="namediv">
      {" "}
      {props.users.map((user) => (
        <h1>{user}</h1>
      ))}
    </ul>
  );
}
export default visitors;
