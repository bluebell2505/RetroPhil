import React, { useState } from 'react';
import { db, imgDB } from './firebase.js'; // Import Firestore and Storage
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [downloadURL, setDownloadURL] = useState('');

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const storageRef = ref(imgDB, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error('Upload error:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setDownloadURL(url);

            // Save to Firestore
            const productRef = collection(db, 'products');
            addDoc(productRef, {
              title: title,
              description: description,
              price: price,
              imageUrl: url,
            })
              .then(() => {
                console.log('Product added to Firestore');
                // Optionally reset the form after successful upload
                setTitle('');
                setDescription('');
                setPrice('');
                setImage(null);
                setUploadProgress(0);
              })
              .catch((error) => {
                console.error('Error adding document:', error);
              });
          });
        }
      );
    }
  };

  return (
    <div className="upload-container p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold mb-4">Upload New Product</h1>
      <input
        type="text"
        placeholder="Enter product title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full rounded mb-4"
      />
      <textarea
        placeholder="Enter product description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="4"
        className="border p-2 w-full rounded mb-4"
        style={{ resize: 'none' }} // Prevent resizing if needed
      />
      <input
        type="number"
        placeholder="Enter product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2 w-full rounded mb-4"
      />
      <input
        type="file"
        onChange={handleImageChange}
        className="border p-2 w-full rounded mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Upload Image
      </button>
      <p>Upload Progress: {uploadProgress}%</p>
      {downloadURL && (
        <div>
          <p>Image uploaded successfully!</p>
          <img src={downloadURL} alt="Uploaded" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default Upload;
