import React, {useState, useEffect} from "react"; 
import { NavLink } from "react-router-dom";
import axios from "axios";
import {Link } from "react-router-dom";

const KelKategoriManager = () => {
    const [kategori, setKategoris] = useState([]);
  
    useEffect(() => {
      getKategoris();
    }, []);
  
    const getKategoris = async () => {
      const response = await axios.get("http://localhost:5000/kategoris");
      setKategoris(response.data);
    };
  
    const deleteKategori = async (uuid) => {
      await axios.delete(`http://localhost:5000/kategori/${uuid}`);
      getKategoris();
    };
  

  return (
    <div>
        <h2 className="subtitle mt-1">Data Kategori</h2>
        <div class="control">
        <NavLink to={"/manager/kelola-kategori/tambah-kategori"}>
          <button class="button is-link is-outlined"> Tambah </button> 
        </NavLink>
        </div>
        <table className="table is-striped is-fullwidth mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Kategori</th>
            <th>Nama Kategori</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
        {
              kategori && kategori.map((data,index)=>(
                <tr>
              <td>{index + 1}</td>
              <td>{kategori.uuid}</td>
              <td>{kategori.nama_kategori}</td>
              <td>
                <Link class="button m-1 is-info" to={`/manager/kelola-kategori/edit-kategori/${kategori.uuid}`}> Edit </Link>
                <Link class="button m-1 is-danger" onClick={() => deleteKategori(kategori.uuid)}> Hapus </Link> 
              </td>
            </tr>
            ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default KelKategoriManager;