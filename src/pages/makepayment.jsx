import React from 'react';
import { Link } from 'react-router-dom';
import './makepayment.css'; // Make sure to create a CSS file for the styles

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

      <div className="phase3">
      <div class="p3head">
      Dashboard /
      <span className='sub'>Make Payments</span>
      </div>
        <div className="phase3payment">
          <div className="phase3form">
            <h2 className="phase3title">Enter Customer Mobile Number</h2>
            <p className="phase3subtitle">
              Enter Customer mobile number to access the payment page
            </p>
            <input
              type="text"
              className="phase3input"
              placeholder="Enter Mobile Number"
            />
            <div className="phase3divider">
              <img src='/divider.svg' alt='' />
            </div>
            <h2 className="phase3title">Enter Total Amount</h2>
            <p className="phase3subtitle">
              Enter the total amount that you want to collect from the customer
            </p>
            <input
              type="text"
              className="phase3input"
              placeholder="₹ Enter the Amount"
            />
            <button className="phase3button">Proceed Next</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Assign;