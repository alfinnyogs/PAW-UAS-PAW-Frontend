import React from "react";
import LayoutManager from "./LayoutManager";
import LaporanPenjualan from "./LaporanPenjualan";

const LaporanLayout= () => {
  return (
    <LayoutManager>
      <LaporanPenjualan />
    </LayoutManager>
  );
};

export default LaporanLayout;