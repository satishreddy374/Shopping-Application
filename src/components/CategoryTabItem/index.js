import "./index.css"

const CategoryTabItem = (props) => {
    const {categoryDetails, onChangeCategoryTab, isActive} = props
    const {category} = categoryDetails
    const onClickCategoryTab = () => {
        onChangeCategoryTab(category)
    }
    return (
        <li className="category-list-item">
            <button type="button" onClick={onClickCategoryTab} className={`category-tab-button ${isActive ? "active-category-tab" : "normal-category-tab"}`}>{category}</button>
        </li>
    )
}


export default CategoryTabItem



