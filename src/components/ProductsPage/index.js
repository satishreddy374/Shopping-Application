import ProductItem from "../ProductItem";
import "./index.css";

const ProductsPage = (props) => {
    const {searchedResults} = props 
    const productObject = searchedResults[0]
    const {category} = productObject
    return (
        <div className="product-page-container">
            <h3 className="product-page-category-text">Here you can find products related to <span className="category-special-text">{category}</span> category...</h3>
            
            <ul className="product-list-container">
                {searchedResults.map((product) => (
                    <ProductItem key={product.id} productDetails={product} />
                ))}
            </ul>
        </div>
    )
}

export default ProductsPage








