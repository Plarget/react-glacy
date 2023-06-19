import './ProductBannerCard.scss'


const ProductBannerCard = (props) => {
  const { img } = props
  return (
    <div className="product-banner-card">
      <img
        className="product-banner-card__image"
        height="507"
        width="327"
        loading="lazy"
        src={ img }
        alt="Icecream"
      />
    </div>
  )
}

export default ProductBannerCard