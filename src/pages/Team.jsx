import { useOutletContext } from "react-router-dom";

const Team = () => {
  const value = useOutletContext();

  return (
    <>
      <div>Team</div>
      <h1>{value}</h1>
    </>
  );
};

export default Team;
