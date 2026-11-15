import React, { createContext, useContext, useMemo, useState } from 'react';
import {
  initialUsers,
  initialApplicants,
  defaultAnnouncement,
  defaultAnnouncementSettings,
  generateId,
  schoolProfile,
} from '../data/dummyData';

const AppContext = createContext(null);

const initialFormState = {
  // ─── DATA ANAK ───
  name: '',
  nickname: '',
  birthPlace: 'Bogor',
  birthDate: '',
  gender: 'Perempuan',
  childOrder: '1',
  totalSiblings: '1',
  height: '',
  weight: '',
  hobby: '',
  medicalHistory: '',
  schoolYear: '2027/2028',

  // ─── DATA AYAH ───
  fatherName: '',
  fatherBirthPlace: '',
  fatherBirthDate: '',
  fatherJob: '',
  fatherEducation: 'SMA/SMK',
  fatherAddress: '',
  fatherPhone: '',

  // ─── DATA IBU ───
  motherName: '',
  motherBirthPlace: '',
  motherBirthDate: '',
  motherJob: '',
  motherEducation: 'SMA/SMK',
  motherAddress: '',
  motherPhone: '',

  // Ringkasan / Kontak
  email: '',
  parent: '',
  phone: '',
  address: '',
};

export function AppProvider({ children }) {
  // Routing & Session
  const [role, setRole] = useState('home'); 
  // 'home' | 'login' | 'register' | 'apply' | 'receipt' | 'status' | 'pengumuman' | 'user-dashboard' | 'admin'
  const [adminPage, setAdminPage] = useState('Dashboard');
  // 'Dashboard' | 'Data Pendaftar' | 'Verifikasi' | 'Pengumuman' | 'Laporan' | 'Informasi PPDB'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Authentication State
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  // Auth form inputs
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register' | 'forgot'
  const [authRole, setAuthRole] = useState('user');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotNewPass, setForgotNewPass] = useState('');
  const [forgotConfirmPass, setForgotConfirmPass] = useState('');
  const [registerForm, setRegisterForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Data
  const [applicants, setApplicants] = useState(initialApplicants);
  const [announcement, setAnnouncement] = useState(defaultAnnouncement);
  const [announcementSettings, setAnnouncementSettings] = useState(
    defaultAnnouncementSettings
  );

  // Search & filter
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua status');
  const [filterGender, setFilterGender] = useState('Semua');

  // Notification banner
  const [notice, setNotice] = useState('');

  // Registration form
  const [formStep, setFormStep] = useState(1);
  const [form, setForm] = useState(initialFormState);
  const [files, setFiles] = useState({});
  const [createdApplicant, setCreatedApplicant] = useState(null);

  // Status check & pengumuman query
  const [statusQuery, setStatusQuery] = useState('');
  const [statusResult, setStatusResult] = useState(undefined);
  const [pengumumanQuery, setPengumumanQuery] = useState('');

  // Verification selected applicant & detail modal
  const [selectedApplicantId, setSelectedApplicantId] = useState(
    initialApplicants[0]?.id || ''
  );
  const [activeModalApplicant, setActiveModalApplicant] = useState(null);

  // Current user's registered applicants (Mendukung pendaftaran lebih dari 1 anak/kembar per akun)
  const userApplicants = useMemo(() => {
    if (!currentUser || currentUser.role !== 'user') return [];
    return applicants.filter(
      (a) =>
        a.userId === currentUser.id ||
        (currentUser.applicantIds && currentUser.applicantIds.includes(a.id)) ||
        (currentUser.applicantId && a.id === currentUser.applicantId) ||
        (currentUser.email && a.email && a.email.toLowerCase() === currentUser.email.toLowerCase())
    );
  }, [currentUser, applicants]);

  // Backward compatibility: anak aktif / anak pertama
  const userApplicant = userApplicants[0] || null;

  // Filtered applicants for admin table
  const filteredApplicants = useMemo(
    () =>
      applicants.filter((a) => {
        const matchesSearch =
          a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.id.toLowerCase().includes(search.toLowerCase()) ||
          (a.parent && a.parent.toLowerCase().includes(search.toLowerCase())) ||
          (a.father?.name && a.father.name.toLowerCase().includes(search.toLowerCase())) ||
          (a.mother?.name && a.mother.name.toLowerCase().includes(search.toLowerCase()));
        const matchesStatus =
          filterStatus === 'Semua status' || a.status === filterStatus;
        const matchesGender =
          filterGender === 'Semua' || a.gender === filterGender;
        return matchesSearch && matchesStatus && matchesGender;
      }),
    [applicants, search, filterStatus, filterGender]
  );

  // Statistics
  const stats = useMemo(
    () => ({
      total: applicants.length,
      menunggu: applicants.filter((a) => a.status === 'Menunggu verifikasi').length,
      diterima: applicants.filter((a) => a.status === 'Diterima').length,
      perbaikan: applicants.filter((a) => a.status === 'Perlu perbaikan').length,
      ditolak: applicants.filter((a) => a.status === 'Ditolak').length,
      lakiLaki: applicants.filter((a) => a.gender === 'Laki-laki').length,
      perempuan: applicants.filter((a) => a.gender === 'Perempuan').length,
    }),
    [applicants]
  );

  // Actions
  function updateFormField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function startRegistration(keepParentData = true) {
    if (!currentUser) {
      setAuthMode('register');
      setRole('login');
      setNotice('Silakan buat akun orang tua/wali atau masuk terlebih dahulu untuk memulai pendaftaran murid baru.');
      return;
    }

    if (currentUser.role === 'admin') {
      setRole('admin');
      setAdminPage('Data Pendaftar');
      setNotice('Anda berada pada akun Admin. Kelola pendaftaran calon murid di modul Data Pendaftar.');
      return;
    }

    // Reset data anak, tapi pertahankan data orang tua jika sudah pernah diisi sebelumnya
    setForm((prev) => {
      // Ambil data orang tua dari anak yang sudah pernah didaftarkan jika ada
      const existingApp = userApplicants[0];
      return {
        ...initialFormState,
        // Data Orang Tua di-preserve/auto-fill
        fatherName: (keepParentData && existingApp?.father?.name) || prev.fatherName || '',
        fatherBirthPlace: (keepParentData && existingApp?.father?.birthPlace) || prev.fatherBirthPlace || '',
        fatherBirthDate: (keepParentData && existingApp?.father?.birthDate) || prev.fatherBirthDate || '',
        fatherJob: (keepParentData && existingApp?.father?.job) || prev.fatherJob || '',
        fatherEducation: (keepParentData && existingApp?.father?.education) || prev.fatherEducation || 'SMA/SMK',
        fatherAddress: (keepParentData && existingApp?.father?.address) || prev.fatherAddress || '',
        fatherPhone: (keepParentData && existingApp?.father?.phone) || prev.fatherPhone || '',

        motherName: (keepParentData && existingApp?.mother?.name) || prev.motherName || currentUser.name,
        motherBirthPlace: (keepParentData && existingApp?.mother?.birthPlace) || prev.motherBirthPlace || '',
        motherBirthDate: (keepParentData && existingApp?.mother?.birthDate) || prev.motherBirthDate || '',
        motherJob: (keepParentData && existingApp?.mother?.job) || prev.motherJob || '',
        motherEducation: (keepParentData && existingApp?.mother?.education) || prev.motherEducation || 'SMA/SMK',
        motherAddress: (keepParentData && existingApp?.mother?.address) || prev.motherAddress || '',
        motherPhone: (keepParentData && existingApp?.mother?.phone) || prev.motherPhone || currentUser.phone,

        parent: (keepParentData && existingApp?.parent) || prev.parent || currentUser.name,
        phone: (keepParentData && existingApp?.phone) || prev.phone || currentUser.phone,
        email: currentUser.email,
        address: (keepParentData && existingApp?.address) || prev.address || '',
      };
    });

    setFiles({});
    setFormStep(1);
    setRole('apply');
  }

  function submitRegistration() {
    const id = generateId(applicants.length);
    const mainParent = form.motherName || form.fatherName || form.parent || 'Orang Tua / Wali';
    const mainPhone = form.motherPhone || form.fatherPhone || form.phone || '—';
    const mainAddress = form.motherAddress || form.fatherAddress || form.address || 'Kota Bogor';

    const newApplicant = {
      id,
      userId: currentUser?.id || null,
      name: form.name,
      nickname: form.nickname || form.name.split(' ')[0],
      birthPlace: form.birthPlace || 'Bogor',
      birthDate: form.birthDate,
      birth: `${form.birthPlace ? form.birthPlace + ', ' : ''}${form.birthDate}`,
      gender: form.gender,
      childOrder: form.childOrder || '1',
      totalSiblings: form.totalSiblings || '1',
      height: form.height,
      weight: form.weight,
      hobby: form.hobby || '—',
      medicalHistory: form.medicalHistory || 'Tidak ada',
      father: {
        name: form.fatherName || '—',
        birthPlace: form.fatherBirthPlace || '—',
        birthDate: form.fatherBirthDate || '—',
        job: form.fatherJob || '—',
        education: form.fatherEducation || '—',
        address: form.fatherAddress || mainAddress,
        phone: form.fatherPhone || '—',
      },
      mother: {
        name: form.motherName || '—',
        birthPlace: form.motherBirthPlace || '—',
        birthDate: form.motherBirthDate || '—',
        job: form.motherJob || '—',
        education: form.motherEducation || '—',
        address: form.motherAddress || mainAddress,
        phone: form.motherPhone || '—',
      },
      parent: mainParent,
      phone: mainPhone,
      email: form.email || (currentUser ? currentUser.email : ''),
      address: mainAddress,
      date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Menunggu verifikasi',
      docs: Object.keys(files).length >= 2 ? 'Lengkap' : 'Belum lengkap',
      age: '4 tahun',
      schoolYear: form.schoolYear || '2027/2028',
      verificationNote:
        'Formulir pendaftaran murid baru telah diterima dan masuk ke antrean verifikasi berkas.',
      files: { ...files },
    };

    setApplicants((prev) => [newApplicant, ...prev]);
    setCreatedApplicant(newApplicant);

    // If user is logged in, link this applicant to their account's applicantIds array
    if (currentUser && currentUser.role === 'user') {
      const currentIds = currentUser.applicantIds || (currentUser.applicantId ? [currentUser.applicantId] : []);
      const updatedIds = [...currentIds, id];
      setCurrentUser((prev) => ({
        ...prev,
        applicantId: id,
        applicantIds: updatedIds,
      }));
      setUsers((prev) =>
        prev.map((u) =>
          u.id === currentUser.id
            ? { ...u, applicantId: id, applicantIds: updatedIds }
            : u
        )
      );
    }

    setRole('receipt');
    setNotice('Formulir pendaftaran murid baru SPS Qurrota A\'yun berhasil dikirim.');
  }

  function resetForm() {
    setFormStep(1);
    setForm(initialFormState);
    setFiles({});
  }

  function updateApplicantStatus(id, newStatus) {
    setApplicants((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    setNotice(`Status ${id} diperbarui menjadi ${newStatus}.`);
  }

  function updateVerification(id, newStatus, verificationNote, docsStatus) {
    setApplicants((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              status: newStatus,
              verificationNote: verificationNote || a.verificationNote,
              docs: docsStatus || a.docs,
            }
          : a
      )
    );
    setNotice(`Verifikasi ${id} berhasil disimpan (${newStatus}).`);
  }

  function deleteApplicant(id) {
    setApplicants((prev) => prev.filter((a) => a.id !== id));
    if (selectedApplicantId === id) {
      setSelectedApplicantId(applicants[0]?.id || '');
    }
    setNotice(`Data pendaftar ${id} telah dihapus.`);
  }

  function navigateAdmin(page) {
    setAdminPage(page);
    setRole('admin');
    setMobileMenuOpen(false);
  }

  function updateProfile(updatedData) {
    if (!currentUser) return;
    setCurrentUser((prev) => ({ ...prev, ...updatedData }));
    setUsers((prev) =>
      prev.map((u) => (u.id === currentUser.id ? { ...u, ...updatedData } : u))
    );
    // Jika ada formulir pendaftar yang terkait dengan user ini, perbarui nama/kontaknya
    setApplicants((prev) =>
      prev.map((a) => {
        if (
          a.id === currentUser.applicantId ||
          (currentUser.email && a.email && a.email.toLowerCase() === currentUser.email.toLowerCase())
        ) {
          return {
            ...a,
            parent: updatedData.name || a.parent,
            phone: updatedData.phone || a.phone,
            email: updatedData.email || a.email,
          };
        }
        return a;
      })
    );
    setNotice('Profil berhasil diperbarui!');
  }

  function handleForgotPassword(e) {
    e.preventDefault();
    if (!forgotEmail) {
      setNotice('Silakan masukkan alamat email akun Anda.');
      return;
    }
    const user = users.find(
      (u) => u.email.toLowerCase() === forgotEmail.trim().toLowerCase()
    );
    if (!user) {
      setNotice('Email tidak ditemukan dalam sistem.');
      return;
    }
    if (!forgotNewPass || forgotNewPass.length < 6) {
      setNotice('Kata sandi baru minimal 6 karakter.');
      return;
    }
    if (forgotNewPass !== forgotConfirmPass) {
      setNotice('Konfirmasi kata sandi baru tidak cocok.');
      return;
    }

    setUsers((prev) =>
      prev.map((u) =>
        u.email.toLowerCase() === forgotEmail.trim().toLowerCase()
          ? { ...u, password: forgotNewPass }
          : u
      )
    );
    setNotice('Kata sandi berhasil diperbarui! Silakan masuk dengan kata sandi baru.');
    setAuthMode('login');
    setLoginEmail(forgotEmail);
    setLoginPass('');
    setForgotEmail('');
    setForgotNewPass('');
    setForgotConfirmPass('');
  }

  function handleAuthSubmit(e) {
    e.preventDefault();
    if (authMode === 'login') {
      if (
        loginEmail === 'admin@qurrotayun.sch.id' &&
        loginPass === 'demo123'
      ) {
        const adminUser = users.find((u) => u.role === 'admin') || {
          id: 'u-admin',
          name: 'Administrator PPDB',
          email: 'admin@qurrotayun.sch.id',
          role: 'admin',
        };
        setCurrentUser(adminUser);
        setRole('admin');
        setAdminPage('Dashboard');
        setNotice('Selamat datang di Portal Admin PPDB SPS Qurrota A\'yun.');
        return;
      }

      const matchedUser = users.find(
        (u) =>
          u.email.toLowerCase() === loginEmail.trim().toLowerCase() &&
          u.password === loginPass
      );

      if (matchedUser) {
        setCurrentUser(matchedUser);
        if (matchedUser.role === 'admin') {
          setRole('admin');
          setAdminPage('Dashboard');
        } else {
          setRole('user-dashboard');
        }
        setNotice(`Selamat datang, ${matchedUser.name}!`);
      } else {
        setNotice('Email atau kata sandi tidak sesuai.');
      }
    } else {
      if (!registerForm.name || !registerForm.email || !registerForm.password) {
        setNotice('Mohon isi semua bidang yang wajib diisi.');
        return;
      }
      if (registerForm.password !== registerForm.confirmPassword) {
        setNotice('Konfirmasi kata sandi tidak cocok.');
        return;
      }
      const existing = users.find(
        (u) => u.email.toLowerCase() === registerForm.email.trim().toLowerCase()
      );
      if (existing) {
        setNotice('Email sudah terdaftar. Silakan gunakan email lain atau masuk.');
        return;
      }

      const newUser = {
        id: 'u-' + Date.now(),
        name: registerForm.name,
        email: registerForm.email.trim(),
        password: registerForm.password,
        role: 'user',
        phone: registerForm.phone,
        applicantId: null,
      };

      setUsers((prev) => [...prev, newUser]);
      setCurrentUser(newUser);
      setForm((prev) => ({
        ...prev,
        motherName: newUser.name,
        motherPhone: newUser.phone,
        email: newUser.email,
        parent: newUser.name,
        phone: newUser.phone,
      }));
      setFormStep(1);
      setRole('user-dashboard');
      setNotice('Akun berhasil dibuat! Selamat datang di dashboard orang tua/wali.');
      setRegisterForm({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  }

  function quickLogin(type) {
    if (type === 'admin') {
      const adminUser = users.find((u) => u.role === 'admin') || {
        id: 'u-admin',
        name: 'Administrator PPDB',
        email: 'admin@qurrotayun.sch.id',
        role: 'admin',
      };
      setCurrentUser(adminUser);
      setRole('admin');
      setAdminPage('Dashboard');
      setNotice('Masuk sebagai Admin Demo.');
    } else {
      const demoParent = users.find((u) => u.email === 'dewi.lestari@email.com') || {
        id: 'u-dewi',
        name: 'Dewi Lestari',
        email: 'dewi.lestari@email.com',
        role: 'user',
        phone: '0812-3456-7890',
        applicantId: 'QA-2026-001',
      };
      setCurrentUser(demoParent);
      setRole('user-dashboard');
      setNotice(`Masuk sebagai Wali Murid Demo (${demoParent.name}).`);
    }
  }

  function logout() {
    setCurrentUser(null);
    setRole('home');
    setAdminPage('Dashboard');
    setMobileMenuOpen(false);
    setNotice('Anda telah keluar dari akun.');
  }

  function checkStatus(e) {
    if (e) e.preventDefault();
    const q = statusQuery.trim().toLowerCase();
    const found = applicants.find(
      (a) =>
        a.id.toLowerCase() === q ||
        a.name.toLowerCase().includes(q)
    );
    setStatusResult(found || null);
  }

  function toggleAnnouncementPublish() {
    setAnnouncementSettings((prev) => ({
      ...prev,
      isPublished: !prev.isPublished,
    }));
    setNotice(
      !announcementSettings.isPublished
        ? 'Pengumuman seleksi telah dipublikasikan ke publik.'
        : 'Pengumuman seleksi diset menjadi Draft / Disembunyikan.'
    );
  }

  const value = {
    // Profil Sekolah
    schoolProfile,

    // Routing & Roles
    role, setRole,
    adminPage, setAdminPage,
    mobileMenuOpen, setMobileMenuOpen,
    currentUser, setCurrentUser,
    users, setUsers,

    // Auth
    authMode, setAuthMode,
    authRole, setAuthRole,
    loginEmail, setLoginEmail,
    loginPass, setLoginPass,
    forgotEmail, setForgotEmail,
    forgotNewPass, setForgotNewPass,
    forgotConfirmPass, setForgotConfirmPass,
    registerForm, setRegisterForm,
    handleAuthSubmit,
    handleForgotPassword,
    quickLogin,
    logout,
    updateProfile,

    // Data
    applicants, setApplicants,
    announcement, setAnnouncement,
    announcementSettings, setAnnouncementSettings,
    userApplicant,
    userApplicants,
    filteredApplicants,
    stats,

    // Search/filter
    search, setSearch,
    filterStatus, setFilterStatus,
    filterGender, setFilterGender,

    // Notification
    notice, setNotice,

    // Registration Form
    formStep, setFormStep,
    form, updateFormField,
    files, setFiles,
    createdApplicant,
    startRegistration,
    submitRegistration,
    resetForm,

    // Status & Pengumuman
    statusQuery, setStatusQuery,
    statusResult, setStatusResult,
    pengumumanQuery, setPengumumanQuery,
    checkStatus,
    toggleAnnouncementPublish,

    // Verification & Admin Actions
    selectedApplicantId, setSelectedApplicantId,
    activeModalApplicant, setActiveModalApplicant,
    updateApplicantStatus,
    updateVerification,
    deleteApplicant,
    navigateAdmin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}
