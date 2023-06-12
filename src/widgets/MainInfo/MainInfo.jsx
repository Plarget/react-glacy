import './styles.scss'
import {InfoItem} from "../../shared/ui/InfoItem/InfoItem";

export const MainInfo = () => {
  return (
      <section className='info'>
        <div className="info__inner container">
          <div className="info__wrapper">
            <div className="info__body">
              <h2 className="info__title title">Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого собственного производства на развес</h2>
              <div className="info__row">
                <InfoItem icon='ice-cream' className='info__item'>
                  Всё наше мороженое изготавливается на собственном производстве с использованием современного оборудования и проверенных временем технологий.
                </InfoItem>
                <InfoItem icon='cow' className='info__item'>
                  Закупка ингредиентов производится только
                  у проверенных фермерских хозяйств, с которыми
                  нас связывает долговременное сотрудничество.
                </InfoItem>
                <InfoItem icon='list' className='info__item'>
                  Для приготовления мороженого используются сливки и молоко высочайшего качества. Все ингредиенты
                  и добавки произведены из натурального сырья.
                </InfoItem>
                <InfoItem icon='tempr' className='info__item'>
                  Доставка нашего мороженого осуществляется в специальном термопаке, который не даёт мороженому растаять и позволяет сохранить превосходный вкус.
                </InfoItem>
              </div>

            </div>
          </div>

         </div>
       </section>
  )
}