import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutesWrapper({ isAuthenticated }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}

// import { Routes, Route } from "react-router-dom";
// import { connect } from "react-redux";

// const PrivateRoutesWrapper = ({ children, authenticated, ...rest }) => {
//   console.log(authenticated);
//   return (
//     <Routes
//       {...rest}
//       render={({ location }) =>
//         authenticated ? (
//           children
//         ) : (
//           <Route
//             to={{
//               path: "/login",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// const mapStateToProps = ({ session }) => ({
//   authenticated: session.authenticated,
// });

// export default connect(mapStateToProps)(PrivateRoutesWrapper);
