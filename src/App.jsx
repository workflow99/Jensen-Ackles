import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Instagram, Menu, X, ChevronLeft, ChevronRight, MapPin, Music2, ExternalLink, Phone } from 'lucide-react'
import { profile, credits, gallery, music } from './data/content'
import SectionHeading from './components/SectionHeading'

const navItems = [
  ['About', '#about'], ['Career', '#career'], ['Music', '#music'], ['Gallery', '#gallery'], ['Representation', '#representation']
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-xl">
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a href="#home" className="font-display text-xl tracking-wide text-paper">{profile.name}<span className="text-gold">.</span></a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => <a key={label} className="nav-link" href={href}>{label}</a>)}
        </nav>
        <a href="#representation" className="hidden border border-gold/60 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[.2em] text-paper transition hover:bg-gold hover:text-ink md:block">Contact</a>
        <button
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-paper transition hover:border-gold/70 hover:bg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} strokeWidth={1.5} /> : <Menu size={19} strokeWidth={1.5} />}
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="border-t border-white/10 bg-ink/95 px-6 pb-6 pt-5 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden">
        <div className="mx-auto max-w-xl">
          <p className="eyebrow mb-3 text-gold">Explore the portfolio</p>
          <div className="border-t border-white/10">
            {navItems.map(([label, href], index) => (
              <a key={label} onClick={() => setOpen(false)} className="group flex items-center justify-between border-b border-white/10 py-4 text-paper transition hover:px-2 hover:text-gold" href={href}>
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[9px] tracking-widest text-white/35">0{index + 1}</span>
                  <span className="font-display text-xl">{label}</span>
                </span>
                <ArrowUpRight size={15} className="text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </a>
            ))}
          </div>
          <a onClick={() => setOpen(false)} href="#representation" className="mt-5 flex items-center justify-between border border-gold/50 px-5 py-4 text-[9px] font-bold uppercase tracking-[.22em] text-paper transition hover:bg-gold hover:text-ink">
            Press &amp; inquiries <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section relative flex min-h-[720px] items-end overflow-hidden pt-28 md:min-h-[850px]">
      <div className="hero-image absolute inset-0">
        <img src="/images/hero%20image.png" alt="Jensen Ackles" className="h-full w-full object-cover object-[25%_18%] md:object-[50%_18%]" />
      </div>
      <div className="hero-shade absolute inset-0" />
      <div className="container-shell relative z-10 w-full pb-20 md:pb-28">
        <p data-reveal className="eyebrow mb-5 text-gold">Actor · Director · Producer · Musician</p>
        <h1 data-reveal style={{ transitionDelay: '80ms' }} className="max-w-4xl font-display text-6xl leading-[.98] text-paper sm:text-7xl md:text-8xl lg:text-[112px]">{profile.name}<span className="text-gold">.</span></h1>
        <div data-reveal style={{ transitionDelay: '160ms' }} className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-7 text-white/70 md:text-base">A career shaped by compelling characters, bold storytelling and a lasting connection with audiences.</p>
          <a href="#about" className="group flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-paper">Explore portfolio <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink"><ArrowDown size={15} /></span></a>
        </div>
      </div>
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] md:block"><span className="text-[9px] uppercase tracking-[.35em] text-white/50">Selected work &amp; profile</span></div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section-pad bg-paper text-ink">
      <div className="container-shell grid gap-14 md:grid-cols-[.85fr_1.15fr] md:items-center">
        <div data-reveal className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute -bottom-4 -left-4 h-full w-full border border-gold/70" />
          <img src="/images/Jensen%20Ackles%20IA.jpg" alt="Jensen Ackles portrait" className="relative aspect-[4/5] w-full object-cover" />
          <p className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[.22em] text-white/80">Jensen Ackles</p>
        </div>
        <div data-reveal style={{ transitionDelay: '120ms' }} className="md:pl-8">
          <SectionHeading eyebrow="A little about me" title="The person behind the performances" light />
          <p className="text-base leading-8 text-ink/75">{profile.bio}</p>
          <p className="mt-5 text-base leading-8 text-ink/75">{profile.bioTwo}</p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/15 pt-7">
            <div><p className="font-display text-3xl text-ink">20+</p><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-ink/55">Years on screen</p></div>
            <div><p className="font-display text-3xl text-ink">Actor</p><p className="mt-1 text-[9px] uppercase tracking-[.2em] text-ink/55">Director &amp; producer</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Career() {
  return (
    <section id="career" className="section-pad bg-ink">
      <div className="container-shell">
        <SectionHeading eyebrow="Selected credits" title="A career in stories" />
        <div className="grid gap-12 md:grid-cols-[.7fr_1.3fr]">
          <p className="max-w-xs text-sm leading-7 text-muted">A selection of screen credits and projects from across the years. This section can be expanded with additional film, television and directing work.</p>
          <div className="border-t border-white/15">
            {credits.map((credit, index) => (
              <div data-reveal key={credit.title} style={{ transitionDelay: `${index * 70}ms` }} className="credit-row grid gap-2 border-b border-white/15 py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center">
                <span className="text-xs tracking-wide text-gold">{credit.year}</span>
                <div><h3 className="font-display text-2xl text-paper">{credit.title}</h3><p className="mt-1 text-xs text-muted">{credit.role}</p></div>
                <span className="text-[9px] uppercase tracking-[.2em] text-white/40">{credit.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Music() {
  return (
    <section id="music" className="section-pad relative overflow-hidden bg-[#141412]">
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden -translate-y-1/2 text-[220px] leading-none text-white/[.03] md:block">♪</div>
      <div className="container-shell relative">
        <div className="grid gap-14 md:grid-cols-[1.1fr_.9fr] md:items-center">
          <div>
            <div data-reveal>
              <SectionHeading eyebrow="Music" title="Radio Company" />
            </div>
            <p data-reveal style={{ transitionDelay: '80ms' }} className="max-w-xl text-base leading-8 text-muted">{music.bio}</p>
            <p data-reveal style={{ transitionDelay: '140ms' }} className="mt-5 max-w-xl text-base leading-8 text-muted">{music.bioTwo}</p>
            <div data-reveal style={{ transitionDelay: '200ms' }} className="mt-9 flex flex-wrap gap-3">
              {music.facts.map((fact) => (
                <div key={fact.label} className="border border-white/12 px-4 py-3">
                  <p className="text-[8px] uppercase tracking-[.2em] text-white/40">{fact.label}</p>
                  <p className="mt-1 font-display text-lg text-paper">{fact.value}</p>
                </div>
              ))}
            </div>
            <a data-reveal style={{ transitionDelay: '260ms' }} href={music.url} target="_blank" rel="noreferrer" className="group mt-9 inline-flex items-center gap-3 border border-gold/60 px-6 py-4 text-[9px] font-bold uppercase tracking-[.2em] text-paper transition hover:bg-gold hover:text-ink">
              <Music2 size={15} /> Visit radiocomusic.com <ExternalLink size={13} className="transition group-hover:translate-x-0.5" />
            </a>
          </div>
          <div data-reveal style={{ transitionDelay: '160ms' }} className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-gold/70" />
            <img src="/images/Jensen%20Ackles%20~🤎.jpg" alt="Jensen Ackles with Radio Company" className="relative aspect-[4/5] w-full object-cover" />
            <div className="absolute bottom-5 left-5">
              <p className="font-display text-2xl text-white">{music.name}</p>
              <p className="mt-1 text-[9px] uppercase tracking-[.22em] text-white/70">{music.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const [active, setActive] = useState(null)
  const move = (step) => setActive((current) => (current + step + gallery.length) % gallery.length)
  useEffect(() => {
    if (active === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') move(1)
      if (e.key === 'ArrowLeft') move(-1)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', handleKey); document.body.style.overflow = '' }
  }, [active])
  return (
    <section id="gallery" className="section-pad bg-[#171715]">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading eyebrow="In pictures" title="Selected moments" />
          <p className="mb-10 max-w-xs text-xs leading-6 text-muted md:mb-14">A visual collection of portraits, appearances and moments from the work. Select an image to view it larger.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((item, index) => (
            <button data-reveal key={item.title} style={{ transitionDelay: `${(index % 3) * 90}ms` }} onClick={() => setActive(index)} className={`gallery-card group relative overflow-hidden text-left ${index === 1 || index === 4 ? 'md:translate-y-8' : ''}`}>
              <img src={item.image} alt={`Jensen Ackles — ${item.title}`} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4"><p className="font-display text-lg text-white">{item.title}</p><p className="mt-1 text-[8px] uppercase tracking-[.2em] text-white/60">{item.category}</p></div>
              <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition group-hover:opacity-100"><ArrowUpRight size={14}/></span>
            </button>
          ))}
        </div>
      </div>
      {active !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-5" onClick={() => setActive(null)}>
        <button aria-label="Close gallery" className="absolute right-6 top-6 text-white" onClick={() => setActive(null)}><X size={26}/></button>
        <button aria-label="Previous image" className="absolute left-3 z-10 rounded-full border border-white/30 p-3 text-white md:left-8" onClick={(e) => { e.stopPropagation(); move(-1) }}><ChevronLeft/></button>
        <div className="max-h-[85vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
          <img src={gallery[active].image} alt={gallery[active].title} className="max-h-[78vh] w-auto max-w-full object-contain"/>
          <p className="mt-4 text-center text-xs uppercase tracking-[.2em] text-white/70">{gallery[active].title} · {gallery[active].category}</p>
        </div>
        <button aria-label="Next image" className="absolute right-3 rounded-full border border-white/30 p-3 text-white md:right-8" onClick={(e) => { e.stopPropagation(); move(1) }}><ChevronRight/></button>
      </div>}
    </section>
  )
}

function Representation() {
  const publicist = profile.publicist
  const portraits = [
    { src: '/images/p1.jpg', alt: 'Publicist portrait one' },
    { src: '/images/p2.jpg', alt: 'Publicist portrait two' },
    { src: '/images/p3.jpg', alt: 'Publicist portrait three' },
  ]
  return (
    <section id="representation" className="section-pad bg-paper text-ink">
      <div className="container-shell">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr]">
          <div data-reveal>
            <SectionHeading eyebrow="Professional representation" title="Press &amp; inquiries" light />
            <p className="max-w-md text-sm leading-7 text-ink/65">For media requests, interview opportunities and professional inquiries, please contact the representative listed here. Jensen is also a musician and recording artist with Radio Company.</p>
            <div className="mt-8 flex items-center gap-3 text-xs text-ink/60"><MapPin size={15} className="text-gold"/> United States</div>
          </div>
          <div data-reveal style={{ transitionDelay: '120ms' }} className="grid gap-6 sm:grid-cols-[1fr] sm:items-start">
            <div className="grid grid-cols-3 gap-3">
              {portraits.map((portrait, index) => (
                <div key={portrait.src} style={{ transitionDelay: `${index * 80}ms` }} data-reveal className="group relative overflow-hidden">
                  <img src={portrait.src} alt={portrait.alt} className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
            <div>
              <p className="eyebrow text-gold">Publicist / Media contact</p>
              <h3 className="mt-3 font-display text-3xl">{publicist.name}</h3>
              <p className="mt-2 text-xs text-ink/55">{publicist.title}</p>
              <div className="mt-7 space-y-4 text-xs">
                <a className="flex items-center gap-3 hover:text-gold" href="tel:+16592429906"><Phone size={15} />+1 (659) 242-9906</a>
                <a className="flex items-center gap-3 hover:text-gold" href={publicist.instagramUrl} target="_blank" rel="noreferrer"><Instagram size={15}/>@{publicist.instagram}</a>
                <a className="flex items-center gap-3 hover:text-gold" href={publicist.tiktokUrl} target="_blank" rel="noreferrer"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v3c-1.3 0-2.5-.4-3.5-1v6.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .7 0 1 .1v3.2a2.5 2.5 0 1 0 1.6 2.3V3h3z"/></svg>@{publicist.tiktok}</a>
              </div>
              <p className="mt-7 border-l-2 border-gold pl-4 text-[10px] leading-5 text-ink/50">{publicist.note}</p>
            </div>
          </div>
        </div>
        <div data-reveal className="mt-20 flex flex-col justify-between gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center">
          <div><p className="font-display text-3xl">Let’s connect<span className="text-gold">.</span></p><p className="mt-2 text-xs text-ink/55">For professional and media inquiries.</p></div>
          <a href={publicist.instagramUrl} target="_blank" rel="noreferrer" className="group flex w-fit items-center gap-3 border border-ink/30 px-6 py-4 text-[9px] font-bold uppercase tracking-[.2em] transition hover:bg-ink hover:text-paper"><Instagram size={15}/> DM on Instagram <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="bg-ink py-8"><div className="container-shell flex flex-col justify-between gap-4 text-[9px] uppercase tracking-[.18em] text-white/40 sm:flex-row sm:items-center"><p>© {new Date().getFullYear()} Jensen Ackles · Portfolio</p><a href="#home" className="flex items-center gap-2 hover:text-gold">Back to top <ArrowUpRight size={12}/></a></div></footer>
}

export default function App() {
  useReveal()
  return <><Header/><main><Hero/><About/><Career/><Music/><Gallery/><Representation/></main><Footer/></>
}
