import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditKasirManager= () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("");
const [msg, setMsg] = useState("");
const { id } = useParams();

useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setName(response.data.password);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        role: role,
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (        
        <div>
            <h2 className="subtitle mt-2">Edit Kasir</h2>
                <div className="card is-shadowless">
                <div className="card-content">
                <div className="content">
                <form onSubmit={updateUser}>
                    <p className="has-text-centered">{msg}</p>
                    <div className="field">
                        <label className="label">Nama</label>
                        <div className="control">
                        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                        <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                        <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Role</label>
                        <div className="control">
                        <input type="text" className="input" value={role} onChange={(e) => setRole(e.target.value)} placeholder="kasir"/>
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

export default EditKasirManager;