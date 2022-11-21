import { useState } from "react";

import Header from "./components/Header";
import ContainerOptions from "./components/ContainerOptions";
import ContainerSelected from "./components/ContainerSelected";

export default function App() {
  const [options, setOptions] = useState([
    {
      id: 1,
      option: "Remove f7 pawn from play",
      action: false,
    },
    {
      id: 2,
      option: "Remove b1/b8 knight from play",
      action: false,
    },
    {
      id: 3,
      option: "Checkmate must be delivered with a rook",
      action: false,
    },
    {
      id: 4,
      option: "Checkmate must be delivered with at least one a-b-c-d pawn",
      action: false,
    },
    {
      id: 5,
      option: "Checkmate must be delivered on d-file",
      action: false,
    },
    {
      id: 6,
      option:
        "The weaker player's king may move up to two squares in any direction in a straight line",
      action: false,
    },
    {
      id: 7,
      option:
        "When moving a pawn, roll a dice. On a result of 1-2, revert the move",
      action: false,
    },
  ]);
  const [selected, setSelected] = useState([]);

  return (
    <div className="container max-w-4xl mx-auto space-y-12">
      <Header />
      <ContainerOptions
        options={options}
        setOptions={setOptions}
        selected={selected}
        setSelected={setSelected}
      />
      <ContainerSelected
        options={options}
        setOptions={setOptions}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}
