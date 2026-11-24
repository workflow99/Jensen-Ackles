export default function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className={`eyebrow mb-3 ${light ? 'text-gold' : 'text-gold'}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl leading-tight md:text-5xl ${light ? 'text-ink' : 'text-paper'}`}>{title}</h2>
    </div>
  )
}
