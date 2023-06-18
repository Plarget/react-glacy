import CheckBox from '@shared/ui/CheckBoxesGroup/ui/CheckBox'
import './CheckBoxesGroup.scss'
import classNames from 'classnames'


const CheckBoxesGroup = (props) => {
  const {
    register,
    label,
    checkboxes,
    className,
  } = props

  return (
    <div className={ classNames('checkbox-group', className) }>
      { label && <label className="checkbox-group__label">{ label }</label> }
      <div className="checkbox-group__body">
        { checkboxes.map((element) => {
          return (
            <CheckBox
              register={ register }
              name={ element.name }
              text={ element.text }
              key={ element.name }
              isCheckedDefault={ element.isChecked }
            />
          )
        })
        }
      </div>
    </div>
  )
}

export default CheckBoxesGroup