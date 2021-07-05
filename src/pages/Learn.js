import React from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

import "./learn.css";

function Learn() {
  return (
    <div>
      <div className="video-text">
        <Link to="#" className="menu-bars">
          <FaIcons.FaChevronLeft />
        </Link>
        <p>Video</p>
      </div>
      <div>
        <input type="url" placeholder="Paste URL Here" />
      </div>
      <p style={{ marginLeft: "650px" }}>or</p>
      <div className="card" >
        <div className="card-body">Upload</div>
      </div>
    </div>
  );
}

export default Learn;
