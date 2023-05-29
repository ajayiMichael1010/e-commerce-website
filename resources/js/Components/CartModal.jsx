import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { MyContext } from '@/Components/StateManagement.jsx';
import {
    generateCartItemUniqueName,
    incrementQuantity,
    decrementQuantity,
    updateCartItem, addToCartAndGetCartItem
} from '../../HelperFunctions/CartHelper.jsx';
import {Link} from "@inertiajs/react";

function CartModal() {
    // Accessing state and context using React hooks
    const { isModalOpen, setIsModalOpen, cartItem, setCartItem,cartTotalItems, setTotalItems } = useContext(MyContext);

    // State variables for managing product details and quantity
    const [productUniqueName, setProductUniqueName] = useState('');
    const [productUnitPrice, setProductUnitPrice] = useState(null);
    const [quantityAdded, setQuantityAdded] = useState(1);
    const [productTotalPrice, setProductTotalPrice] = useState(null);

    useEffect(() => {

        if(isModalOpen){
            // Set the initial product unit price when the modal is opened
            setProductUnitPrice(cartItem.selling_price);

            // Generate unique name for the cart item when the modal is opened
            setProductUniqueName(generateCartItemUniqueName(cartItem));
        }

    }, [isModalOpen]);

    useEffect(() => {
        // Update product unit price and total price when  productUniqueName changes
        addToCartAndGetCartItem( cartItem, productUniqueName, setCartItem, setQuantityAdded, setProductUnitPrice, setProductTotalPrice);
    }, [productUniqueName]);

    // Increase the quantity by 1 when the increment button is clicked
    const handleIncrement = () => incrementQuantity(quantityAdded, setQuantityAdded);

    // Decrease the quantity by 1 when the decrement button is clicked, if the quantity is greater than 1
    const handleDecrement = () => decrementQuantity(quantityAdded, setQuantityAdded);

    useEffect(() => {
        // Update the cart when the quantity changes
        handleCartUpdate();
    }, [quantityAdded]);

    const handleCartUpdate = () => {
        updateCartItem(cartItem, productUnitPrice, quantityAdded, setProductTotalPrice, setCartItem, productUniqueName);
    };

    const customStyles = {
        // Custom styles for the modal content
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '60%',
        },
    };

    const handleCloseModal = () => {
        // Close the modal when the close button is clicked
        setIsModalOpen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Ex"
        >
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex align-items-center justify-content-between" style={{ width: '100%' }}>
                        {/* Display the product name */}
                        <h2>{cartItem.product_name}</h2>
                        {/* Close button */}
                        <button className="btn btn-primary rounded-circle" onClick={handleCloseModal}>
                            X
                        </button>
                    </div>
                </div>
            </div>

            <div className="row align-items-center justify-content-center">
                <div className="col-md-12 d-flex align-items-center justify-content-center flex-column">
                    {/* Display the product image */}
                    <img src={cartItem.product_image} height={150} />
                    {/* Display the product total price */}
                    <div>&#8358; {productTotalPrice}</div>
                </div>

                <div className="col-md-4">
                    <div className="input-group mb-3">
                        {/* Decrement button */}
                        <button type="button" className="input-group-text" onClick={handleDecrement}>
                            <big>
                                <b>-</b>
                            </big>
                        </button>
                        {/* Quantity input */}
                        <input
                            type="number"
                            min={1}
                            className="form-control"
                            aria-label="Amount"
                            value={quantityAdded}
                            onChange={handleCartUpdate}
                        />
                        {/* Increment button */}
                        <button type="button" className="input-group-text" onClick={handleIncrement}>
                            <big>
                                <b>+</b>
                            </big>
                        </button>
                    </div>


                    <Link href={route('cartPage')} className={`btn btn-primary float-end`}>View Cart
                        <sup>
                            <span className={`text-warning`}>
                                <big><big><b>{cartTotalItems}</b></big></big>
                            </span>
                        </sup>
                    </Link>

                </div>
            </div>
        </Modal>
    );
}

export default CartModal;
