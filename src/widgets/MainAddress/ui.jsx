import AddressWindow from '@shared/ui/AddressWindow'
import { useState } from 'react'
import Popup from '@shared/ui/Popup'
import Feedback from '@features/Feedback'
import { lock, unlock } from 'tua-body-scroll-lock'
import './MainAddress.scss'


const MainAddress = () => {
  const [popup, setPopup] = useState(false)

  const togglePopup = (element) => {
    setPopup(!popup)
    if (popup) {
      unlock()
    } else {
      lock()
    }
  }

  return (
    <section className="address">
      <div className="address__inner container">
        <div className="address__body">
          <AddressWindow togglePopup={ togglePopup }/>
          { popup &&
            <Popup togglePopup={ togglePopup }>
              <Feedback/>
            </Popup> }
        </div>
      </div>
    </section>
  )
}

export default MainAddress