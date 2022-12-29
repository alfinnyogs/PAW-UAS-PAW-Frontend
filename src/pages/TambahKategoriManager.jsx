import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahKategoriManager= () => {
const [nama_kategori, setName] = useState("");
const [msg, setMsg] = useState("");
const navigate = useNavigate();

const createKategori = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/kategoris", {
        nama_kategori: nama_kategori
      });
      navigate("/manager/kelola-kategori");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (        
        <div>
            <h2 className="subtitle mt-2">Tambah Kategori</h2>
                <div className="card is-shadowless">
                <div className="card-content">
                <div className="content">
                    <form onSubmit={createKategori}>
                    <p className="has-text-centered">{msg}</p>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                        <input type="text" className="input" value={nama_kategori} onChange={(e) => setName(e.target.value)} placeholder="Nama"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Role</label>
                        <div className="control">
                        <input type="text" className="input" value="" onChange="" placeholder="kasir"/>
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

export default TambahKategoriManager;