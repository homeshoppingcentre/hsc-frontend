'use client'

import { useState } from 'react'

export default function DashboardPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')
  const [message, setMessage] = useState('')
  const userId = '689545cf87f64ba506e02823' // 🔒 Replace with logged-in user's ID later

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await fetch('https://hsc-backend.onrender.com/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          price: parseFloat(price),
          image,
          userId,
        }),
      })

      if (!res.ok) throw new Error('Failed to create product')

      setMessage('✅ Product added successfully')
      setTitle('')
      setDescription('')
      setPrice('')
      setImage('')
    } catch (err) {
      setMessage('❌ Something went wrong')
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">
          Add Product
        </button>
      </form>

      {message && <p className="mt-4 text-center text-sm text-blue-600">{message}</p>}
    </div>
  )
}
