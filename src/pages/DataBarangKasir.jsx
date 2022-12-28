import React from "react";
import { Link } from "react-router-dom" ;
import axios from "axios";

const DataBarangKasir = () => {  
  const getProducts = await axios.get("http://localhost:5000/products"); 
  return (
    <div>
        <h2 className="subtitle mt-2">Data Barang</h2>
        <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {produtcs.map((product, index) => {
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.uuid}</td>
              <td>{product.nama_produk}</td>
              <td>Makanan</td>
              <td>{product.stok}</td>
              <td>{product.harga}</td>
            </tr>
          })};  
        </tbody>
      </table>
    </div>
  );
};

export default DataBarangKasir;