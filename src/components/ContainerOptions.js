import ButtonAction from "./ButtonAction";
import ButtonRandomItem from "./ButtonRandomItem";

const ContainerOptions = ({ options, setOptions, selected, setSelected }) => {
  const randomElement = (inputArray) =>
    Math.floor(Math.random() * inputArray.length);

  const moveOptionToSelected = (id) => {
    const updateOptions = options.filter((option) => option.id !== id);
    setOptions(updateOptions);
    const updateSelected = options.filter((option) => option.id === id);
    setSelected([...selected, ...updateSelected]);
  };

  const chooseRandomHandicap = () => {
    const randomHandicap = randomElement(options);
    moveOptionToSelected(options[randomHandicap].id);
  };

  const rollDice = () => {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    window.alert(`Rolling dice... ${randomDice}`);
  };

  return (
    <section>
      <div className="flex items-baseline justify-between">
        <h2 className="mb-3 text-lg font-medium">Options</h2>
        <div className="flex space-x-3">
          <ButtonAction action={() => rollDice()} />
          <ButtonRandomItem action={() => chooseRandomHandicap()} />        
        </div>
      </div>

      <table className="w-full text-left">
        <thead className="text-xs uppercase bg-gray-100 rounded">
          <tr>
            <th className="w-4/5 p-3">Option</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, idx) => (
            <tr key={idx} className="text-sm border-b hover:bg-gray-50">
              <td className="p-3">
                <button
                  className="w-full text-left"
                  onClick={() => moveOptionToSelected(option.id)}
                >
                  {option.option}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ContainerOptions;
