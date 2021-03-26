import React from 'react'
import './index.css'

const Modal = (props) => {
  const {footer, content, title, isVisible, onClose} = props
  const keydownHandler = ({key}) => {
    switch (key) {
      case 'Escape':
        onClose()
        break
      default:
    }
  }
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    document.removeEventListener('keydown', keydownHandler)
  })
  return !isVisible ? null : (
    <div className='modal' onClick={onClose}>
      <div className='modal-dialog' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>
            {title}
          </h3>
          <span className='modal-close' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">
          {footer}
        </div>}
      </div>
    </div>
  )
}

export default Modal