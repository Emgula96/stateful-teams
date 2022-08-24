import React from "react";
import Student from "./Student";

export default function FrontEnd({ frontendTeam }) {
  return (
    <div className="bc-crew">
      <h1>TEAM JOE</h1>
      {frontendTeam?.map((student) => (
        <Student student={student} />
      ))}
    </div>
  );
}
