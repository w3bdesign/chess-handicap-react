import { XMarkIcon, CubeIcon } from "@heroicons/react/24/solid";

const ButtonAction = ({ action }) => {
  const buttonStyles =
    "w-5 h-5 text-gray-300 hover:text-gray-500 transition duration-150 ease-in-out";

  return (
    <button
      type="button"
      onClick={action}
      className="flex items-center justify-center"
    >
      {action == "() => removeSelected(option.id)" 
        ? <XMarkIcon className={buttonStyles} /> 
        : <CubeIcon className={buttonStyles} />}
      
    </button>
  );
};

export default ButtonAction;
