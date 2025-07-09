import React, { useState } from "react";
import { VirtualizedList } from "@Anjan17/react-virtualized";

const VirtualizedListExample = () => {
  const [items, setItems] = useState(
    Array(1000)
      .map((val, idx) => idx)
      .fill()
  );
  const [startAndEnd, setStartAndEnd] = useState([0, 0]);

  return (
    <VirtualizedList
      itemHeight={40}
      totalItems={items?.length}
      listHeight={300}
      onScroll={(params) => {
        setStartAndEnd(params);
      }}
    >
      {items
        .slice(...startAndEnd)
        .fill()
        .map((val, idx) => (
          <div
            key={idx}
            style={{
              height: "40px",
              backgroundColor: `${idx % 2 === 0 ? "lightgrey" : "white"}`,
            }}
          >{`Row ${idx + startAndEnd[0]}`}</div>
        ))}
    </VirtualizedList>
  );
};

export default VirtualizedListExample;
