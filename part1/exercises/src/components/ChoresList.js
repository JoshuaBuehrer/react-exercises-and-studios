import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  return (
    <div>
      <p className={classes.choresHeading}>*ChoresList*</p>
      <ol className= {classes.choresText}>
        <li>do my homework</li>
        <li>feed my fish</li>
        <li>find my fish</li>
        <li>google how long a fish can survive out of water</li>
        <li>buy a new fish</li>
      </ol>
    </div>
  );
}
