// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   Navigate,
// } from "react-router-dom";

// const Protected = ({ component: Cmp, ...rest }) => {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route
//             {...rest}
//             render={(props) =>
//               localStorage.getItem("loginData") ? (
//                 <Cmp {...props} />
//               ) : 
//                 <Navigate to="/login" />

//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default Protected;
