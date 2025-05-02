import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";
import LeftSide from "../components/homelayouts/LeftSide";
import RightSide from "../components/homelayouts/RightSide";

function HomeLayout() {
  return (
    <div className="max-w-[1140px] mx-auto ">
      <Header />
      <main className="mt-10 grid grid-cols-12 gap-5">
        <aside className="left-side col-span-3 bg-amber-400">
          <LeftSide />
        </aside>
        <section className="main-content col-span-6 bg-blue-500">
          <Outlet />
        </section>
        <aside className="right-side col-span-3 bg-green-500">
          <RightSide />
        </aside>
      </main>
    </div>
  );
}

export default HomeLayout;
