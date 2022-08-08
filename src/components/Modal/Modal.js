import './modal.styles.scss';

const Modal = ({ isOpen, children }) => (
        <div 
            className={`${isOpen ? 'opened' : 'closed'} modal`}>
            { children }
        </div>
)

export default Modal;
