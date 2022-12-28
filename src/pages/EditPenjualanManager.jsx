import React from "react";

const EditPenjualanManager= () => {
  return (
    <div>
        <h2 className="subtitle mt-2">Tambah Transaksi</h2>
        <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit="">
              <p className="has-text-centered"></p>
              <div className="field">
                <label className="label">Nama Produk</label>
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <div class="select is-fullwidth">
                        <select name="NamaProduk">
                            <option value="">Case Hp Iphone 11 Promax</option>
                        </select>
                        </div>
                    </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Kategori Barang</label>
                <div className="control">
                  <input type="text" className="input" value="" onChange="" placeholder="Kategori Barang"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Harga</label>
                <div className="control">
                  <input type="text" className="input" value="" onChange="" placeholder="Harga"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Stok</label>
                <div className="control">
                  <input type="text" className="input" value="" onChange="" placeholder="Stok"/>
                </div>
              </div>
              <div className="field">
                <label className="label">Jumlah</label>
                <div className="control">
                  <input type="text" className="input" value="" onChange="" placeholder="Jumlah"/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPenjualanManager;