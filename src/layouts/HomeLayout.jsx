import React from "react";
import Header from "../components/Header/Header";

function HomeLayout() {
  return (
    <div>
      <Header />
      <main>
        <aside className="left-side"></aside>
        <section className="main-content"></section>
        <aside className="right-side"></aside>
      </main>
    </div>
  );
}

export default HomeLayout;
