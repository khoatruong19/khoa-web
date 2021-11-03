import '../styles/Modal.scss';
const Modal = ({ handleClose, show, children,editItem ,id, title, comment}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handelSave = (id,title,comment) =>{
    handleClose()
    editItem(id,title,comment)
  }
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={() => handelSave(id,title,comment)} className="save-btn" >
          Save
        </button>
      </section>
    </div>
  );
};

export default Modal