import { useState } from "react";

import Header from "./components/Header";
import ContainerOptions from "./components/ContainerOptions";
import ContainerSelected from "./components/ContainerSelected";

import Modal from "./components/Modal";

import { handicaps } from "./data/handicaps";

export default function App() {
  const [options, setOptions] = useState(handicaps);
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container max-w-4xl px-2 mx-auto space-y-12">
      <Header />
      <ContainerOptions
        options={options}
        setOptions={setOptions}
        selected={selected}
        setSelected={setSelected}
        showModal={showModal}
        setShowModal={setShowModal}
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
