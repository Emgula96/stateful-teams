import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import DefaultTeam from "./DefaultTeam";

export default function MainContainer({ students, frontendTeam, backendTeam }) {
  return (
    <>
      <FrontEnd frontendTeam={frontendTeam} />
      <DefaultTeam students={students} />
      <BackEnd backendTeam={backendTeam} />
    </>
  );
}
