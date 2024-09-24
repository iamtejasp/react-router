import { Link } from "react-router-dom";

const TeamNavBar = () => {
  return (
    <ul>
      <li>
        <Link to="tejas">Team - Tejas</Link>
      </li>
      <li>
        <Link to="kayle">Team - kayle</Link>
      </li>
      <li>
        <Link to="..">.. Route</Link>
      </li>
      <li>
        <Link to=".">. Route</Link>
      </li>
      <li>
        <Link to=".." relative="path">
          .. path relative
        </Link>
      </li>
      <li>
        <Link to="." relative="path">
          {" "}
          . path relative
        </Link>
      </li>
    </ul>
  );
};

export default TeamNavBar;
