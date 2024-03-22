import React,{useEffect, useContext, useState} from 'react'
import axios from 'axios';
import Headers from "../Headers";
import {store} from "../../App"
import { Navigate } from 'react-router-dom'
import CategoryTabItem from "../CategoryTabItem";
import ProductsPage from "../ProductsPage";
import "./index.css";

const categoryTabsList = [
    {id: 1, category: "Mens"},{id: 2, category: "Womens"}, {id: 3, category: "Kids"} 
]


let ProductsArray = [
    {
        "id": "1m",
        "category": "Mens",
        "title": "Mens Kurta",
        "price": "1199",
        "compareAtPrice": "1299",
        "vendor": "Manyvar",
        "badgeText": "Wedding Special",
        "image": "https://plus.unsplash.com/premium_photo-1682090786689-741d60a11384"
    },
    {
        "id": "2m",
        "category": "Mens",
        "title": "RCB Tshirt",
        "price": "2199",
        "compareAtPrice": "4299",
        "vendor": "Puma",
        "badgeText": null,
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22462330/2023/3/22/27a1d087-dc81-46a0-9b86-505f6491b5931679431326265RoyalChallengersBangalore2023MensReplicaJersey1.jpg"
    },
    {
        "id": "3m",
        "category": "Mens",
        "title": "Green Charm",
        "price": "1399",
        "compareAtPrice": "1499",
        "vendor": "Myntra",
        "badgeText": "On offer",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/22372642/2023/3/16/52d27507-a870-456b-addd-e62aefa0f79a1678911375020ESSLogoRegularFitMensT-Shirt1.jpg"
    },
    {
        "id": "4m",
        "category": "Mens",
        "title": "Mens Tshirt",
        "price": "599",
        "compareAtPrice": "799",
        "vendor": "Myntra",
        "badgeText": "New season",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24055686/2023/7/26/215a939a-b567-4110-9a2b-33d0e191d5c61690363492956-Ess-Multicolor-Mens-T-shirt-971690363492544-1.jpg"
    },
    {
        "id": "5m",
        "category": "Mens",
        "title": "Allen Solly Shirt",
        "price": "1299",
        "compareAtPrice": "1450",
        "vendor": "Myntra",
        "badgeText": "Wedding Special",
        "image": "https://i.ibb.co/kc2Mj18/men-allen-solly-shirt.jpg"
    },
    {
        "id": "6m",
        "category": "Mens",
        "title": "Adidas T-Shirt",
        "price": "999",
        "compareAtPrice": "1199",
        "vendor": "Myntra",
        "badgeText": "Wedding Special",
        "image": "https://i.ibb.co/XWwyFbZ/men-adidas-t-shirt.webp"
    },
    {
        "id": "7m",
        "category": "Mens",
        "title": "Louis Philippe Shirt",
        "price": "1899",
        "compareAtPrice": "2399",
        "vendor": "Myntra",
        "badgeText": "Wedding Special",
        "image": "https://i.ibb.co/f9wbrQ7/Men-louis-philip-shirt.jpg"
    },
    {
        "id": "8m",
        "category": "Mens",
        "title": "Hoodies For Men",
        "price": "1420",
        "compareAtPrice": "1799",
        "vendor": "Myntra",
        "badgeText": "Wedding Special",
        "image": "https://i.ibb.co/r6n7WBG/men-hoodies.webp"
    },
    {
        "id": "1w",
        "category": "Womens",
        "title": "Women Kurti",
        "price": "1199",
        "compareAtPrice": "1299",
        "vendor": "Manyvar",
        "badgeText": "New season",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24538028/2023/8/25/cb1a5027-184f-4c8a-a96b-154987ff47f31692955360626-HERENOW-Women-Kurtis-1661692955360126-1.jpg"
    },
    {
        "id": "2w",
        "category": "Womens",
        "title": "Yellow casual dress",
        "price": "199",
        "compareAtPrice": "299",
        "vendor": "Myntra",
        "badgeText": null,
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/19276232/2022/8/8/55497e43-260c-4a3f-865b-059d9edd861a1659942435451-Women-Yellow-Cotton-Mandarin-Collar-Top-3841659942434972-1.jpg"
    },
    {
        "id": "3w",
        "category": "Womens",
        "title": "Women Black Kurti",
        "price": "1399",
        "compareAtPrice": "1499",
        "vendor": "Myntra",
        "badgeText": "On offer",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12834502/2020/11/26/e50bd870-573d-4f6f-9ebc-938bda01edc31606382198225WomenBlackMultiColourPrintedKurti1.jpg"
    },
    {
        "id": "4w",
        "category": "Womens",
        "title": "METRO-FASHION",
        "price": "1599",
        "compareAtPrice": "1799",
        "vendor": "Myntra",
        "badgeText": "New season",
        "image": "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/19381372/2022/8/4/4dc24e8c-f86c-4a85-80a3-a4941c84453b1659612869086METRO-FASHIONWomenBhandhaniPrintedKurtaandPantSetPureCotton1.jpg"
    },
    {
        "id": "5w",
        "category": "Womens",
        "title": "Women Cotton Kurti",
        "price": "640",
        "compareAtPrice": "869",
        "vendor": "Manyvar",
        "badgeText": "New season",
        "image": "https://i.ibb.co/tCrGKFy/cotton-kuthi-women.jpg"
    },
    {
        "id": "6w",
        "category": "Womens",
        "title": "Adidas T-Shirt",
        "price": "1160",
        "compareAtPrice": "1370",
        "vendor": "Myntra",
        "badgeText": "New season",
        "image": "https://i.ibb.co/1sV0mTz/adidas-for-women.jpg"
    },
    {
        "id": "1k",
        "category": "Kids",
        "title": "Chicco",
        "price": "1199",
        "compareAtPrice": "1399",
        "vendor": "Myntra",
        "badgeText": "Wedding Special",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/14075186/2021/4/12/85af90ad-db0a-47ee-b26f-4b2168cc31ae1618209422880ChiccoBoysWhite1.jpg"
    },
    {
        "id": "2k",
        "category": "Kids",
        "title": "Girls Printed Tracksuit",
        "price": "2199",
        "compareAtPrice": "4299",
        "vendor": "Myntra",
        "badgeText": "New season",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15597052/2021/9/25/1fe8ff1f-6c80-402e-ac72-cbdccb8f77371632552170304Chicco1.jpg"
    },
    {
        "id": "3k",
        "category": "Kids",
        "title": "Custom t-shirt",
        "price": "1399",
        "compareAtPrice": "1499",
        "vendor": "Myntra",
        "badgeText": "On offer",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16951678/2022/1/27/167ed0a2-7936-4d1a-955b-dfff4e53f1281643289347488Tshirts1.jpg"
    },
    {
        "id": "4k",
        "category": "Kids",
        "title": "Kids Tshirt",
        "price": "599",
        "compareAtPrice": "799",
        "vendor": "Myntra",
        "badgeText": "New season",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/16809172/2023/4/19/ebeec264-7dea-4f8c-88ed-1b9ccd6c6a301681901675455-mothercare-Infant-Girls-Pink--Blue-Printed-Cotton-Top-490168-1.jpg"
    }
]


