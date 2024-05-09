"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const Settings = () => {

  const rows: GridRowsProp = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, stock: 50, description: 'High performance laptop with Intel i7 processor', manufacturer: 'HP', rating: 4.5, reviews: 120 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800, stock: 100, description: 'Latest smartphone with 5G capability', manufacturer: 'Samsung', rating: 4.3, reviews: 200 },
    { id: 3, name: 'Smart TV', category: 'Electronics', price: 1500, stock: 30, description: '55" 4K Smart TV with HDR', manufacturer: 'LG', rating: 4.7, reviews: 80 },
    { id: 4, name: 'Running Shoes', category: 'Sports', price: 120, stock: 200, description: 'Comfortable running shoes for long distances', manufacturer: 'Nike', rating: 4.8, reviews: 150 },
    { id: 5, name: 'Cookware Set', category: 'Home & Kitchen', price: 200, stock: 80, description: 'Non-stick cookware set with utensils', manufacturer: 'Cuisinart', rating: 4.6, reviews: 100 },
    // Add more rows as needed
    { id: 6, name: 'Headphones', category: 'Electronics', price: 100, stock: 150, description: 'Wireless Bluetooth headphones with noise cancellation', manufacturer: 'Sony', rating: 4.4, reviews: 180 },
    { id: 7, name: 'Gaming Console', category: 'Electronics', price: 400, stock: 70, description: 'Next-gen gaming console with 4K gaming support', manufacturer: 'Microsoft', rating: 4.9, reviews: 250 },
    { id: 8, name: 'Yoga Mat', category: 'Sports', price: 30, stock: 300, description: 'Extra thick yoga mat for comfortable workouts', manufacturer: 'Gaiam', rating: 4.7, reviews: 90 },
    { id: 9, name: 'Coffee Maker', category: 'Home & Kitchen', price: 80, stock: 120, description: 'Programmable coffee maker with auto-brew feature', manufacturer: 'Keurig', rating: 4.5, reviews: 150 },
    { id: 10, name: 'Bluetooth Speaker', category: 'Electronics', price: 50, stock: 200, description: 'Portable Bluetooth speaker with waterproof design', manufacturer: 'JBL', rating: 4.3, reviews: 140 },
    // Add more rows as needed
    { id: 11, name: 'Running Jacket', category: 'Sports', price: 80, stock: 90, description: 'Waterproof running jacket with reflective strips', manufacturer: 'Adidas', rating: 4.6, reviews: 110 },
    { id: 12, name: 'Home Security Camera', category: 'Home & Kitchen', price: 150, stock: 40, description: 'Smart home security camera with motion detection', manufacturer: 'Ring', rating: 4.8, reviews: 70 },
    // Add more rows as needed
  ];
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'price', headerName: 'Price', type: 'number', width: 120 },
  { field: 'stock', headerName: 'Stock', type: 'number', width: 120 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'manufacturer', headerName: 'Manufacturer', width: 150 },
  { field: 'rating', headerName: 'Rating', type: 'number', width: 120 },
  { field: 'reviews', headerName: 'Reviews', type: 'number', width: 120 },
  ];
  return<div className='m-10'>
  <h2 className='flex items-center font-semibold ml-[10%] mb-2'>Products</h2>
  <DataGrid rows={rows} columns={columns} />
</div>;
};

export default Settings;
