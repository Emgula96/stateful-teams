import React from "react";
import Student from "./Student";

export default function BackEnd({backendTeam}) {
  return (
    <div className="binarybots">
      <h1>TEAM RAHMIN</h1>
      {backendTeam?.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
}