const Products = () => {
    
    const [token, setToken] = useContext(store);
    const [activeCategory, setActiveCategory] = useState(categoryTabsList[0].category);
    const [searchInput, setSearchInput] = useState("")
    
    /*
    useEffect(() => {
        const getProductsData = async() => {
            try {
                const response = await axios.get('http://localhost:5000/products',{
                    headers: {
                        'x-token' : token
                    }
                })
                setData(response.data)
            }
            catch(error) {
                console.log(error)
            }
        }
        getProductsData()
    }, [])
    */

    const onChangeCategoryTab = (category) => {
        setActiveCategory(category)
    }

    const filteredProducts = ProductsArray.filter((item) => {
        return item.category === activeCategory
    })

    const onChangeSearchInput = (event) => {
        setSearchInput(event.target.value)
    }

    const searchedResults = filteredProducts.filter((productItem) => {
        return productItem.title.toLowerCase().includes(searchInput.toLowerCase())
    })

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <div className="products-page-container">
            <Headers />
            <div className="products-section-container">
                <h1 className="products-page-heading">Welcome to Products Page!!!</h1>
                <ul className="category-tabs-list-container">
                    {categoryTabsList.map((tab) => (
                        <CategoryTabItem isActive={activeCategory===tab.category} onChangeCategoryTab={onChangeCategoryTab} key={tab.id} categoryDetails={tab} />
                    ))}
                </ul>
                <div className="product-details-container">
                    
                    <div className="input-details-container">
                        <input value={searchInput} onChange={onChangeSearchInput} className="search-input-element" type="search" placeholder="Search Products..." />
                    </div>
                    {searchedResults.length > 0 && 
                    <ProductsPage searchedResults={searchedResults} />
                    }
                </div>
            </div>
        </div>
    )
}


export default Products











