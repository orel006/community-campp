export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-2 text-sm font-semibold text-sky-700">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-slate-600">{description}</p>}
    </div>
  );
}
