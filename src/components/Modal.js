import ButtonModal from "./ButtonModal";

const Modal = ({ showModal, setShowModal, title, text, buttonColor }) => {

  const closeModal = () => {
    setShowModal(false);
  };

  return(
    <>
      {showModal ? (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

          <div className="fixed inset-0 transition-opacity bg-gray-700 bg-opacity-50"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-44">
                <div className="p-5 bg-white">
                  <h3 className="mb-1 text-lg font-medium leading-6 text-gray-900" id="modal-title">
                    { title }
                  </h3>
                  <p className="text-sm text-gray-500">
                    { text }
                  </p>
                </div>
                <div className="px-5 py-3 bg-gray-50">
                  <ButtonModal title="Close" action={closeModal} buttonColor={buttonColor} />
                </div>

              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal