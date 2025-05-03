import React, { use } from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigation } from "react-router";
import LeftSide from "../components/homelayouts/LeftSide";
import RightSide from "../components/homelayouts/RightSide";
import AuthContext from "../contexts/AuthContext";

function HomeLayout() {
  const navigation = useNavigation();
  const { loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-xl font-bold">Loading....</h2>
      </div>
    );
  }
  return (
    <div className="max-w-[1140px] mx-auto ">
      <Header />
      <main className="mt-10 grid grid-cols-12 gap-5">
        <aside className="left-side col-span-3 sticky top-0 h-fit ">
          <LeftSide />
        </aside>
        <section className="main-content col-span-6">
          {navigation.state === "loading" ? (
            <span className="loading loading-spinner text-error"></span>
          ) : (
            <Outlet />
          )}
        </section>
        <aside className="right-side col-span-3 sticky top-0 h-fit">
          <RightSide />
        </aside>
      </main>
    </div>
  );
}

export default HomeLayout;
