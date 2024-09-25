import { Link, useParams } from "react-router-dom";
import teamMembers from "./../teamMembers.json";

const TeamMember = () => {
  const params = useParams();

  const member = teamMembers.find((i) => i.id === params?.id);

  return (
    <>
      <div>TeamMember - {member?.name}</div>
      <Link to="..">.. Back</Link>
    </>
  );
};

export default TeamMember;
