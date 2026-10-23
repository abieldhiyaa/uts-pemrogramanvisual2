import React from 'react';
import { getStatusColor } from '../../data/dummyData';

/* ─── Status badge pil ─── */
export function Badge({ status }) {
  const color = getStatusColor(status);
  return (
    <span
      className={
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ' +
        color
      }
    >
      {status}
    </span>
  );
}

/* ─── Input field dengan label ─── */
export function Field({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  required = true,
  id,
}) {
  const inputId = id || label.replace(/\s/g, '-').toLowerCase();
  return (
    <label htmlFor={inputId} className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required ? ' *' : ''}
      </span>
      <input
        id={inputId}
        required={required}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50 hover:border-slate-300"
      />
    </label>
  );
}

/* ─── Card wrapper ─── */
export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={
        'rounded-2xl border border-emerald-100 bg-white shadow-sm ' + className
      }
      {...props}
    >
      {children}
    </div>
  );
}

/* ─── Notice banner ─── */
export function NoticeBanner({ notice, onClose }) {
  if (!notice) return null;
  return (
    <div className="animate-fade-in-up flex items-center justify-between rounded-xl bg-emerald-100 px-4 py-3 text-sm text-emerald-900">
      <span>{notice}</span>
      <button
        onClick={onClose}
        className="ml-3 rounded-lg p-1 hover:bg-emerald-200"
        aria-label="Tutup notifikasi"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}

/* ─── Empty state ─── */
export function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="grid min-h-60 place-items-center p-8 text-center">
      <div>
        {Icon && <Icon className="mx-auto text-emerald-300" size={42} />}
        <p className="mt-3 font-bold text-slate-700">{title}</p>
        {description && (
          <p className="mt-1 text-sm text-slate-400">{description}</p>
        )}
      </div>
    </div>
  );
}

/* ─── Stat card for dashboard ─── */
export function StatCard({ label, value, sub, icon: Icon, color }) {
  return (
    <Card className="p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-extrabold tracking-tight">
            {value}
          </p>
        </div>
        <div className={'rounded-xl p-3 ' + color}>
          <Icon size={21} />
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-400">{sub}</p>
    </Card>
  );
}
