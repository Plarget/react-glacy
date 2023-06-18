import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css'
import './RangeSliderCustom.scss'
import classNames from 'classnames'


const RangeSliderCustom = (props) => {
  const {
    register,
    name,
    label,
    value,
    onInput,
    minMax,
    className
  } = props
  return (
    <div className={ classNames('range-slider-custom', className) }>
      { label && <label className="range-slider-custom__label" htmlFor={ name }>{ label }</label> }
      <div className="range-slider-custom__body">
        <RangeSlider
          className="range-slider-custom__control"
          { ...register(name) }
          id={ name }
          min={ minMax[0] }
          max={ minMax[1] }
          value={ value }
          onInput={ onInput }
        />
      </div>
    </div>
  )
}

export default RangeSliderCustom