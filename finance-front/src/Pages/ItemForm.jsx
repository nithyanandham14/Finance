import React, { useState } from 'react';
import axios from 'axios';

export default function ItemForm() {
  const [item, setItem] = useState({
    jwlno: '',
    name: '',
    fathername: '',
    principalamt: '',
    stdate: '',
    address: '',
    itemtype: '',
    number: '',
    status: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setItem(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/bjsn/item', item, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Item added successfully!');
    } catch (err) {
      alert('Error adding item');
      console.error(err);
    }
  };

  return (
    <div className='item'>
      <div className='item-body'>
        <h2 className="text-xl font-bold mb-4"><i class="fa-solid fa-coins"></i>Add New Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'JWL No', name: 'jwlno', type: 'number' },
            { label: 'Name', name: 'name' },
            { label: 'Father Name', name: 'fathername' },
            { label: 'Principal Amount', name: 'principalamt', type: 'number' },
            { label: 'Start Date', name: 'stdate', type: 'date' },
            { label: 'Address', name: 'address' },
            { label: 'Item Type', name: 'itemtype' },
            { label: 'Phone Number', name: 'number', type: 'number' }
          ].map(({ label, name, type = 'text' }) => (
            <input
              key={name}
              type={type}
              name={name}
              placeholder={label}
              value={item[name]}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded dark:bg-gray-800 dark:text-white mx-2 my-1"
            />
          ))}
          <label className="status mx-2 btn btn-warning flex items-center">
            <input type="checkbox" className='me-2' name="status" checked={item.status} onChange={handleChange} />
            <span className="ml-2 ">Status (In Loan)</span>
          </label>
          <button type="submit" className="px-4 py-2 btn btn-success rounded">Add Item</button>
        </form>
      </div>
    </div>

  );
}
