const Modal = ({ show, onClose, children, showClose = true }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">

        {showClose && (
          <button className="modal-close" onClick={onClose}>
            ✖
          </button>
        )}

        {children}

      </div>
    </div>
  );
};

export default Modal;
