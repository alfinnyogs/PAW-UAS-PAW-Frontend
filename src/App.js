import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Kasir
import Login from "./pages/Login";
import DashboardKasir from "./pages/DashboardKasir";
import BarangLayoutKasir from "./pages/BarangLayoutKasir";
import PenjualanLayoutKasir from "./pages/PenjualanLayoutKasir";
import TransaksiLayoutKasir from "./pages/TransaksiLayout";

// Manager
import DashboardManager from "./pages/DashboardManager";
import KasirLayoutManager from "./pages/KasirLayoutManager";
import AddKasirLayoutManager from "./pages/AddKasirLayoutManager";
import EditLayoutKasirManager from "./pages/EditLayoutKasirManager";
import KategoriLayoutManager from "./pages/KategoriLayoutManager";
import AddKategoriLayoutManager from "./pages/AddKategoriLayoutManager";
import LayoutEditKategoriManager from "./pages/LayoutEditKategoriManager"
import KelBarangLayoutManager from "./pages/KelBarangLayoutManager"
import AddBarangLayoutManager from "./pages/AddBarangLayoutManager";
import LayoutEditBarangManager from "./pages/LayoutEditBarangManager";
import LayoutPenjualanManager from "./pages/LayoutPenjualanManager";
import LaporanPenjualanManager from "./pages/LaporanLayoutManager";

// Pemilik Toko
import DashboardPemilikToko from "./pages/DashboardPemilikToko";
import LaporanPenjualanPemilikToko from "./pages/LaporanLayoutPemilikToko";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/kasir',
    element: <DashboardKasir />,
  },
 {
    path: '/kasir/data-barang',
    element: <BarangLayoutKasir />,
  },
  {
    path: '/kasir/data-penjualan',
    element: <PenjualanLayoutKasir />,
  },
  {
    path: '/kasir/transaksi-penjualan',
    element: <TransaksiLayoutKasir />,
  },

  {
    path: '/manager',
    element: <DashboardManager />,
  },
  {
    path: '/manager/kelola-kasir',
    element: <KasirLayoutManager />,
  },
  {
    path: '/manager/kelola-kasir/tambah-kasir',
    element: <AddKasirLayoutManager />,
  },
  {
    path: '/manager/kelola-kasir/edit-kasir',
    element: <EditLayoutKasirManager />,
  },
  {
    path: '/manager/kelola-kategori',
    element: <KategoriLayoutManager />,
  },
  {
    path: '/manager/kelola-kategori/tambah-kategori',
    element: <AddKategoriLayoutManager />,
  },
  {
    path: '/manager/kelola-kategori/edit-kategori',
    element: <LayoutEditKategoriManager />,
  },
  {
    path: '/manager/kelola-barang',
    element: <KelBarangLayoutManager />,
  },
  {
    path: '/manager/kelola-barang/tambah-barang',
    element: <AddBarangLayoutManager />,
  },
  {
    path: '/manager/kelola-barang/edit-barang',
    element: <LayoutEditBarangManager />,
  },
  {
    path: '/manager/kelola-penjualan',
    element: <LayoutPenjualanManager />,
  },
  {
    path: '/manager/laporan-penjualan',
    element: <LaporanPenjualanManager/>
  },

  {
    path: '/pemilik-toko',
    element: <DashboardPemilikToko />,
  },
  {
    path: '/pemilik-toko/laporan-penjualan',
    element: <LaporanPenjualanPemilikToko/>
  },

]);

export default function App() {
  return <RouterProvider router={router} />;
}
