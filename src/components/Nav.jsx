import React from "react";
import {
  Link
} from "react-router-dom";

export default function Nav() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/personal">personal</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

