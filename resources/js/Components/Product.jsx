import React, { useCallback, useContext } from 'react';
import { MyContext } from "@/Components/StateManagement.jsx";
import {
    generateCartItemUniqueName,
    saveTotalItemsAddedToCart,
    getTotalItemsAddedToCart
} from "../../HelperFunctions/CartHelper.jsx";

const Product = (product) => {

    const {cartTotalItems, setCartTotalItems} = useContext(MyContext);
    // Accessing the state and context using the useContext hook
    const { isModalOpen, setIsModalOpen, cartItem, setCartItem } = useContext(MyContext);

    // Callback function to handle adding the product to the cart
    const handleAddToCart = useCallback(() => {
        setCartItem(product.product); // Set the selected product in the cart

        // Generate a unique name for the cart item using helper function
        const productUniqueName = generateCartItemUniqueName(product.product);

        // Save the total items added to the cart using helper function
        saveTotalItemsAddedToCart(productUniqueName);
        setCartTotalItems(getTotalItemsAddedToCart);

        setIsModalOpen(true); // Open the modal

    }, [product]);

    return (
        <>
            <div className={`col-md-3 mt-3`}>
                <div className="card shadow">
                    <img src={product.product.product_image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text text-center">{product.product.product_name}</p>
                        <p className={`card-text text-center `}><b>&#8358; {product.product.selling_price}</b></p>
                        <div className={`d-flex align-items-center justify-content-center`} style={{ width: "100%" }}>
                            <button className={`btn btn-primary`} onClick={handleAddToCart}><big>+</big> Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
