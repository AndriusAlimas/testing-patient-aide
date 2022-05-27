import { Link } from "react-router-dom";

const MissingRoute = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <p>Page Not Found</p>
      <div className="flexGrow">
        <Link to="/landing">Visit Our Homepage</Link>
      </div>
    </article>
  );
};

export default MissingRoute;
