import React from "react";
import { NavLink } from "react-router-dom";
// import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Pemilik Toko</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/pemilik-toko"}> Dashboard </NavLink>
          </li>
          <p className="menu-label">Laporan</p>
          <li>
            <NavLink to={"/pemilik-toko/laporan-penjualan"}> Laporan Penjualan </NavLink>
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