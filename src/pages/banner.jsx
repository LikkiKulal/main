import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css';

const Assign = () => {
  return (
    <div className="p1app">
    <header className="p2header">
      <div className="p2logo">
        <img src='/logo.svg' alt='' />
      </div>
      <div className="p2user">
        <span className='p2text'>Welcome, Rajesh👋</span>
        <span className='p2coin'>
          XCoins: 300
          <img src='/coin.svg' alt='' />
        </span>
        <div className='p2img-container'>
          <img src="/cash.svg" alt="" className='p2img' />
          <img src="/bell.svg" alt="" className='p2img' />
          <span >
          <img src='/profile2.svg' alt='' className='p2img' />
        </span>
        </div>
      </div>
    </header>

    <div className="p1main">
      <aside className="p2sidebar">
        <div className="p2store">
          <img src='/kanan.svg' alt='' className='img' />
          <div class="text">Kannan departmental
            <img src='/down.svg' alt='' />
          </div>
        </div>
        <nav>
          <ul>
          <li className="p3active">
                <Link to="/dashboard" className="no-underline">
                  <img src='/dashboard.svg' alt='' className="dashboard-icon" />
                  <span className="dashboard-text">Dashboard</span>
                </Link>
              </li>
            <li>
              <img src='/orders.svg' alt='' />
              Orders
            </li>
            <li>
              <img src='/products.svg' alt='' />
              My Products
            </li>
            <li>
              <img src='/profile.svg' alt='' />
              Profile
            </li>
          </ul>
        </nav>

      </aside>
  
      </div>


      <div class="phase3 container">
    <div class="p3head">
      Dashboard /
      <span className='sub'>Request Form</span>
      </div>
    <div class="p3content">
      <div class="p3title">Select a Banner</div>
      <div class="p3subtitle">Select the Banner Notification Image for promoting your store</div>
      <div class="p3banners">
        <div class="banner1">
          <div class=" p3banner-special">
            <div class="p3content-left">
              <span class="p3store">Kannan departmental</span>
              <h3 class="p3offer">Get 10 - 20% Discount on Electronics items</h3>
              <button class="p3cta">Get it Now 
                <img src='/right.svg' alt='' />
              </button>
            </div>
            <div class="p3img-right">
              <img src="/fruits.svg" alt="Electronics items" class="p3img" />
            </div>
          </div>
          <div class="banner-header">
          <div >Banner 1</div>
            <input type="radio" name="banner" class="p3radio" checked />
          </div>
          <div class="p3additional-content">
            Select Banner Images that are to be displayed in the home page of XPANZ App.
          </div>
        </div>

        <div class="banner2">
          <div class="p3banner p3banner-special">
            <div class="p3content-left">
              <span class="p3store">Kannan departmental</span>
              <h3 class="p3offer">Get 10 - 20% Discount on Grocery items</h3>
              <button class="p3cta">Get it Now 
              <img src='/right.svg' alt='' />
              </button>
            </div>
            <div class="p3img-right">
              <img src="/fruits.svg" alt="Grocery items" class="p3img" />
            </div>
          </div>
          <div class="banner-header">
            <div>Banner 2</div>
            <input type="radio" name="banner" class="p3radio" />
          </div>
          <div class="p3additional-content">
            Select Banner Images that are to be displayed in the home page of XPANZ App.
          </div>
        </div>

        <div class="banner3">
          <div class="p3banner p3banner-special">
            <div class="p3content-left">
              <span class="p3store">Kannan departmental</span>
              <h3 class="p3offer">Get 10 - 20% Discount on Grocery items</h3>
              <button class="p3cta">Get it Now 
              <img src='/right.svg' alt='' />
              </button>
            </div>
            <div class="p3img-right">
              <img src="/fruits.svg" alt="Grocery items" class="p3img" />
            </div>
          </div>
          <div class="banner-header">
            <div>Banner 3</div>
            <input type="radio" name="banner" class="p3radio" />
          </div>
          <div class="p3additional-content">
            Select Banner Images that are to be displayed in the home page of XPANZ App.
          </div>
        </div>

        <div class="banner4">
          <div class="p3banner p3banner-special">
            <div class="p3content-left">
              <span class="p3store">Kannan departmental</span>
              <h3 class="p3offer">Get 10 - 20% Discount on Grocery items</h3>
              <button class="p3cta">Get it Now 
              <img src='/right.svg' alt='' />
              </button>
            </div>
            <div class="p3img-right">
              <img src="/fruits.svg" alt="Grocery items" class="p3img" />
            </div>
          </div>
          <div class="banner-header">
            <div>Banner 4</div>
            <input type="radio" name="banner" id="p3radio1" class="p3radio" />
            
          </div>
          <div class="p3additional-content">
            Select Banner Images that are to be displayed in the home page of XPANZ App.
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
    
  );
};

export default Assign;