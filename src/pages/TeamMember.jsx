import { Link, useLoaderData } from "react-router-dom";

const TeamMember = () => {
  const member = useLoaderData();

  return (
    <>
      <div>TeamMember - {member?.name}</div>
      <Link to="..">.. Back</Link>
    </>
  );
};

export default TeamMember;
