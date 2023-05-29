import React, {useContext, useEffect, useState} from 'react';
import {Link} from "@inertiajs/react";
import dangoteLogo from "../../images/dangote-logo.png";
import {MyContext} from "@/Components/StateManagement.jsx";
import {getTotalItemsAddedToCart} from "../../HelperFunctions/CartHelper.jsx";

function PageHeader() {
    const {cartTotalItems, setCartTotalItems,authenticatedUser , setAuthenticatedUser} = useContext(MyContext);
    const [isPageRouteEnabled , setIsPageRouteEnabled] = useState("disabled");

    setCartTotalItems(getTotalItemsAddedToCart);

   useEffect(() => {
        cartTotalItems > 0 ? setIsPageRouteEnabled(true) : "";
   }, [cartTotalItems])

    return(
        <header className={`mb-5`}>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><div className={`bg-light p-1 rounded`}><img src={dangoteLogo} height={35}/></div></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            {
                                !authenticatedUser ? (
                                    <>
                                <li className="nav-item"><Link href={route('login')} className="nav-link font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                        Log in
                                    </Link>
                                </li>

                                <li className="nav-item">
                                <Link
                                href={route('register')}
                            className="nav-link font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </li>
                                    </>
                                ):(
                                    <>
                                        <li className="nav-item"><Link href={route('product.create')} className="nav-link font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Add Product
                                        </Link>
                                        </li>

                                        <li className="nav-item"><Link href={route('product-category.create')} className="nav-link font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Product Category
                                        </Link>
                                        </li>

                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                {authenticatedUser.full_name}                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li> <Link href={route('logout')} method="post">
                                                    Log Out
                                                </Link></li>
                                            </ul>
                                        </li>
                                    </>
                                )
                            }

                            <li className="nav-item">
                                <Link
                                    href={route("cartPage")}
                                    className={`nav-link font-semibold
                                    text-gray-600 hover:text-gray-900
                                    dark:text-gray-400 dark:hover:text-white
                                    focus:outline focus:outline-2
                                    focus:rounded-sm
                                    focus:outline-red-500 ${isPageRouteEnabled}`}
                                >
                                    Cart
                                    <sup>
                                        <span className={`text-warning`}>
                                            <big><big><b>{cartTotalItems}</b></big></big>
                                        </span>
                                    </sup>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default PageHeader;
