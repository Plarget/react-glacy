import './SliderNavigation.scss'
import classNames from 'classnames'


const SliderNavigation = (props) => {
  const {
    swiperRef,
    children,
    className,
  } = props
  return (
    <div className="slider-navigation">
      <button
        className={ classNames('slider-navigation__prev', `${className}__prev`) }
        onClick={ () => swiperRef.current?.slidePrev() }
      >
        { children }
      </button>
      <button
        className={ classNames('slider-navigation__next', `${className}__next`) }
        onClick={ () => swiperRef.current?.slideNext() }
      >
        { children }
      </button>
    </div>
  )
}

export default SliderNavigation