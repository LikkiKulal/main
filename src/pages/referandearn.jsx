import React from 'react';
import { Link } from 'react-router-dom';
import './referandearn.css'; // Make sure to create a CSS file for the styles


const referralData = [
  {
    phone: '+918689865123',
    date: '2024/01/24',
    reward: '+100 XCoins',
  },
  {
    phone: '+918689865123',
    date: '2024/01/24',
    reward: '+100 XCoins',
  },
  {
    phone: '+918689865123',
    date: '2024/01/24',
    reward: '+100 XCoins',
  },
];

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
          <span className='sub'>Refer and Earn</span>
        </div>
        <div class="p3container">
  <div class="p3header">
  <h1>Refer Friends,Earn XCoins Together.</h1>
    <p>You can also earn points from the <br/> other referred member purchases.</p>
  </div>
  <div class="p3referral">

  <div className='main'>
  Your Referral Code:
  </div>
  <div class="container">
    <div className='code'>
      <span>KJHGBKJ18</span>
      </div>
      </div>
    <div class="p3social">
      <a href="#" class="p3whatsapp">
      <img src='/wtsapp1.svg' alt='' />
      </a>
      <a href="#" class="p3copy">
      <img src='/copy.svg' alt='' />
      </a>
      <a href="#" class="p3share">
      <img src='/share.svg' alt='' />
      </a>
      <a href="#" class="p3scan">
      <img src='/scan.svg' alt='' />
      </a>
    </div>
  </div>


  <div className='info'>
  <span className='h1'>More Information</span>
  </div>
  <div class="p3info">
    <div class="p3howit">
      <h2>How it works</h2>
      <img src='/down.svg' alt='' />
    </div>
    <div class="p3faq">
      <h2>Frequently Asked Questions</h2>
      <img src='/down.svg' alt='' />
    </div>
  </div>
  </div>


<div class="phase4">
<h1 class="title">Referral Stats</h1>
<h2 class="subtitle">Explore all your information!</h2>
<div class="p3stats">
  <div class="p3referrals">
    <img src="/referral.svg" alt="" />
    <div class="content">
      <h3>My Referral</h3>
      <span>05</span>
      <p>last update 1d ago</p>
    </div>
  </div>
  <div class="p3earnings">
    <img src="/rs.svg" alt="" />
    <div class="content">
      <h3>My Earnings</h3>
      <span>500</span>
      <p>last update 1d ago</p>
    </div>
  </div>
</div>
 
<div className="p3history">
      <div className="header">Referral History</div>
      <div className="stages">
        <div className="stage active">Stage1 (03)</div>
        <div className="stage">Stage2 (02)</div>
        <div className="stage">Stage3 (11)</div>
        <div className="stage">Stage4 (0)</div>
      </div>
      <div className="referrals">
        {referralData.map((referral, index) => (
          <div className="referral" key={index}>
               <img src="/profile2.svg" alt="" className="profile" />
           <div className='container'>
            <div className="id">{referral.id}</div>
            <div className="phone">{referral.phone}</div>
            <div className="date">{referral.date}</div>
            </div>
            <div className="xcoins">+{referral.xcoins}100 XCoins </div>
          </div>
        ))}
      </div>
      <div className="see-all">See all referred people</div>
    </div>
  
  <div class="p3tracker">
    <h2>Referral Tracker</h2>
    <img src='/down.svg' alt=''  className='icon'/>
  </div>
  </div>
  </div>
  </div>
   


  );
}

export default Assign;