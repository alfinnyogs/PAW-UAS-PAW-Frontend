import React from "react";
import { NavLink } from "react-router-dom";
// import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label"> Kasir</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/kasir"}> Dashboard </NavLink>
          </li>
          <p className="menu-label"> Data </p>
          <li>
            <NavLink to={"/kasir/data-barang"}> Data Barang </NavLink>
          </li>
          <li>
            <NavLink to={"/kasir/data-penjualan"}> Data Penjualan </NavLink>
          </li>
          <p className="menu-label"> Transaksi </p>
          <li>
            <NavLink to={"/kasir/transaksi-penjualan"}>  Penjualan </NavLink>
          </li>
        </ul>
        <p className="menu-label">Pengaturan</p>
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