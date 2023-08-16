import React from "react";
import style from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
