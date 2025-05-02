import React, { Suspense } from "react";
import Categories from "../Categories/Categories";

function LeftSide() {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <Categories />
      </Suspense>
    </div>
  );
}

export default LeftSide;
