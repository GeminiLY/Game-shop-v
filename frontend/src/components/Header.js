import React from 'react'

const Header = () => {
return (
    <div>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">

                    <a href="index.html" class="logo">
                    <img src="assets/images/logo.png" heigth="30" width="60" alt=""/>

                    </a>
                    <ul class="nav">
                        
                        <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                        <li class="scroll-to-section"><a href="#about">About</a></li>
                        <li class="scroll-to-section"><a href="#projects">Our Games</a></li>
                        <li class="submenu">
                            <a href="javascript:;">Products</a>
                            <ul>
                                <li><a href="#projects">New</a></li>
                                <li><a href="">Promo</a></li>
                                <li><a href="#projects">Categories</a></li>
                                <li><a href="">Search</a></li>
                            </ul>
                        </li>
                        <li class="scroll-to-section"><img src="assets/images/cart2_white.png" alt="" height="25"
                    width="25"/></li>
                        <li class="scroll-to-section"><a href="#contact-us">Contact us</a></li> 
                        <div class="search-icon">
                            <a href="#search"><i class="fa fa-search"></i></a>
                        </div>
                    </ul>        
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    </nav>
                </div>
            </div>
        </div>
    </header></div>
);
};

export default Header