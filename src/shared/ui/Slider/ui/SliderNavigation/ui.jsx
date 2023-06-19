import classNames from 'classnames'
import './SliderNavigation.scss'


const SliderNavigation = (props) => {
  const {
    swiperRef,
    children,
    className,
  } = props

  return (
    <div className="slider-navigation">
      <button
        className={ classNames('slider-navigation__prev', `${ className }__prev`) }
        onClick={ () => swiperRef.current?.slidePrev() }
        aria-label="to prev slide"
      >
        <span title="prev slide">
           { children }
        </span>
      </button>
      <button
        className={ classNames('slider-navigation__next', `${ className }__next`) }
        onClick={ () => swiperRef.current?.slideNext() }
        aria-label="to next slide"
      >
        <span title="next slide">
         { children }
        </span>
      </button>
    </div>
  )
}

export default SliderNavigation