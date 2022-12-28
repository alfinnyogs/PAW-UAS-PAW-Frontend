import React from "react";
import { NavLink } from "react-router-dom";
// import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label"> Manager </p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/manager"}> Dashboard </NavLink>
          </li>
          <p className="menu-label"> Pengelolaan </p>
          <li>
            <NavLink to={"/manager/kelola-kasir"}> Kelola Kasir </NavLink>
          </li>
          <li>
            <NavLink to={"/manager/kelola-kategori"}> Kelola Kategori </NavLink>
          </li>
          <li>
            <NavLink to={"/manager/kelola-barang"}> Kelola Barang </NavLink>
          </li>
          <li>
            <NavLink to={"/manager/kelola-penjualan"}> Kelola Penjualan </NavLink>
          </li>
          <p className="menu-label"> Laporan </p>
          <li>
            <NavLink to={"/laporan-penjualan"}> Laporan Penjualan </NavLink>
          </li>
        </ul>
        <p className="menu-label"> Pengaturan </p>
        <ul className="menu-list">
          <li>
            <button className="button is-white"> Keluar </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;