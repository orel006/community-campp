import { useState } from "react";

export default function Navbar({ items }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="text-sm font-bold text-sky-900 sm:text-base">
          ค่ายจิตอาสาสื่อการเรียนรู้
        </a>

        <button
          type="button"
          className="rounded-lg border border-sky-200 p-2 text-sky-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="เปิดเมนู"
          aria-expanded={open}
        >
          ☰
        </button>

        <div className="hidden items-center gap-5 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apply"
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            สมัครเข้าร่วม
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-sky-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#apply"
              className="mt-2 rounded-full bg-sky-600 px-4 py-2 text-center text-sm font-semibold text-white"
              onClick={closeMenu}
            >
              สมัครเข้าร่วม
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
