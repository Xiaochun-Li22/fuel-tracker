import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newTransaction, setNewTransaction] = useState({
    vehicleId: '',
    location: '',
    fuelAmount: '',
    timestamp: ''
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/fuel')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/fuel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTransaction)
    })
      .then(response => response.json())
      .then(data => {
        setTransactions([...transactions, data]);
        setNewTransaction({ vehicleId: '', location: '', fuelAmount: '', timestamp: '' });
      })
      .catch(error => console.error('Error adding transaction:', error));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      fetch(`http://localhost:8080/api/fuel/${id}`, {
        method: 'DELETE'
      })
        .then(() => {
          setTransactions(transactions.filter(t => t.id !== id));
        })
        .catch(error => console.error('Error deleting transaction:', error));
    }
  };

  const filteredTransactions = transactions.filter(t =>
    t.vehicleId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Fuel Transactions</h2>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Vehicle ID or Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="table table-striped table-bordered">
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Vehicle ID</th>
            <th>Location</th>
            <th>Fuel Amount</th>
            <th>Timestamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t, index) => (
            <tr key={t.id}>
              <td>{index + 1}</td>  {/* Display row number instead of actual DB id */}
              <td>{t.vehicleId}</td>
              <td>{t.location}</td>
              <td>{t.fuelAmount}</td>
              <td>{t.timestamp}</td>
              <td>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form */}
      <h4 className="mt-5">Add New Transaction</h4>
      <form onSubmit={handleSubmit} className="row g-3 mt-2">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Vehicle ID"
            value={newTransaction.vehicleId}
            onChange={e => setNewTransaction({ ...newTransaction, vehicleId: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={newTransaction.location}
            onChange={e => setNewTransaction({ ...newTransaction, location: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Fuel Amount"
            value={newTransaction.fuelAmount}
            onChange={e => setNewTransaction({ ...newTransaction, fuelAmount: e.target.value })}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="datetime-local"
            className="form-control"
            value={newTransaction.timestamp}
            onChange={e => setNewTransaction({ ...newTransaction, timestamp: e.target.value })}
            required
          />
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary w-100">Add</button>
        </div>
      </form>
    </div>
  );
}

export default App;
