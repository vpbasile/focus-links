import React from "react";
import { Outlet } from "react-router";

export default function SignInLayout() {
  return (
    <React.Fragment>
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </React.Fragment>
  );
}
