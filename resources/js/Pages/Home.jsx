import React, {useContext} from "react";
import PageHeader from "@/Layouts/PageHeader.jsx";
import Banner from "@/Components/Banner.jsx";
import Product from "@/Components/Product.jsx";
import PageFooter from "@/Layouts/PageFooter.jsx";
import CartModal from "@/Components/CartModal.jsx";
import {MyContext} from "@/Components/StateManagement.jsx";

const Home = (products) =>{
    const {authenticatedUser , setAuthenticatedUser} = useContext(MyContext);
    setAuthenticatedUser(products.auth.user);
    console.log(products.auth.user)
    return (
        <>
        <PageHeader />
            <div className={'mt-5 mb-5'}></div>
            <div className={`container`}>
                <Banner />
                <div className={`row mt-5 mb-3`}>
                    {products.products && products.products.map(product => (
                        <Product product={product} />
                    ))}
                </div>
            </div>

            <PageFooter />

            <CartModal/>
        </>
    )
}

export default Home
