import React from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Loading } from "./components";

export default function App() {
  const loading = useSelector((s) => s.loading.length !== 0);
  const isLogged = useSelector((s) => s.isLogged);
  const elements = useRoutes(routes(isLogged));

  return (
    <React.Fragment>
      <Toaster position="top-center" reverseOrder={false} />
      {elements}
      {loading && <Loading />}
    </React.Fragment>
  );
}
