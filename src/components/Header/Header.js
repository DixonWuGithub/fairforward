import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, } from "react-router-dom";
import logo from "../../assets/images/logo-text-w.png"
import "./Header.scss"

function Header({ isLoggedIn }) {


    return (
        <>
            <section className="section section--header">
                <div className="body-wrap body-wrap--header">
                    <header className="header">
                        <Link to="/">
                            <img className="logo" src={logo} alt="" />
                        </Link>
                        <div className="header__nav">
                            <NavLink className="navlink" to="/explore">Explore</NavLink>
                            <NavLink className="navlink" to="/about">About</NavLink>
                            {isLoggedIn
                                ? <Link className="button__link" to="/profile"> <button className="button button--login" >My Profile</button></Link>
                                : <Link className="button__link" to="signup"> <button className="button button--login" >Log In / Sign Up</button></Link>
                            }
                        </div>
                    </header>
                </div>
            </section>
        </>
    )
}

export default Header