import { Swiper } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.scss'
import { useRef } from 'react'
import { Navigation } from 'swiper'


const Slider = (props) => {
  const {
    children,
    ...rest
  } = props

  const swiperRef = useRef(null)


  return (
    <>

      <Swiper
        modules={ [Navigation] }
        onBeforeInit={ (swiper) => {
          swiperRef.current = swiper
        } }

        { ...rest }
      >
        { children }
      </Swiper>
      <div>
        <button className="prev" onClick={ () => swiperRef.current?.slidePrev() }>das</button>
        <button className="next" onClick={ () => swiperRef.current?.slideNext() }>dd</button>
      </div>
    </>
  )
}

export default Slider