import React from 'react';
import dangoteRefinaryBannerOne from "../../images/banner/dangote_refinary_1.jpeg";

function Banner() {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src ={dangoteRefinaryBannerOne} className="bd-placeholder-img"  />

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Welcome to Dangote Online Store</h1>
                            <p>You can order for all your products here</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src ={dangoteRefinaryBannerOne} className="bd-placeholder-img"  />

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Welcome to Dangote Online Store</h1>
                            <p>You can order for all your products here</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>

            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;
