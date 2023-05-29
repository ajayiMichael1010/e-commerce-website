import React, {useContext, useEffect, useState} from 'react';
import PageHeader from "@/Layouts/PageHeader.jsx";
import PageFooter from "@/Layouts/PageFooter.jsx";
import {getAllCartItems} from "../../../HelperFunctions/CartHelper.jsx";
import {Link, useForm} from "@inertiajs/react";
function CartPage(cart) {

    const [loader , setLoader] = useState(false);
    const [response ,setResponse] = useState(null);

    const cartItems = getAllCartItems();
    const totalPrice = cartItems.reduce((accumulator, cartItem) => accumulator + parseFloat(cartItem.selling_price), 0);

    const { data, setData, post, processing, errors, reset } = useForm({
        customer_new_orders: cartItems,
    });
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoader(true);
        sendOrder();

    }

    const sendOrder = () => {
        post(route('order.store'),{
            onSuccess: () => {
                setResponse("CustomerDashboard placed")
                setLoader(false);

                localStorage.clear();
                window.location.href="/";

                setTimeout( () => setResponse(false), 3000)

            },
            onError: () => {
                setLoader(false)
                setResponse("An error has occurred")
            }
        });
    }

    return (
        <>
            <PageHeader />

            <div className={`container mt-5 mt-5`} style={{minHeight:"100vh"}}>
                <br/><br/>
                <form onSubmit={handleSubmit}>
                    <div className="row align-items-center justify-content-center">
                        <div className={`col-md-9`}>
                            <div className={`bg-light p-5`}>
                                <table className="table table-striped table-bordered">
                                    <tr>
                                        <th>Product Image</th>
                                        <th>Product Name</th>
                                        <th>Qty</th>
                                        <th>Price</th>
                                    </tr>

                                    {cartItems.map(cartItem => (
                                        <tr>
                                            <td><img src={cartItem.product_image} height={100}/></td>
                                            <td>{cartItem.product_name}</td>
                                            <td>{cartItem.quantity}</td>
                                            <td>{cartItem.selling_price}</td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td colSpan={3}>Total</td><td>{totalPrice}</td>
                                    </tr>
                                </table>

                                {
                                    cart.auth.user &&
                                    <button className="btn btn-primary float-end" type="submit">
                                        Complete Order &nbsp;&nbsp;
                                        {loader && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
                                    </button>
                                }
                                {response && <span style={{color:"#4BB543"}}>{response}</span>}

                                {!cart.auth.user && <button className={`btn btn-primary float-end`}><Link href={`/register`} className={`text-light text-decoration-none`}>Checkout Now</Link></button>}
                            </div>

                        </div>
                    </div>
                </form>

            </div>

            <PageFooter />
        </>
    );
}

export default CartPage;
