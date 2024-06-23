import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/headdiv.css";
import { useState } from "react";
import axios from "axios";
// import { response } from "express";

export default function HeadDiv() {
  // const [userCount, setUserCount] = useState(null);

  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {

      try {
        const response = await axios.get("http://127.0.0.1:3001/userCount");
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error("Error fetching user count...", error);
      }
    };
    fetchUserCount();
  }, []);

  return (
    <>
      <div>
        <div className="headdiv-div1">
          <h1>
            <a href="/">
              Unemployed <span style={{ fontWeight: 500 }}>Servay</span>
            </a>
          </h1>
          <h2>
            Are you <span style={{ color: "yellow" }}>Unemployed?</span>
          </h2>
          <Link to="/login">
            <button className="button1">Vote</button>
          </Link>
          {/* {userCount !== null &&( */}
          <button className="button2">
            Unemployment count : {userCount !== null ? userCount : "Loading..."}
          </button>
          {/* )} */}
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,160C384,139,480,117,576,106.7C672,96,768,96,864,122.7C960,149,1056,203,1152,224C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
