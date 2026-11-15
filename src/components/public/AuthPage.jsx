import React from 'react';
import { ShieldCheck, ArrowRight, UserPlus, LogIn, Sparkles, KeyRound } from 'lucide-react';
import { Field, Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function AuthPage() {
  const {
    setRole,
    authMode,
    setAuthMode,
    loginEmail,
    setLoginEmail,
    loginPass,
    setLoginPass,
    forgotEmail,
    setForgotEmail,
    forgotNewPass,
    setForgotNewPass,
    forgotConfirmPass,
    setForgotConfirmPass,
    registerForm,
    setRegisterForm,
    handleAuthSubmit,
    handleForgotPassword,
    quickLogin,
    notice,
    setNotice,
  } = useApp();

  return (
    <div className="relative z-20 mx-auto max-w-lg px-4 py-12 md:py-16">
      <Card className="p-6 md:p-8">
        {/* Back button */}
        <button
          onClick={() => {
            setRole('home');
            setNotice('');
          }}
          className="mb-6 flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-emerald-800"
        >
          ← Kembali ke Beranda
        </button>

        {/* Brand header */}
        <div className="text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-emerald-100 bg-white p-2 shadow-sm">
            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
          </div>
          <h1 className="mt-4 text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            {authMode === 'login'
              ? 'Masuk ke Akun PPDB'
              : authMode === 'register'
              ? 'Daftar Akun Orang Tua / Wali'
              : 'Atur Ulang Kata Sandi'}
          </h1>
          <p className="mt-1 text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
            {authMode === 'login'
              ? 'Masuk untuk mengelola pendaftaran, memantau verifikasi, dan hasil seleksi.'
              : authMode === 'register'
              ? 'Daftarkan akun orang tua/wali untuk mengakses formulir pendaftaran dan dasbor PPDB.'
              : 'Masukkan email Anda yang terdaftar dan tentukan kata sandi baru.'}
          </p>
        </div>

        {/* Tab switch (only between login & register) */}
        {authMode !== 'forgot' ? (
          <div className="mt-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => {
                setAuthMode('login');
                setNotice('');
              }}
              className={
                'flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-extrabold transition-all ' +
                (authMode === 'login'
                  ? 'bg-white text-emerald-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900')
              }
            >
              <LogIn size={14} /> Masuk (Login)
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthMode('register');
                setNotice('');
              }}
              className={
                'flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-extrabold transition-all ' +
                (authMode === 'register'
                  ? 'bg-white text-emerald-950 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900')
              }
            >
              <UserPlus size={14} /> Buat Akun Baru
            </button>
          </div>
        ) : (
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => {
                setAuthMode('login');
                setNotice('');
              }}
              className="text-xs font-bold text-emerald-700 hover:underline"
            >
              ← Kembali ke menu Masuk
            </button>
          </div>
        )}

        {/* Notice feedback */}
        {notice && (
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs font-medium text-amber-900">
            {notice}
          </div>
        )}

        {/* Form Body */}
        {authMode === 'forgot' ? (
          <form onSubmit={handleForgotPassword} className="mt-5 space-y-4">
            <Field
              label="Alamat Email Terdaftar *"
              type="email"
              placeholder="nama@email.com"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
            <Field
              label="Kata Sandi Baru *"
              type="password"
              placeholder="Minimal 6 karakter"
              value={forgotNewPass}
              onChange={(e) => setForgotNewPass(e.target.value)}
            />
            <Field
              label="Konfirmasi Kata Sandi Baru *"
              type="password"
              placeholder="Ulangi kata sandi baru"
              value={forgotConfirmPass}
              onChange={(e) => setForgotConfirmPass(e.target.value)}
            />

            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-900"
            >
              <KeyRound size={15} /> Simpan Kata Sandi Baru
            </button>
          </form>
        ) : (
          <form onSubmit={handleAuthSubmit} className="mt-5 space-y-4">
            {authMode === 'login' ? (
              <>
                <Field
                  label="Alamat Email *"
                  type="email"
                  placeholder="nama@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <div>
                  <Field
                    label="Kata Sandi *"
                    type="password"
                    placeholder="••••••••"
                    value={loginPass}
                    onChange={(e) => setLoginPass(e.target.value)}
                  />
                  <div className="mt-1.5 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setAuthMode('forgot');
                        setForgotEmail(loginEmail);
                        setNotice('');
                      }}
                      className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 hover:underline"
                    >
                      Lupa kata sandi?
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-900"
                >
                  Masuk ke Akun <ArrowRight size={15} />
                </button>

                {/* Demo quick login shortcuts */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <Sparkles size={13} className="text-amber-500" /> Akses Cepat Akun Demo:
                  </p>
                  <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => quickLogin('user')}
                      className="flex flex-col items-start rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-left transition-all hover:bg-emerald-100"
                    >
                      <span className="text-xs font-extrabold text-emerald-900">
                        Wali Murid Demo
                      </span>
                      <span className="text-[11px] text-emerald-700/80">
                        dewi.lestari@email.com
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => quickLogin('admin')}
                      className="flex flex-col items-start rounded-xl border border-slate-200 bg-slate-50 p-3 text-left transition-all hover:bg-slate-100"
                    >
                      <span className="text-xs font-extrabold text-slate-900">
                        Admin Sekolah Demo
                      </span>
                      <span className="text-[11px] text-slate-500">
                        admin@qurrotayun.sch.id
                      </span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Field
                  label="Nama Lengkap Orang Tua / Wali *"
                  placeholder="Contoh: Ibu Dewi Lestari / Bapak Rahmat"
                  value={registerForm.name}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, name: e.target.value })
                  }
                />
                <Field
                  label="Nomor WhatsApp / HP Aktif *"
                  placeholder="081234567890"
                  value={registerForm.phone}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, phone: e.target.value })
                  }
                />
                <Field
                  label="Alamat Email *"
                  type="email"
                  placeholder="nama@email.com"
                  value={registerForm.email}
                  onChange={(e) =>
                    setRegisterForm({ ...registerForm, email: e.target.value })
                  }
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field
                    label="Kata Sandi *"
                    type="password"
                    placeholder="Minimal 6 karakter"
                    value={registerForm.password}
                    onChange={(e) =>
                      setRegisterForm({ ...registerForm, password: e.target.value })
                    }
                  />
                  <Field
                    label="Ulangi Kata Sandi *"
                    type="password"
                    placeholder="Ketik ulang sandi"
                    value={registerForm.confirmPassword}
                    onChange={(e) =>
                      setRegisterForm({
                        ...registerForm,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-emerald-900"
                >
                  Buat Akun &amp; Masuk ke Dashboard <ArrowRight size={15} />
                </button>

                <div className="mt-3 rounded-xl bg-slate-50 p-3 text-[11px] text-slate-500 leading-relaxed text-center">
                  Setelah membuat akun, Anda dapat masuk ke Dashboard Orang Tua/Wali dan memulai pendaftaran kapan saja.
                </div>
              </>
            )}
          </form>
        )}
      </Card>
    </div>
  );
}
