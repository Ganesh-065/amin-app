import React, { Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { decrement, increment } from "./redux/counterSlice.ts";
import { RootState } from "./redux/store.ts";

const UserApp = React.lazy(() => import("userApp/App"));
const ClientApp = React.lazy(() => import("client/App"));

const App = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((store: RootState) => store.counter);

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
                <h1>Admin App {value}</h1>
                <button onClick={() => dispatch(increment())}>Add</button>
                <button onClick={() => dispatch(decrement())}>Remove</button>
              </div>
            }
          />
          <Route
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
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
