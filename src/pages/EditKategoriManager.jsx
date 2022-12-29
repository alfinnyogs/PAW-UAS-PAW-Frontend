import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditKategoriManager= () => {
const [name, setName] = useState("");
const [msg, setMsg] = useState("");
const { id } = useParams();

useEffect(() => {
    const geKategoriById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/kategori/${id}`);
        setName(response.data.name);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    geKategoriById();
  }, [id]);

  const updateKategori = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/kategori/${id}`, {
        name: name
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (        
        <div>
            <h2 className="subtitle mt-2">Edit Kategori</h2>
                <div className="card is-shadowless">
                <div className="card-content">
                <div className="content">
                    <form onSubmit={updateKategori}>
                    <p className="has-text-centered">{msg }</p>
                    <div className="field">
                        <label className="label">Nama Kategori</label>
                        <div className="control">
                        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama"/>
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

export default EditKategoriManager;