import React from "react"; 
import { NavLink } from "react-router-dom";

const KelKategoriManager = () => {
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
            <th>Nama Kategori</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button class="button m-1 is-info"> Edit </button>
                <button class="button m-1 is-danger"> Hapus </button> 
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KelKategoriManager;