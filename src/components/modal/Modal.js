/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";

import "./modal.scss";

function Modal({ active, setActive, children }) {
  const close = () => {
    setActive(false);
  };

  const clickContent = (e) => {
    e.stopPropagation();
  };

  const classesModal = active ? "modal active" : "modal";
  const classesContent = active ? "modal__content active" : "modal__content";

  return (
    <div className={classesModal} onClick={close}>
      <div className={classesContent} onClick={clickContent}>
        <button
          type="button"
          className="modal__close"
          aria-label="Close"
          onClick={close}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  active: false,
  setActive: () => {},
};

export default Modal;
