import { Link } from "react-router-dom";
import { MISSING_ROUTE } from "../../../assets/constants/constants";

const MissingRoute = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>{MISSING_ROUTE.TITLE}</h1>
      <p>{MISSING_ROUTE.MESSAGE}</p>
      <Link to="/">{MISSING_ROUTE.HOMEPAGE_LINK}</Link>
    </article>
  );
};

export default MissingRoute;
