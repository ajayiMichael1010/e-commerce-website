import React , from 'react';
import PageHeader from "@/Layouts/PageHeader.jsx";
import PageFooter from "@/Layouts/PageFooter.jsx";

function CustomerDashboard(orders) {

    const myOrders = orders.orders;
    const totalPrice = myOrders.reduce((accumulator, eachOrder) => accumulator + parseFloat(eachOrder.selling_price), 0);

    return (
        <>
            <PageHeader/>

            <div className={`container mt-5 mt-5`} style={{minHeight: "100vh"}}>
                <br/><br/>
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

                                {myOrders.map(eachOrder => (
                                    <tr>
                                        <td><img src={eachOrder.product_image} height={100}/></td>
                                        <td>{eachOrder.product_name}</td>
                                        <td>{eachOrder.quantity_ordered}</td>
                                        <td>{eachOrder.selling_price}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td colSpan={3}>Total</td>
                                    <td>{totalPrice}</td>
                                </tr>
                            </table>

                        </div>

                    </div>
                </div>

            </div>

            <PageFooter/>
        </>
    );
}

export default CustomerDashboard;
