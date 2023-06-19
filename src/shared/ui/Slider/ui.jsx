import { Swiper } from 'swiper/react'
import { useRef } from 'react'
import SliderNavigation from '@shared/ui/Slider/ui/SliderNavigation'
import './Slider.scss'
import { ReactSVG } from 'react-svg'


const Slider = (props) => {
  const {
    children,
    classNameNavigation,
    hasNavigation,
    ...rest
  } = props

  const swiperRef = useRef(null)


  return (
    <>

      <Swiper
        onBeforeInit={ (swiper) => {
          swiperRef.current = swiper
        } }

        { ...rest }
      >
        { children }

      </Swiper>
      { hasNavigation && <SliderNavigation
        className={ classNameNavigation }
        swiperRef={ swiperRef }
      >
        <ReactSVG className="react-svg" src="/images/icons/arrow-right.svg"/>
      </SliderNavigation> }
    </>
  )
}

export default Slider