import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Field, Card } from '../ui/SharedComponents';
import { useApp } from '../../context/AppContext';

export default function LoginPage() {
  const {
    setRole,
    loginEmail,
    setLoginEmail,
    loginPass,
    setLoginPass,
    notice,
    setNotice,
    handleLogin,
  } = useApp();

  return (
    <div className="relative z-20 mx-auto max-w-md px-4 py-16">
      <Card className="animate-scale-in p-8">
        <button
          onClick={() => {
            setRole('home');
            setNotice('');
          }}
          className="mb-6 text-sm text-slate-500 transition-colors hover:text-slate-700"
        >
          ← Kembali
        </button>

        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
          <ShieldCheck size={28} />
        </div>

        <h1 className="mt-4 text-center text-2xl font-extrabold">
          Login admin
        </h1>
        <p className="mt-2 text-center text-sm text-slate-500">
          Masuk ke portal pengelolaan PPDB.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <Field
            label="Email admin"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Field
            label="Kata sandi"
            type="password"
            value={loginPass}
            onChange={(e) => setLoginPass(e.target.value)}
          />
          {notice && (
            <p className="animate-fade-in text-sm text-rose-600">{notice}</p>
          )}
          <button className="w-full rounded-xl bg-emerald-800 py-3 font-bold text-white transition-all duration-200 hover:bg-emerald-900">
            Masuk ke dashboard
          </button>
        </form>

        <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-xs text-emerald-900">
          Demo: admin@qurrotayun.sch.id / demo123
        </p>
      </Card>
    </div>
  );
}
