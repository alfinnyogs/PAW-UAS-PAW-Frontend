import React, {useEffect,useState} from "react";
//import { Link } from "react-router-dom" ;
import axios from "axios";
// import {produts ,getProducts } from "../backend/controllers/Products";

const DataBarangKasir = () => { 
  const [datas,setDatas] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/produtcs').then((res)=>setDatas(res.data))
  },[])
  console.log(datas)
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  // }
  const DeleteUser = (uuid) => {
    console.log(uuid);
    axios.delete(`http://localhost:5000/product/${uuid}`)
  }
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
          {
              datas && datas.map((data,index)=>(
                <tr>
              <td>{index + 1}</td>
              <td>{data.uuid}</td>
              <td>{data.nama_produk}</td>
              <td>{data.kategorId}</td>
              <td>{data.stok}</td>
              <td>{data.harga}</td>
              <td>
                <button class="button m-1 is-info"> Edit </button>
                <button class="button m-1 is-danger" onClick={DeleteUser(data.uuid)}> Hapus </button> 
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default DataBarangKasir;