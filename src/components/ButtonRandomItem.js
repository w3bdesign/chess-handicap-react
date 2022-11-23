import { BarsArrowDownIcon } from "@heroicons/react/20/solid";

const ButtonRandomItem = ({ action }) => {
  const buttonStyles =
    "px-3 py-2 text-xs font-medium text-center text-white bg-black rounded flex items-center justify-center space-x-2 hover:bg-gray-800 transition duration-150 ease-in-out";

  return (
    <button
      type="button"
      onClick={action}
      className={buttonStyles}
    >
      <BarsArrowDownIcon className="w-5 h-5" />
      <span>Select Random</span>
      
    </button>
  );
};

export default ButtonRandomItem;
