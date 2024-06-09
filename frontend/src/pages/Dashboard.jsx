import React, { useState } from 'react';

const Profile = () => {
  const [productUrl, setProductUrl] = useState('');
  const [trackedProducts, setTrackedProducts] = useState([
    { id: 1, name: 'Product 1', currentPrice: '$100' },
    { id: 2, name: 'Product 2', currentPrice: '$150' },
    // Add more dummy products here
  ]);

  const handleAddProduct = () => {
    // Add product logic here
    console.log('Add product:', productUrl);
    setProductUrl('');
  };

  const handleDeleteProduct = (productId) => {
    // Delete product logic here
    console.log('Delete product:', productId);
  };

  const handleUpdateProduct = (productId) => {
    // Update product logic here
    console.log('Update product:', productId);
  };

  const handleViewProduct = (productId) => {
    // View product logic here
    console.log('View product:', productId);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
        <div className="flex items-center">
          <input
            type="text"
            value={productUrl}
            onChange={(e) => setProductUrl(e.target.value)}
            placeholder="Paste Amazon product URL here"
            className="border p-2 mr-2 flex-grow"
          />
          <button
            onClick={handleAddProduct}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Scrape Product
          </button>
        </div>
      </section>

      <section className="tracked-products-section">
        <h2 className="text-xl font-semibold mb-2">Tracked Products</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Product</th>
              <th className="py-2 px-4 border-b">Current Price</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trackedProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.currentPrice}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleViewProduct(product.id)}
                    className="bg-green-500 text-white p-1 rounded mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleUpdateProduct(product.id)}
                    className="bg-yellow-500 text-white p-1 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Profile;
