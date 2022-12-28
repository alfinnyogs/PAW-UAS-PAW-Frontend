import React from "react";

const TambahBarangManager= () => {
  return (        
        <div>
            <h2 className="subtitle mt-2">Tambah Barang</h2>
                <div className="card is-shadowless">
                <div className="card-content">
                <div className="content">
                    <form onSubmit="">
                    <p className="has-text-centered"></p>
                    <div className="field">
                        <label className="label">Nama Barang</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="Nama"/>
                        </div>
                    </div>
                    <div class="field has-addons">
                        <div class="control is-expanded">
                            <label className="label">Pilih Kategori</label>
                            <div class="select is-fullwidth">
                                <select name="NamaKategori">
                                    <option value="">Barang</option>
                                    <option value="">Makanan</option>
                                    <option value="">Minuman</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Stok</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="Stok"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Harga</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="Harga Barasng"/>
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

export default TambahBarangManager;