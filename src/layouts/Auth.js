import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import FooterSmall from "../components/Footers/FooterSmall.js";

export default function Auth() {

  // views

  const Register = lazy(() => import('../views/auth/Register.js'));
  const Login = lazy(() => import('../views/auth/Login.js'));

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-white bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/presence-doodle.webp").default + ")",
            }}
          ></div>
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/auth/login" exact component={Login} />
              <Route path="/auth/register" exact component={Register} />
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
          </Suspense>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
