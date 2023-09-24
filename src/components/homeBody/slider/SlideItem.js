import React from "react";

export const SlideItem = (props) => {
  return (
    <>
      <a href="#">
        <img src={props.item.image} alt={props.item.name} />
      </a>
    </>
  );
};
