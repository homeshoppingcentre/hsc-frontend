'use client';
import { useState } from 'react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', isBusiness: false });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch('https://hsc-backend.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input name="name" placeholder="Name" onChange={handleChange} required className="border p-2 w-full" />
      <input name="email" placeholder="Email" type="email" onChange={handleChange} required className="border p-2 w-full" />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required className="border p-2 w-full" />
      <label className="block">
        <input type="checkbox" name="isBusiness" onChange={handleChange} />
        I’m a business
      </label>
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  );
}
