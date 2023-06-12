import './styles.scss'

export const PostCard = (props) => {
  const {className} = props
  return (
      <div className={`post-card ${className}`}>
        <div className="post-card__body">
          <div className="post-card__info text">Новое в нашем блоге</div>
          <h3 className="post-card__label label">10 способов сервировки фруктовых щербетов
            к столу</h3>
        </div>

      </div>
  )
}