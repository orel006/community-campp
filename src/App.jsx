import { useState } from "react";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle";
import FadeInSection from "./components/FadeInSection";
import {
  navItems,
  highlightBadges,
  aboutCards,
  volunteerActivities,
  contact,
} from "./data/siteData";

function App() {
  const [selectedActivity, setSelectedActivity] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-emerald-50/40 to-white text-slate-800">
      <Navbar items={navItems} />

      <main className="mx-auto max-w-7xl space-y-20 px-4 py-8 md:px-6 md:py-12">
        <FadeInSection className="grid items-center gap-10 lg:grid-cols-2" id="home">
          <section className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {highlightBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm ring-1 ring-sky-100"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl">
              พบมิตร จิตอาสา - ทำสื่อการเรียนรู้ให้น้องๆ
            </h1>
            <p className="text-lg text-slate-700">
              เปลี่ยนการเรียนให้เป็นเรื่องสนุก และเติมเต็มรอยยิ้มให้น้องๆ ไปด้วยกัน
            </p>
            <p className="max-w-xl text-slate-600">
              ขอเชิญชวนอาสาสมัครทุกท่านร่วมทำสื่อการเรียนรู้แบบ Work from Home ไม่ว่าจะเป็นวงล้อคำศัพท์ วงล้อคณิต จิ๊กซอว์ สมุดระบายสี และวงล้อจับคู่สี เพื่อส่งมอบให้กับน้องๆ ในโรงเรียนที่ห่างไกล
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#activities"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                สมัครเข้าร่วมกิจกรรม
              </a>
              <a
                href="#activities"
                className="rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                ดูรายละเอียดกิจกรรม
              </a>
            </div>
          </section>

          <div className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-sky-100 h-full">
            <div className="flex flex-col h-full rounded-2xl bg-gradient-to-br from-sky-100 via-white to-emerald-100 p-8 overflow-hidden relative group">
              <p className="text-sm font-semibold text-sky-700 z-10">กิจกรรมที่น่าสนใจ</p>

              <div className="mt-4 flex-1 flex items-center justify-center z-10">
                <img
                  src="/volunteer_illustration.png"
                  alt="Volunteer Illustration"
                  className="w-full max-w-[220px] object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2"
                />
              </div>

              <div className="mt-6 rounded-xl bg-white/70 p-4 text-center text-sm leading-relaxed text-slate-700 shadow-sm backdrop-blur-md ring-1 ring-white/50 z-10">
                <span className="font-semibold text-slate-900">ร่วมสร้างสรรค์สื่อการเรียนรู้</span> <br /> เพื่อเป็นส่วนหนึ่งในการพัฒนาการศึกษาของเด็กไทย
              </div>

              {/* Decorative background elements */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-200/40 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection id="about" className="space-y-8">
          <SectionTitle
            eyebrow="เกี่ยวกับค่าย"
            title="ทำไมถึงต้องเข้าร่วมกับเรา"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {aboutCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-3xl">{card.icon}</p>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection id="activities" className="space-y-8">
          <SectionTitle
            eyebrow="กิจกรรม"
            title="สื่อการเรียนรู้ที่เราจะประดิษฐ์"
            description="กิจกรรม Work from Home ที่ให้คุณสามารถเลือกเวลาทำได้ตามสะดวก พร้อมรับเกียรติบัตรเมื่อทำกิจกรรมเสร็จสมบูรณ์"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {volunteerActivities.map((activity) => (
              <article
                key={activity.title}
                className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{activity.icon}</span>
                  <h3 className="text-sm font-semibold text-slate-900">{activity.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-6 text-slate-600">{activity.description}</p>
                <p className="mt-2 text-xs text-slate-700">
                  <span className="font-semibold text-slate-800">สิ่งที่จะได้ทำ:</span>{" "}
                  {activity.tasks}
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  <span className="font-semibold text-slate-800">ชั่วโมงจิตอาสา:</span>{" "}
                  {activity.hours}
                </p>
                <p className="mt-1 text-xs text-slate-700">
                  <span className="font-semibold text-slate-800">กลุ่มเป้าหมาย:</span>{" "}
                  {activity.target}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sky-50 px-2.5 py-0.5 text-[10px] font-medium text-sky-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedActivity(activity)}
                  className="mt-auto pt-4 w-full rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald-600"
                >
                  สมัครเลย
                </button>
              </article>
            ))}
          </div>
        </FadeInSection>













        <FadeInSection id="contact" className="space-y-8">
          <SectionTitle
            eyebrow="ติดต่อเรา"
          />
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <p>
                  <span className="font-semibold text-slate-900">ชื่อผู้ประสานงาน:</span>{" "}
                  {contact.coordinator}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Facebook:</span>{" "}
                  {contact.facebook}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Line:</span> {contact.line}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">สถานที่:</span> {contact.location}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedActivity({
                    title: "ติดต่อผ่าน Line",
                    modalDescription: "สแกน QR Code ด้านล่างเพื่อติดต่อสอบถามเพิ่มเติม",
                    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Flin.ee%2F60Dp0Rh"
                  })}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition"
                >
                  ติดต่อผ่าน Line
                </button>
                <button
                  onClick={() => setSelectedActivity({
                    title: "สมัครกิจกรรม",
                    modalDescription: "สแกน QR Code ด้านล่างเพื่อสมัครเข้าร่วมกิจกรรม",
                    qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Flin.ee%2F60Dp0Rh"
                  })}
                  className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  สมัครกิจกรรม
                </button>
              </div>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-lg font-semibold text-slate-900">พร้อมร่วมเป็นจิตอาสาแล้วหรือยัง?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                เริ่มจากการสมัครและติดตามประกาศจากผู้จัด
                เพื่อร่วมสร้างสื่อการเรียนรู้ที่ส่งผลต่อเด็กและชุมชนอย่างยั่งยืน
              </p>
              <a
                href="#home"
                className="mt-4 inline-block rounded-full border border-sky-200 bg-sky-50 px-5 py-2 text-sm font-semibold text-sky-700"
              >
                กลับไปด้านบน
              </a>
            </article>
          </div>
        </FadeInSection>
      </main>

      <footer className="mt-10 border-t border-sky-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="font-bold text-slate-900">พบมิตร จิตอาสา (@pobmitvolunteer)</p>
            <p className="text-sm text-slate-600">
              ร่วมเป็นส่วนหนึ่งในการสร้างสรรค์สื่อการเรียนรู้ให้น้องๆ ไปด้วยกัน
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-sky-700">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <p className="border-t border-sky-100 py-4 text-center text-xs text-slate-500">
          Copyright © {new Date().getFullYear()} พบมิตร จิตอาสา
        </p>
      </footer>

      {/* QR Code Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-xl">
            <button
              onClick={() => setSelectedActivity(null)}
              className="absolute right-4 top-4 text-slate-400 transition hover:text-slate-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="mb-4 pr-6 text-lg font-bold text-slate-900">{selectedActivity.title}</h3>
            <p className="mb-6 text-sm text-slate-600">
              {selectedActivity.modalDescription || "สแกน QR Code ด้านล่างเพื่อสมัครเข้าร่วมกิจกรรมนี้"}
            </p>
            <div className="mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
              <img src={selectedActivity.qrCode} alt={`QR Code for ${selectedActivity.title}`} className="h-full w-full object-contain" />
            </div>
            <button
              onClick={() => setSelectedActivity(null)}
              className="w-full rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
