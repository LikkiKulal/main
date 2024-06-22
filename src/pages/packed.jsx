import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './packed.css';

function Assign() {
  const [showLogout, setShowLogout] = useState(false);
  const handleProfileClick = () => {
    setShowLogout(!showLogout);
  };
  const [activeTab, setActiveTab] = useState('transactions');
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleViewDetails = (orderId) => {
    setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
  };

  const [activeOrderStatus, setActiveOrderStatus] = useState('confirmation');
  const [orders, setOrders] = useState([
    {
      id: 12345,
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'confirmation',
      date: 'Apr 10, 2024',
      paymentMethod: 'PAID - UPI'
    },
    {
      id: 12346,
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'confirmation',
      date: 'Apr 10, 2024',
      paymentMethod: 'PAID - CASH'
    },
    {
      id: 12345,
      customerName: 'Rajesh Kannan',
      phone: '+918526547512',
      address: 'R S Puram, Coimbatore',
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'preparing',
      date: 'Apr 10, 2024',
      paymentMethod: 'PAID - UPI'
    },
    {
      id: 12346,
      customerName: 'Rajesh Kannan',
      phone: '+918526547512',
      address: 'R S Puram, Coimbatore',
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'preparing',
      date: 'Apr 10, 2024',
      paymentMethod: 'PAID - CASH'
    },
    {
      id: 12347,
      customerName: 'Rajesh Kannan',
      phone: '+918526547512',
      address: 'R S Puram, Coimbatore',
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'preparing',
      date: 'Apr 11, 2024',
      paymentMethod: 'PAID - CARD'
    },
    {
      id: 12348,
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'completed',
      date: 'Apr 12, 2024',
      paymentMethod: 'PAID - CASH'
    },
    {
      id: 12349,
      customerName: 'Rajesh Kannan',
      phone: '+918526547512',
      address: 'R S Puram, Coimbatore',
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'preparing',
      date: 'Apr 11, 2024',
      paymentMethod: 'PAID - PAYPAL'
    },
    {
      id: 12345,
      items: [{ name: 'Ooty apple', quantity: "1", price: 100 }, { name: 'White Egg', quantity: "5", price: 50 }],
      total: 150,
      status: 'packed',
      date: 'Apr 10, 2024',
      paymentMethod: 'PAID - PAYPAL'
    }
  ]);

  const orderCounts = {
    confirmation: 6,
    preparing: 4,
    packed: 1,
    completed: 1
  };

  const handleReject = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: 'rejected' } : order
    ));
  };

  const handleConfirm = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: 'preparing' } : order
    ));
  };

  const handleStatusFilter = (status) => {
    setActiveOrderStatus(status);
  };

  const filteredOrders = orders.filter(order => order.status === activeOrderStatus);

  const OrderDetails = ({ order }) => {
    if (!order) return null;

    return (
      <div className="order-details">
        <h3>Order Details</h3>
        <p>Order ID: {order.id}</p>
        <p>Date: {order.date}</p>
        <p>Status: {order.status}</p>
        <h4>Items:</h4>
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              {item.quantity} x {item.name} - ₹{(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ₹{order.total.toFixed(2)}</p>
        <p>Payment Method: {order.paymentMethod}</p>
      </div>
    );
  };

  const PrepareOrder = ({ order }) => (
    <div className="prepare-order">
      <div className="order-header">
        <span className="order-id">Order Id: {order.id}</span>
        <span className="order-date">Date: {order.date}</span>
      </div>
      <div className="order-for">
        <h4>Order for:</h4>
        <p>{order.customerName}</p>
        <div className="contact-info">
          <span><img src='/phone.svg' alt='' /> {order.phone}</span>
          <span><img src='/location.svg' alt='' /> {order.address}</span>
        </div>
      </div>
      <div className="order-items">
        <h4>Order Items:</h4>
        {order.items.map((item, index) => (
          <div key={index} className="item">
            <span>{item.quantity} x {item.name}</span>
            <span>₹{item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="total-bill">
        <span>Total Bill Amount <span className="payment-method">{order.paymentMethod}</span></span>
        <span>₹{order.total.toFixed(2)}</span>
      </div>
      <button className="verify-pack-btn">Verify & Pack Items</button>
    </div>
  );

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
            <span onClick={handleProfileClick}>
              <img src='/profile2.svg' alt='' className='p2img' />
            </span>
          </div>
        </div>
      </header>

      <div className="p1main">
        <aside className="p2sidebar">
          <div className="p2store">
            <img src='/kanan.svg' alt='' className='img' />
            <div className="text">Kannan departmental
              <img src='/down.svg' alt='' />
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/dashboard" className="no-underline">
                  <img src='/dashboard.svg' alt='' className="dashboard-icon" />
                  <span className="dashboard-text">Dashboard</span>
                </Link>
              </li>
              <li className="p3active">
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

        <main className="p2dash">
          <section className="p3orders">
            <h2>My Orders</h2>
            <img src="/return.svg" alt="" className="icon" />
            <div className='new'>
              <h3>Last Update at: June 02, 2024 | 11:25 PM</h3>
            </div>
            <div class='search-container'>
              <div class='search'>
                <img src="/search.svg" alt="" class="i" />
                <input type="text" placeholder="Search for order id or Customer Name" />
              </div>
            </div>
            <div className="p4status">
              <span className={`p5status ${activeOrderStatus === 'confirmation' ? 'p5active' : ''}`}
                onClick={() => handleStatusFilter('confirmation')}>
                Confirmation ({orderCounts.confirmation})
              </span>
              <span className={`p5status ${activeOrderStatus === 'preparing' ? 'p5active' : ''}`}
                onClick={() => handleStatusFilter('preparing')}>
                Preparing ({orderCounts.preparing})
              </span>
              <span className={`p5status ${activeOrderStatus === 'packed' ? 'p5active' : ''}`}
                onClick={() => handleStatusFilter('packed')}>
                Packed Orders ({orderCounts.packed})
              </span>
              <span className={`p5status ${activeOrderStatus === 'completed' ? 'p5active' : ''}`}
                onClick={() => handleStatusFilter('completed')}>
                Completed ({orderCounts.completed})
              </span>
            </div>

            {activeOrderStatus === 'preparing' ? (
              <div className="preparing-orders">
                {filteredOrders.map(order => (
                  <PrepareOrder key={order.id} order={order} />
                ))}
              </div>
            ) : (
              filteredOrders.map(order => (
                <div key={order.id}>
                  {order.status === 'packed' ? (
                    <div className="container" key={`delivery-status-${order.id}`}>
                      <div className="header">Ready for delivery:</div>
                      <div className="order-id">Order Id: <span className='id'>{order.id}</span></div>
                      <div className="info">
                        <p>Rajesh Kannan</p>
                        <div class="contact">
  <div class="text3">
    <img src="/phone.svg" alt="Phone" />
    <span>+918526547512</span>
  </div>
  <div class="text4">
    <img src="/location.svg" alt=" "/>
    <span>R S Puram, Coimbatore</span>
  </div>
</div>
                      </div>
                      <ul class="timeline">
                        <li>
                          <div class="icon2"></div>
                          <div class="line"></div>
                          <div class="status">Store Confirmation</div>
                          <div class="date">Apr 09, 2024 | 02:00PM</div>
                        </li>
                        <li>
                          <div class="icon2"></div>
                          <div class="line"></div>
                          <div class="status">Delivery Accepted</div>
                          <div class="date">Apr 10, 2024 | 03:00PM</div>
                        </li>
                        <li>
                          <div class="icon2"></div>
                          <div class="status">Delivery Pickup</div>
                          <div class="date">Apr 10, 2024 | 03:30PM</div>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className={`p4order ${order.status === 'preparing' ? 'no-border' : ''}`}>
                      <div className="p5header">
                        <span className="p6id">Order ID: {order.id}</span>
                        <span className="p6date">Date: {order.date}</span>
                      </div>
                      <div className="p5items">
                        <span>
                          Order Items
                          <img src='/up.svg' alt='' />
                        </span>
                        {order.items.map((item, index) => (
                          <div key={index} className="p6item">
                            <span>{item.quantity} x {item.name}</span>
                            <span>₹{(item.price * item.quantity).toFixed()}</span>
                          </div>
                        ))}
                      </div>
                      {order.status !== 'preparing' && (
                        <>
                          <div className="p5total">
                            <span>
                              Total Bill Amount: <span className="payment-method">{order.paymentMethod}</span>
                            </span>
                            <span>₹{order.total.toFixed(2)}</span>
                          </div>
                          <span className="p5details" onClick={() => handleViewDetails(order.id)}>
                            {selectedOrderId === order.id ? 'Hide details' : 'View full order details'}
                            <img src='/side.svg' alt='' />
                          </span>
                        </>
                      )}
                      <div className="p5actions">
                        {order.status === 'confirmation' && (
                          <>
                            <button className="p6reject" onClick={() => handleReject(order.id)}>
                              Reject Order
                            </button>
                            <button className="p6confirm" onClick={() => handleConfirm(order.id)}>
                              Confirm Order
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
            <div className="order-details-container">
              <OrderDetails order={orders.find(order => order.id === selectedOrderId)} />
            </div>
          </section>
        </main>

        <div>
          <div className="profile-icon" onClick={handleProfileClick}>
            <img src='/profile2.svg' alt='Profile' />
          </div>
          {showLogout && (
            <div className="p1logout">
              <span onClick={() => setShowLogout(false)}>
                <img src='/logout.svg' alt='' />
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="floating-chat-icon">
        <img src='/wtsapp.svg' alt='' />
      </div>
    </div>
  );
}

export default Assign;