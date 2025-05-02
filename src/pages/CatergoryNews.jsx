import React from "react";
import { useParams } from "react-router";

function CatergoryNews() {
  const { id: categoryId } = useParams();
  return <div>this is category news page -{categoryId}</div>;
}

export default CatergoryNews;
