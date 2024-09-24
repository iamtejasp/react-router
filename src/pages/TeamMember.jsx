import { Link } from "react-router-dom";

const TeamMember = ({ name }) => {
  return (
    <>
      <div>TeamMember - {name}</div>
      <Link to="..">.. Back</Link>
    </>
  );
};

export default TeamMember;
