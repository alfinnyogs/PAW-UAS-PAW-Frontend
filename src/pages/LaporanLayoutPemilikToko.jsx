import React from "react";
import LayoutPemilikToko from "./LayoutPemilikToko";
import LaporanPenjualan from "./LaporanPenjualan";

const LaporanLayout= () => {
  return (
    <LayoutPemilikToko>
      <LaporanPenjualan />
    </LayoutPemilikToko>
  );
};

export default LaporanLayout;