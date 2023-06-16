import AddressWindow from '@shared/ui/AddressWindow'
import { useRef, useState } from 'react'
import Popup from '@shared/ui/Popup'
import Feedback from '@features/Feedback'
import { lock, unlock } from 'tua-body-scroll-lock'
import './MainAddress.scss'
import useBodyLock from '@shared/hooks/useBodyLock'


const MainAddress = () => {
  const [popup, setPopup] = useState(false)
  const ref = useRef()
  const bodyLock = useBodyLock(popup, ref)

  const togglePopup = (element) => {
    setPopup(!popup)
    bodyLock()
  }

  return (
    <section className="address">
      <div className="address__inner container">
        <div className="address__body">
          <AddressWindow togglePopup={ togglePopup }/>
          { popup &&
            <Popup togglePopup={ togglePopup } ref={ref}>
              <Feedback/>
            </Popup> }
        </div>
      </div>
    </section>
  )
}

export default MainAddress