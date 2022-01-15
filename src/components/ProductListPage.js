import { useEffect, useState } from "react";
import axios from "axios";
import './ProductListPage.css';

function ProductList (){

    let [products, setProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/products/list")
        .then((response)=>{
            let productList = response.data.product_lists;
            setProducts(productList);
        })
    }, []);

    return(
        <div className="container">
            <div className="row">
                {
                    products.map((a)=>{
                        return (
                            <div className="col-4">
                                <img src={a.main_image_url} />
                                <h6>{a.product_name}</h6>
                                <p>{a.price}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList