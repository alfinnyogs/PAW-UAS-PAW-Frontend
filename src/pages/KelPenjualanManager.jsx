import React from "react";

const KelPenjualanManager = () => {
  return (
    <div>
        <h2 className="subtitle mt-2">Data Penjualan</h2>
        <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kategori</th>
            <th>Nama Barang</th>
            <th>Qty</th>
            <th>Harga</th>
            <th>Total Harga</th>
            <th>Waktu Transaksi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
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

export default KelPenjualanManager;