import React, { useState } from "react";
import { Link , Redirect} from "react-router-dom";
import axios from 'axios'

import "./Home.css";

const Home = (props) => {
  const [roomName, setRoomName] = useState("");
  const [chatrooms, setChatrooms] = useState([]);

  const getChatrooms = () => {
    axios
      .get("http://localhost:8080/chatroom", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setChatrooms(response.data);
        console.log(response.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);
 
  

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };


  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/home/${roomName}/${props.emailQuery}`} className="enter-room-button">
        Join room
      </Link>
    </div>
  );
};

export default Home;