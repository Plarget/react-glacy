import './Popup.scss'


const Popup = (props) => {
  const { togglePopup, children } = props
  return (
    <div className="popup">
      <div className="popup__body">
        <button className="popup__button" aria-label="close popup" onClick={ togglePopup }>
          <span title="to close popup">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M9.80303 1.13807C10.0634 0.877722 10.0634 0.455612 9.80303 0.195262C9.54268 -0.0650874 9.12057 -0.0650874 8.86022 0.195262L4.99914 4.05633L1.13807 0.195262C0.877722 -0.0650874 0.455612 -0.0650874 0.195262 0.195262C-0.0650874 0.455612 -0.0650874 0.877722 0.195262 1.13807L4.05633 4.99914L0.195262 8.86022C-0.0650874 9.12057 -0.0650874 9.54268 0.195262 9.80303C0.455612 10.0634 0.877722 10.0634 1.13807 9.80303L4.99914 5.94195L8.86022 9.80303C9.12057 10.0634 9.54268 10.0634 9.80303 9.80303C10.0634 9.54268 10.0634 9.12057 9.80303 8.86022L5.94195 4.99914L9.80303 1.13807Z"
                  fill="#2D3440"/>
            </svg>
          </span>
        </button>
        { children }
      </div>
    </div>
  )
}

export default Popup