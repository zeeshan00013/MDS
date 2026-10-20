export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-[#110f3e] px-6 py-20 text-white md:py-28">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-violet-400/15 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-200">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-indigo-100">
          {description}
        </p>
      </div>
    </section>
  );
}
