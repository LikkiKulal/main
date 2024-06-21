import React from 'react';
import { Link } from 'react-router-dom';
import './rewards.css'; // Make sure to create a CSS file for the styles

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
          <span className='sub'>Rewards</span>
        </div>

        <div className="p3card">
          <div className="p3top">
            <img src='/top.svg' alt='' className='top-bg' />
            <div class="content">
              <h2>Win Rewards Everyday</h2>
              <h1>XPANZ Rewards</h1>
              <div class="p3icons">
                <span class="p3icon">
                  <img src='/refresh.svg' alt='' />
                </span>
                <span class="p3icon">
                  <img src='/bank.svg' alt='' />
                </span>
              </div>


            </div>
          </div>
          <div class="container">
            <div class="p3coins">
              <span>🪙 XCoins</span>
              <span class="text">2500
                <img src="/down.svg" alt="" class="down" />
              </span>
            </div>
          </div>

          <div className="p3bottom">
            <img src='/mbg.svg' alt='' className='mbg' />
            <h3 class="excited-rewards">Excited </h3>
            <h1 class="reward-title">REWARDS
              <img src='/star.svg' alt='' class='star' />
            </h1>

            <div className="p3lotto">

              <img src="/lbg.svg" alt="" className="p3lottoimg" />
            </div>
            <button className="p3play">Play Now →</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assign;