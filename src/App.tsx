import routes from "pages/Routes";
import { useRoutes } from "react-router-dom";
// import React, { Suspense } from "react";
// const UserApp = React.lazy(() => import("userApp/App"));
// const ClientApp = React.lazy(() => import("client/App"));

const App = () => {
  const content = useRoutes([
    ...routes,
    // {
    //   path: "client",
    //   element: (
    //     <Suspense fallback={"loading..."}>
    //       <ClientApp />
    //     </Suspense>
    //   ),
    // },
    // {
    //   path: "user",
    //   element: (
    //     <Suspense fallback={"loading..."}>
    //       <UserApp />
    //     </Suspense>
    //   ),
    // },
  ]);

  console.log(content, "content");
  return content;
};
export default App;
