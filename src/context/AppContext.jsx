import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  initialApplicants,
  defaultAnnouncement,
  generateId,
} from '../data/dummyData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Routing
  const [role, setRole] = useState('home'); // home | login | apply | receipt | status | admin
  const [adminPage, setAdminPage] = useState('Dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data
  const [applicants, setApplicants] = useState(initialApplicants);
  const [announcement, setAnnouncement] = useState(defaultAnnouncement);

  // Search & filter (admin)
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua status');

  // Notification banner
  const [notice, setNotice] = useState('');

  // Registration form
  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    birth: '',
    gender: 'Perempuan',
    address: '',
    parent: '',
    phone: '',
    email: '',
    schoolYear: '2027/2028',
  });
  const [files, setFiles] = useState({});
  const [createdApplicant, setCreatedApplicant] = useState(null);

  // Status check
  const [statusQuery, setStatusQuery] = useState('');
  const [statusResult, setStatusResult] = useState(undefined); // undefined = not searched yet

  // Login
  const [loginEmail, setLoginEmail] = useState('admin@qurrotayun.sch.id');
  const [loginPass, setLoginPass] = useState('demo123');

  // Verification selected applicant
  const [selectedApplicantId, setSelectedApplicantId] = useState('');

  // Filtered applicants for admin table
  const filteredApplicants = useMemo(
    () =>
      applicants.filter(
        (a) =>
          (a.name.toLowerCase().includes(search.toLowerCase()) ||
            a.id.toLowerCase().includes(search.toLowerCase()) ||
            a.parent.toLowerCase().includes(search.toLowerCase())) &&
          (filterStatus === 'Semua status' || a.status === filterStatus)
      ),
    [applicants, search, filterStatus]
  );

  // Stats
  const stats = useMemo(
    () => ({
      total: applicants.length,
      menunggu: applicants.filter((a) => a.status === 'Menunggu verifikasi').length,
      diterima: applicants.filter((a) => a.status === 'Diterima').length,
      perbaikan: applicants.filter((a) => a.status === 'Perlu perbaikan').length,
      ditolak: applicants.filter((a) => a.status === 'Ditolak').length,
    }),
    [applicants]
  );

  // Actions
  function updateFormField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submitRegistration() {
    const id = generateId(applicants.length);
    const newApplicant = {
      id,
      name: form.name,
      birth: form.birth,
      gender: form.gender,
      address: form.address,
      parent: form.parent,
      phone: form.phone,
      email: form.email,
      date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Menunggu verifikasi',
      docs: Object.keys(files).length >= 2 ? 'Lengkap' : 'Belum lengkap',
      age: '—',
      schoolYear: form.schoolYear,
      files: { ...files },
    };
    setApplicants((prev) => [newApplicant, ...prev]);
    setCreatedApplicant(newApplicant);
    setRole('receipt');
    setNotice('Pendaftaran demo berhasil dibuat.');
  }

  function resetForm() {
    setFormStep(1);
    setForm({
      name: '',
      birth: '',
      gender: 'Perempuan',
      address: '',
      parent: '',
      phone: '',
      email: '',
      schoolYear: '2027/2028',
    });
    setFiles({});
  }

  function updateApplicantStatus(id, newStatus) {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    setNotice(`Status ${id} diperbarui menjadi ${newStatus}.`);
  }

  function navigateAdmin(page) {
    setAdminPage(page);
    setRole('admin');
    setMobileMenuOpen(false);
  }

  function logout() {
    setRole('home');
    setAdminPage('Dashboard');
    setMobileMenuOpen(false);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (
      loginEmail === 'admin@qurrotayun.sch.id' &&
      loginPass === 'demo123'
    ) {
      setRole('admin');
      setAdminPage('Dashboard');
      setNotice('');
    } else {
      setNotice('Email atau kata sandi demo tidak sesuai.');
    }
  }

  function checkStatus(e) {
    e.preventDefault();
    const found = applicants.find(
      (a) => a.id.toLowerCase() === statusQuery.trim().toLowerCase()
    );
    setStatusResult(found || null);
  }

  const value = {
    // Routing
    role, setRole,
    adminPage, setAdminPage,
    mobileMenuOpen, setMobileMenuOpen,
    // Data
    applicants, setApplicants,
    announcement, setAnnouncement,
    filteredApplicants,
    stats,
    // Search/filter
    search, setSearch,
    filterStatus, setFilterStatus,
    // Notification
    notice, setNotice,
    // Form
    formStep, setFormStep,
    form, updateFormField,
    files, setFiles,
    createdApplicant,
    // Status
    statusQuery, setStatusQuery,
    statusResult, setStatusResult,
    // Login
    loginEmail, setLoginEmail,
    loginPass, setLoginPass,
    // Verification
    selectedApplicantId, setSelectedApplicantId,
    // Actions
    submitRegistration,
    resetForm,
    updateApplicantStatus,
    navigateAdmin,
    logout,
    handleLogin,
    checkStatus,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
