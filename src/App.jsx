import React from 'react';
import { useApp } from './context/AppContext';

// Public components
import PublicHeader from './components/public/PublicHeader';
import PublicFooter from './components/public/PublicFooter';
import LandingPage from './components/public/LandingPage';
import LoginPage from './components/public/LoginPage';
import RegistrationForm from './components/public/RegistrationForm';
import ReceiptPage from './components/public/ReceiptPage';
import StatusCheckPage from './components/public/StatusCheckPage';

// Admin components
import AdminSidebar from './components/admin/AdminSidebar';
import AdminTopbar from './components/admin/AdminTopbar';
import DashboardPage from './components/admin/DashboardPage';
import DataPendaftarPage from './components/admin/DataPendaftarPage';
import VerifikasiPage from './components/admin/VerifikasiPage';
import InformasiPPDBPage from './components/admin/InformasiPPDBPage';
import LaporanPage from './components/admin/LaporanPage';

import { NoticeBanner } from './components/ui/SharedComponents';

function AppContent() {
  const { role, adminPage, notice, setNotice } = useApp();

  // ─── Admin portal ───
  if (role === 'admin') {
    return (
      <div className="flex min-h-screen bg-[#f5faf6]">
        <AdminSidebar />
        <main className="min-w-0 flex-1">
          <AdminTopbar />
          <div className="mx-auto max-w-[1400px] space-y-6 p-5 md:p-8">
            <NoticeBanner notice={notice} onClose={() => setNotice('')} />
            {adminPage === 'Dashboard' && <DashboardPage />}
            {adminPage === 'Data Pendaftar' && <DataPendaftarPage />}
            {adminPage === 'Verifikasi' && <VerifikasiPage />}
            {adminPage === 'Informasi PPDB' && <InformasiPPDBPage />}
            {adminPage === 'Laporan' && <LaporanPage />}
          </div>
        </main>
      </div>
    );
  }

  // ─── Registration form ───
  if (role === 'apply') {
    return <RegistrationForm />;
  }

  // ─── Receipt page ───
  if (role === 'receipt') {
    return <ReceiptPage />;
  }

  // ─── Status check page ───
  if (role === 'status') {
    return <StatusCheckPage />;
  }

  // ─── Public portal (home + login) ───
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fbf7]">
      <PublicHeader />

      {role === 'login' ? (
        <LoginPage />
      ) : (
        <>
          <main>
            <LandingPage />
          </main>
          <PublicFooter />
        </>
      )}
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
