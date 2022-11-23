const ButtonModal = ({ title, action, buttonColor }) => {

  const mergeClasses = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const buttonStyles =
    "px-3 py-2 text-xs font-medium text-center rounded flex items-center w-full justify-center transition duration-150 ease-in-out";

  return (
    <button
      type="button"
      onClick={action}
      className={mergeClasses(`
        ${buttonStyles}
        ${buttonColor}
      `)}
    >
      { title }
      
    </button>
  );
};

export default ButtonModal;
