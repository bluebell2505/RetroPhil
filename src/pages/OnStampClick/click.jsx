import React, { useEffect, useState } from 'react';
import { db } from '../firebase.js'; // Import Firestore
import { collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import { imgDB } from '../firebase.js'; // Import Firebase Storage if you need to fetch images from storage

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch product data from Firestore
    const fetchProductData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productData = querySnapshot.docs[0].data(); // Assuming you have one product
        setProduct(productData);

        // Fetch image URL from Firebase Storage if it's stored as a path
        if (productData.img) {
          const imageRef = ref(imgDB, productData.img); // Assuming `img` is the image path
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg max-w-5xl w-full flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Product"
              className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          )}
        </div>

        {/* Details Section */}
        <div className="p-10 md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-bold mb-6">₹{product.price}</p>
          </div>

          {/* Buttons */}
          <div>
            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
                Add to Cart
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded hover:bg-gray-100">
                Enquiries/Payments
              </button>
            </div>

            {/* Wishlist and Delivery Information */}
            <div className="flex space-x-4 items-center text-gray-500 text-sm">
              <button className="hover:text-gray-700">Add to Wishlist</button>
              <span>|</span>
              <button className="hover:text-gray-700">Delivery</button>
              <span>|</span>
              <button className="hover:text-gray-700">Returns</button>
              <span>|</span>
              <button className="hover:text-gray-700">Payment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
