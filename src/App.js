import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Debt Tracker</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
        </ul>
      </nav>
      <main>
        <h2>Transactions & Debts</h2>
        <div className="transaction-list">
          {/* Placeholder content for transaction list */}
          <div className="transaction-item">
            <span className="transaction-name">John Doe</span>
            <span className="transaction-amount">$50.00</span>
          </div>
          <div className="transaction-item">
            <span className="transaction-name">Jane Smith</span>
            <span className="transaction-amount">-$25.00</span>
          </div>
          {/* Add more transaction items as needed */}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Debt Tracker</p>
      </footer>
    </div>
  );
}

export default App;
