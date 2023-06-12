import './styles.scss'
import {AddressWindow} from "../../shared/ui/AddressWindow/AddressWindow";
import {useState} from "react";
import {Popup} from "../../shared/ui/Popup/Popup";
import {FormFeedback} from "../../features/FormFeedback/FormFeedback";
import { lock, unlock } from 'tua-body-scroll-lock'

export const MainAddress = () => {
  const [popup,setPopup] = useState(false)

  const togglePopup = (element) => {
    setPopup(!popup)
    if (popup) {
      unlock()
    } else {
      lock()
    }
   }

  return (
      <section className='address'>
        <div className="address__inner container">
          <div className="address__body" >
            <AddressWindow togglePopup={togglePopup} />
            {popup &&
             <Popup togglePopup={togglePopup} >
              <FormFeedback/>
            </Popup>}
          </div>
        </div>
      </section>
  )
}