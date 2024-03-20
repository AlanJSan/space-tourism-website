import { useState } from "react";
import Banner from "../components/Banner.astro"
import json from "../pages/data.json";

export const DestinationLayoutReact = ({destinations}) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      {[0, 1, 2, 3].map((e, i) => (
        <button key={e} onClick={() => setIndex(i)}>
          index {i}
        </button>
      ))}
      <b>Contador: {index}</b>
      {destinations[index].name}
      
    </div>
  );
};
