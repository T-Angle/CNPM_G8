import React from 'react';
import Logo from "../components/Logo";
import { BookItem } from "../components/BookItem";

import { Input, Icon } from "semantic-ui-react";
import { Pagination } from "@mui/material";
import { Link } from 'react-router-dom';
import CartList from '../components/Cart/CartList';
import { books } from "../data-book.json";

import "../styles/Cart.style.scss";


function Cart(props) {

  const toggleUserManage = () => {
    let userManager = document.querySelector(".user-manager");

    userManager.classList.toggle("open");
  };

  return (
    <div className="Homepage">
      <div className="navbar">
        <Logo />

        <div className="search-box">
          {/* <Input icon="search" placeholder="Search..." /> */}
        </div>

        <div className="users">
          
          <div className="personalize">
            <img
              onClick={toggleUserManage}
              src="https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
            <span className="greeting">
              Hi, <span id="username">Lee Higgins</span>
            </span>

            <ul className="user-manager">
              <li>
                <div className="manager-on-hover"></div>

                <div className="manager-wrapper">
                  <Icon name="id card" />
                  <a href="/dashboard/card">My Card</a>
                </div>
              </li>
              <li>
                <div className="manager-on-hover"></div>

                <div className="manager-wrapper">
                  <Icon name="user" />
                  <a>Profile</a>
                </div>
              </li>
              <li>
                <div className="manager-on-hover"></div>

                <div className="manager-wrapper">
                  <Icon name="heart" />
                  <a>wishlist</a>
                </div>
              </li>
              <li>
                <div className="manager-on-hover"></div>

                <div className="manager-wrapper">
                  <Icon name="log out" />
                  <a>Sign out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
      <CartList data={books} />
    </div>
  );
}

export default Cart;