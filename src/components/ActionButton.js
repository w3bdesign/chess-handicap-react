import { XMarkIcon } from '@heroicons/react/24/solid'

const ActionButton = ({ action }) => {

  const buttonStyles = "w-5 h-5 text-gray-300 hover:text-gray-500 transition duration-150 ease-in-out cursor-not-allowed"

  return (
    <button 
      type="button" 
      onClick={action}
      className="flex items-center justify-center" disabled>
      <XMarkIcon className={buttonStyles} />
    </button>
  )
}

export default ActionButton