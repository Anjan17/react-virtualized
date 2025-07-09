import React, { useEffect, useCallback, useRef, useState } from "react";
import ReactVirtualizer from "./ReactVirtualizer";

const List = ({ itemHeight, totalItems, children, listHeight, onScroll }) => {
  const virtualizerObj = useRef(null);
  const containerRef = useRef(null);
  const [scrollParams, setScrollParams] = useState([0, 0]);
  const onUpdateCb = useCallback((params) => {
    console.log("start and end", params);
    setScrollParams(params);
    onScroll(params);
  }, []);

  useEffect(() => {
    virtualizerObj.current = new ReactVirtualizer(
      40,
      containerRef?.current,
      totalItems,
      onUpdateCb
    );
  }, [onUpdateCb]);
  return (
    <div
      className="list-container"
      style={{
        height: `${listHeight}px`,
        overflow: "auto",
        width: "250px",
        border: "1px solid black",
      }}
      ref={containerRef}
    >
      <div
        id="items-container"
        style={{
          height: `${itemHeight * totalItems}px`,
        }}
      >
        <div
          className="visible-item-container"
          style={{
            transform: `translateY(${scrollParams[0] * itemHeight}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default List;
