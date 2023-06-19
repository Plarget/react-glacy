import './ProductBannerCard.scss'


const ProductBannerCard = () => {
  return (
    <div className="product-banner-card">
      <img
        className="product-banner-card__image"
        height="507"
        width="327"
        loading="lazy"
        src="/images/slides/IceCream01.png"
        alt="Icecream"
      />
    </div>
  )
}

export default ProductBannerCard