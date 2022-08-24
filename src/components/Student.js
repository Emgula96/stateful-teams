import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Student({ student }) {
  const frontendTeam = useSelector((state)=> state.frontend.frontendTeam)
  const backendTeam= useSelector((state)=> state.backend.backendTeam)
  const dispatch = useDispatch()
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img
        className="student-pic"
        src={student.img}
        alt=""
      />
      <div>
        <button
          className={`button-24 ${frontendTeam.includes(
            student,
          )
              ? "hide"
              : ""
            }`}
          onClick={() => {
            dispatch({
              type: "SET_FRONTEND",
              payload: student,
            });
            dispatch({
              type: "SET_STUDENTS",
              payload: student,
            });
            dispatch({
              type: "REMOVE_BACKEND",
              payload: student,
            });
          }
          }
        >
          Front Enders 4 Lyfe
        </button>
        <button
          className={`button-24 ${backendTeam.includes(
            student,
          )
              ? "hide"
              : ""
            }`}
          onClick={() => {
            dispatch({
              type: "SET_BACKEND",
              payload: student,
            });
            dispatch({
              type: "SET_STUDENTS",
              payload: student,
            });
            dispatch({
              type: "REMOVE_FRONTEND",
              payload: student,
            });
          }
          }
        >
          Backend, BestEND
        </button>
      </div>
    </div>
  );
}
