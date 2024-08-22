import React from "react";
import Blog from "blog/Blog";
import Register from "components/Register.tsx";
import Login from "components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";

// const UserApp = React.lazy(() => import("userApp/App"));
// const ClientApp = React.lazy(() => import("client/App"));

const App = () => {
  // lofin45614@alientex.com

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <div
                style={{
                  margin: "10px",
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: "greenyellow",
                }}
              >
                <h1>Admin App</h1>
              </div>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/user"
            element={
              <Suspense fallback={"loading..."}>
                <UserApp />
              </Suspense>
            }
          />
          <Route
            path="/client"
            element={
              <Suspense fallback={"loading..."}>
                <ClientApp />
              </Suspense>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
