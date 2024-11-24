import React from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  return (
    showModal && (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
        <div className="bg-blue-900 text-red-500 rounded-lg shadow-lg w-1/2 p-6">
            <button
              className="text-2xl mb-3"
              onClick={() => setShowModal(false)}
            >
              &#215;
            </button>
            {children}
        </div>
      </div>
    )
  );
};

export default Modal;
