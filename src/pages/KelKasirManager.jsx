import React,{useEffect,useState} from "react"; 
import axios from "axios"; 
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const KelKasirManager = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setDatas(response.data);
  };

  const DeleteUser = async (uuid) => {
    await axios.delete(`http://localhost:5000/user/${uuid}`);
    getDatas();
  };

  return (
    <div>
        <h2 className="subtitle mt-1">Data Kasir</h2>
        <div class="control">
        <NavLink to={"/manager/kelola-kasir/tambah-kasir"}>
          <button class="button is-link is-outlined"> Tambah </button> 
        </NavLink>
        </div>
        <table className="table is-striped is-fullwidth mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kasir</th>
            <th>Email</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {
              datas && datas.map((data,index)=>(
                <tr>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.role}</td>
              <td>
                <Link class="button m-1 is-info" to={`/manager/kelola-kasir/edit-kasir/${data.uuid}`}> Edit </Link>
                <Link class="button m-1 is-danger" onClick={() => DeleteUser(data.uuid)}> Hapus </Link> 
              </td>
            </tr>
            ))
            }
        </tbody>
      </table>
    </div>
  );
};

export default KelKasirManager;