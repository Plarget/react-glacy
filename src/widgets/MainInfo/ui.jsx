import InfoItem from '@shared/ui/InfoItem'
import { ReactSVG } from 'react-svg'
import './MainInfo.scss'


const MainInfo = () => {
  return (
    <section className="info">
      <div className="info__inner container">
        <div className="info__wrapper">
          <div className="info__body">
            <h2 className="info__title title">Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого
              собственного производства на развес</h2>

            <div className="info__row">
              <InfoItem
                className="info__item"
                icon={<ReactSVG src='images/icons/icecream.svg'/>}
              >
                Всё наше мороженое изготавливается на собственном производстве с использованием современного
                оборудования и проверенных временем технологий.
              </InfoItem>
              <InfoItem
                className="info__item"
                icon={<ReactSVG src='images/icons/cow.svg'/>}
              >
                Закупка ингредиентов производится только
                у проверенных фермерских хозяйств, с которыми
                нас связывает долговременное сотрудничество.
              </InfoItem>
              <InfoItem
                className="info__item"
                icon={<ReactSVG src='images/icons/list.svg'/>}
              >
                Для приготовления мороженого используются сливки и молоко высочайшего качества. Все ингредиенты
                и добавки произведены из натурального сырья.
              </InfoItem>
              <InfoItem
                className="info__item"
                icon={<ReactSVG src='images/icons/temp.svg'/>}
              >
                Доставка нашего мороженого осуществляется в специальном термопаке, который не даёт мороженому растаять и
                позволяет сохранить превосходный вкус.
              </InfoItem>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MainInfo