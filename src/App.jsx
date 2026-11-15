import React from 'react';
import { useApp } from './context/AppContext';

// Public & User components
import PublicHeader from './components/public/PublicHeader';
import PublicFooter from './components/public/PublicFooter';
import LandingPage from './components/public/LandingPage';
import AuthPage from './components/public/AuthPage';
import RegistrationForm from './components/public/RegistrationForm';
import ReceiptPage from './components/public/ReceiptPage';
import StatusCheckPage from './components/public/StatusCheckPage';
import PengumumanPage from './components/public/PengumumanPage';
import UserDashboardPage from './components/user/UserDashboardPage';

// Admin components
import AdminSidebar from './components/admin/AdminSidebar';
import AdminTopbar from './components/admin/AdminTopbar';
import DashboardPage from './components/admin/DashboardPage';
import DataPendaftarPage from './components/admin/DataPendaftarPage';
import VerifikasiPage from './components/admin/VerifikasiPage';
import PengumumanAdminPage from './components/admin/PengumumanAdminPage';
import LaporanPage from './components/admin/LaporanPage';
import InformasiPPDBPage from './components/admin/InformasiPPDBPage';

import { NoticeBanner } from './components/ui/SharedComponents';

function AppContent() {
  const { role, adminPage, notice, setNotice, currentUser } = useApp();

  // ─── 1. Admin portal ───
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
            {adminPage === 'Pengumuman' && <PengumumanAdminPage />}
            {adminPage === 'Laporan' && <LaporanPage />}
            {adminPage === 'Informasi PPDB' && <InformasiPPDBPage />}
          </div>
        </main>
      </div>
    );
  }

  // ─── 2. User Dashboard (Wali Murid) ───
  if (role === 'user-dashboard') {
    return (
      <div className="min-h-screen bg-[#f5faf6]">
        <NoticeBanner notice={notice} onClose={() => setNotice('')} />
        <UserDashboardPage />
      </div>
    );
  }

  // ─── 3. Registration form (Wajib Login/Register) ───
  if (role === 'apply') {
    if (!currentUser) {
      return (
        <div className="min-h-screen overflow-hidden bg-[#f7fbf7]">
          <PublicHeader />
          <div className="mx-auto max-w-xl px-4 pt-6">
            <NoticeBanner
              notice="Silakan buat akun orang tua/wali atau masuk terlebih dahulu untuk mengisi formulir pendaftaran."
              onClose={() => setNotice('')}
            />
          </div>
          <main>
            <AuthPage />
          </main>
          <PublicFooter />
        </div>
      );
    }
    return <RegistrationForm />;
  }

  // ─── 4. Receipt page ───
  if (role === 'receipt') {
    return <ReceiptPage />;
  }

  // ─── 5. Status check page ───
  if (role === 'status') {
    return <StatusCheckPage />;
  }

  // ─── 6. Pengumuman seleksi page ───
  if (role === 'pengumuman') {
    return <PengumumanPage />;
  }

  // ─── 7. Public portal (Home & Login/Register) ───
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fbf7]">
      <PublicHeader />
      <NoticeBanner notice={notice} onClose={() => setNotice('')} />

      {role === 'login' || role === 'register' ? (
        <main>
          <AuthPage />
        </main>
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
