import "./index.css";

const ProductItem = (props) => {
    const {productDetails} = props 
    const {id, image, title, vendor, price, compareAtPrice} = productDetails
    const discount = Math.ceil(((compareAtPrice - price) / compareAtPrice) * 100)
    return (
        <li className="product-list-item-container">
            <img className="product-image" src={image} alt={title} />
            <div className="title-vendor-container">
                <h2 className="title">{title}</h2>
                <h4 className="vendor">{vendor}</h4>
            </div>
            <div className="prices-container">
                <h4 className="price">Rs.{price}</h4>
                <h4 className="compare-at-price">Rs.{compareAtPrice}</h4>
                <h5 className="discount-text">({discount}% OFF)</h5>
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
        </li>
    )
}


export default ProductItem





