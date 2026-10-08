
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  Smartphone,
  Globe,
  Braces,
  FileCode2,
  Palette,
  Network,
  GitBranch,
  Leaf,
  Menu,
  X,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react'

/* =========================================================
   LINKS
========================================================= */

const LINKS = {
  mail: 'mailto:ksasibca@gmail.com',
  tel: 'tel:+918667866864',
  map: 'https://www.google.com/maps/place/Tiruppur,+Tamil+Nadu',
  in: 'https://www.linkedin.com/in/sasi-dharan-045098280/?skipRedirect=true',
  gh: 'https://github.com/Dharanofficial',
}

const NAV = [
  ['Home', 'home'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Project', 'project'],
  ['Contact', 'contact'],
]

/* =========================================================
   SKILLS
========================================================= */

const SKILLS = [
  [
    'Frontend',
    Code2,
    [
      ['React.js', Braces, 'Component-driven, performant UIs'],
      ['JavaScript', FileCode2, 'Modern ES6+ application logic'],
      ['HTML5', Globe, 'Semantic, accessible markup'],
      ['CSS3', Palette, 'Grid, Flexbox, animations and 3D transforms'],
    ],
  ],
  [
    'Backend',
    Server,
    [
      ['Node.js', Server, 'Scalable server-side runtime'],
      ['Express.js', Layers, 'Routing and middleware'],
      ['REST API', Network, 'Clean and structured endpoints'],
    ],
  ],
  [
    'Database',
    Database,
    [
      ['MySQL', Database, 'Relational schemas and queries'],
      ['MongoDB', Leaf, 'Flexible document storage'],
    ],
  ],
  [
    'Tools',
    Wrench,
    [
      ['Git', GitBranch, 'Branching and version control'],
      ['GitHub', Github, 'Collaboration and code review'],
    ],
  ],
]

/* =========================================================
   EXPERIENCE
========================================================= */

const EXPERIENCE = [
  {
    company: 'LAXISIN VENTURE',
    role: 'Software Developer / Frontend Developer',
    time: '2.5+ Years',
    tech: ['React.js', 'JavaScript', 'Node.js', 'MySQL'],
    points: [
      'Built and delivered responsive web applications for business requirements.',
      'Developed reusable React components and responsive interfaces.',
      'Integrated REST APIs with frontend applications and backend services.',
      'Worked with MySQL databases, CRUD operations and application workflows.',
      'Debugged UI, responsiveness, browser compatibility and performance issues.',
    ],
  },
]

/* =========================================================
   PROJECTS
========================================================= */

const PROJECTS = [
  {
    name: 'PhotoStudio',
    url: 'https://photostudio-brown.vercel.app/',
    image: '/projects/photostudio.png',
    tech: ['React', 'Node.js', 'MySQL', 'REST API'],
    desc: 'Photography studio platform with portfolio galleries, services, packages, enquiries and booking workflows.',
    hue: 265,
  },
  {
    name: 'KVR Ceramics',
    url: 'https://kvr-six.vercel.app/',
    image: '/projects/kvr-ceramics.png',
    tech: ['React', 'React Native', 'Node.js', 'MySQL'],
    desc: 'Ceramics business platform with product catalogue, stock management, pricing and billing workflows.',
    hue: 215,
  },
  {
    name: 'Holden Restaurant ',
    url: 'https://holden-eta.vercel.app/',
    image: '/projects/holden.png',
    tech: ['React', 'Node.js', 'MySQL'],
    desc: 'Restaurant and resort website featuring menus, room details, hospitality information and reservation enquiries.',
    hue: 190,
  },
  {
    name: 'SS Travel',
    url: 'https://ss-travel-teal.vercel.app/',
    image: '/projects/ss-travel.png',
    tech: ['React', 'Three.js', 'Node.js', 'MongoDB'],
    desc: 'Travel booking experience with interactive 3D visuals, travel packages and MongoDB-backed trip data.',
    hue: 285,
  },
]

/* =========================================================
   SERVICES
========================================================= */

const SERVICES = [
  [
    'Frontend Development',
    Code2,
    'Fast, accessible and responsive React interfaces.',
  ],
  [
    'Backend Development',
    Server,
    'Secure Node.js and Express services.',
  ],
  [
    'Full Stack Development',
    Layers,
    'End-to-end products from database to UI.',
  ],
  [
    'REST API Development',
    Network,
    'Well-structured and maintainable APIs.',
  ],
  [
    'Responsive Web Design',
    Smartphone,
    'Interfaces designed for every screen.',
  ],
  [
    'Database Integration',
    Database,
    'MySQL and MongoDB integration with clean data models.',
  ],
]

/* =========================================================
   MOTION SETTINGS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const viewport = {
  once: true,
  amount: 0.15,
}

/* =========================================================
   3D TILT
========================================================= */

function Tilt({
  children,
  className = '',
  max = 10,
}) {
  const ref = useRef(null)

  const move = (e) => {
    const el = ref.current

    if (!el) return

    const r = el.getBoundingClientRect()

    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5

    el.style.transform = `
      perspective(1100px)
      rotateX(${(-y * max).toFixed(2)}deg)
      rotateY(${(x * max).toFixed(2)}deg)
      translateY(-4px)
      scale3d(1.015,1.015,1.015)
    `

    el.style.setProperty(
      '--mx',
      `${(x + 0.5) * 100}%`
    )

    el.style.setProperty(
      '--my',
      `${(y + 0.5) * 100}%`
    )
  }

  const leave = () => {
    if (!ref.current) return

    ref.current.style.transform = ''

    ref.current.style.setProperty('--mx', '50%')
    ref.current.style.setProperty('--my', '50%')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={move}
      onMouseLeave={leave}
    >
      {children}
    </div>
  )
}

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

/* =========================================================
   HEADING
========================================================= */

function Heading({
  title,
  sub,
}) {
  return (
    <div className="heading">
      <span className="section-kicker">
        <Sparkles size={14} />
        Explore
      </span>

      <h2>{title}</h2>

      <p>{sub}</p>
    </div>
  )
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -50% 0px',
      }
    )

    NAV.forEach(([, id]) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    window.addEventListener('scroll', onScroll)

    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`nav ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <a
        href="#home"
        className="logo"
        onClick={() => setOpen(false)}
      >
        <span>SD</span>

        <strong>Sasi Dharan</strong>
      </a>

      <nav className={open ? 'open' : ''}>
        {NAV.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={
              active === id ? 'active' : ''
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="btn primary sm cta"
      >
        Hire me
        <ArrowUpRight size={15} />
      </a>

      <button
        className="burger"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <X size={23} />
        ) : (
          <Menu size={23} />
        )}
      </button>
    </header>
  )
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  const stage = useRef(null)

  const onMove = (e) => {
    const element = stage.current

    if (!element) return

    const r = element.getBoundingClientRect()

    const x =
      (e.clientX - r.left) / r.width - 0.5

    const y =
      (e.clientY - r.top) / r.height - 0.5

    element.style.setProperty(
      '--ry',
      `${x * 18}deg`
    )

    element.style.setProperty(
      '--rx',
      `${-y * 18}deg`
    )
  }

  const reset = () => {
    if (!stage.current) return

    stage.current.style.setProperty(
      '--rx',
      '0deg'
    )

    stage.current.style.setProperty(
      '--ry',
      '0deg'
    )
  }

  return (
    <section
      id="home"
      className="hero"
    >
      <div className="hero-grid-bg" />

      <div className="orb o1" />
      <div className="orb o2" />

      <div className="container hero-grid">

        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <span className="badge">
            <i />
            Available for new projects
          </span>

          <div className="hero-label">
            FULL STACK DEVELOPER
          </div>

          <h1>
            Building digital
            <span> experiences </span>
            that feel alive.
          </h1>

          <p className="lead">
            I'm Sasi Dharan, a full stack developer
            from Tiruppur. I build fast, responsive
            and database-driven applications using
            React, Node.js and modern web technologies.
          </p>

          <div className="row">
            <a
              href="#project"
              className="btn primary"
            >
              View projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn ghost"
            >
              Contact me
            </a>
          </div>

          <div className="socials">
            <a
              href={LINKS.gh}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href={LINKS.in}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

            <a
              href={LINKS.mail}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="stage"
          ref={stage}
          onMouseMove={onMove}
          onMouseLeave={reset}
          initial={{
            opacity: 0,
            scale: 0.88,
            rotateY: -12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="scene">

            <div className="energy energy-one" />
            <div className="energy energy-two" />

            <div className="ring r1" />
            <div className="ring r2" />

            <div className="shape cube s1">
              <b />
              <b />
              <b />
              <b />
              <b />
              <b />
            </div>

            <div className="shape s2" />
            <div className="shape s3" />

            <div className="portrait">
              <img
                src="/dharan.jpeg"
                alt="Sasi Dharan"
              />

              <div className="portrait-overlay">
                <span>DEVELOPER</span>
              </div>
            </div>

            <div className="chip c1">
              <Code2 size={16} />
              React.js
            </div>

            <div className="chip c2">
              <Server size={16} />
              Node.js
            </div>

            <div className="chip c3">
              <Database size={16} />
              MySQL
            </div>

          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <span />
        Scroll to explore
      </div>
    </section>
  )
}

/* =========================================================
   ABOUT
========================================================= */

function About() {
  const stats = [
    ['2.5+', 'Years experience'],
    ['15+', 'Projects delivered'],
    ['Full Stack', 'Development'],
    ['100%', 'Responsive focus'],
  ]

  return (
    <section
      className="section"
      id="about"
    >
      <div className="container">

        <Reveal>
          <Tilt
            max={4}
            className="glass about"
          >
            <div>
              <span className="section-kicker">
                <Sparkles size={14} />
                About me
              </span>

              <h2>
                Full stack developer focused on
                clean, reliable products.
              </h2>

              <p>
                I turn business ideas into
                production-ready web applications.
                From React interfaces to Node.js
                APIs and MySQL or MongoDB databases,
                I work across the stack with a focus
                on performance, accessibility and
                maintainable code.
              </p>

              <div className="about-points">
                <span>
                  <CheckCircle2 size={16} />
                  Responsive development
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  REST API integration
                </span>

                <span>
                  <CheckCircle2 size={16} />
                  Database-driven applications
                </span>
              </div>
            </div>

            <div className="stats">
              {stats.map(([number, label]) => (
                <div
                  key={label}
                  className="stat"
                >
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </Reveal>

      </div>
    </section>
  )
}

/* =========================================================
   SKILLS
========================================================= */

function Skills() {
  return (
    <section
      className="section"
      id="skills"
    >
      <div className="container">

        <Heading
          title="Skills"
          sub="The technologies I use to design, build and ship."
        />

        {SKILLS.map(
          ([category, CategoryIcon, items]) => (
            <div
              key={category}
              className="cat"
            >
              <h3>
                <CategoryIcon size={18} />
                {category}
              </h3>

              <div className="grid g4">
                {items.map(
                  ([name, Icon, description], i) => (
                    <Reveal
                      key={name}
                      delay={i * 0.05}
                    >
                      <Tilt
                        className="glass card skill-card"
                        max={8}
                      >
                        <div className="ico">
                          <Icon size={22} />
                        </div>

                        <h4>{name}</h4>

                        <p>
                          {description}
                        </p>

                        <span className="card-arrow">
                          <ChevronRight size={15} />
                        </span>
                      </Tilt>
                    </Reveal>
                  )
                )}
              </div>
            </div>
          )
        )}

      </div>
    </section>
  )
}

/* =========================================================
   EXPERIENCE
========================================================= */

function Experience() {
  return (
    <section
      className="section"
      id="experience"
    >
      <div className="container">

        <Heading
          title="Experience"
          sub="Building practical products and real-world applications."
        />

        <div className="timeline">
          {EXPERIENCE.map((item, index) => (
            <Reveal
              key={`${item.company}-${index}`}
              delay={index * 0.1}
            >
              <div className="t-item">

                <span className="dot" />

                <Tilt
                  max={4}
                  className="glass card experience-card"
                >
                  <div className="t-head">
                    <div>
                      <span className="experience-number">
                        0{index + 1}
                      </span>

                      <h4>
                        {item.role}
                      </h4>
                    </div>

                    <span className="muted">
                      {item.time}
                    </span>
                  </div>

                  <div className="company">
                    {item.company}
                  </div>

                  <ul>
                    {item.points.map(
                      (point) => (
                        <li key={point}>
                          {point}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="tags">
                    {item.tech.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </Tilt>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

/* =========================================================
   PROJECT IMAGE
========================================================= */

function ProjectImage({ project }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className="shot-inner project-fallback"
        style={{
          '--project-hue': project.hue,
        }}
      >
        <div>
          <Sparkles size={28} />
          <span>
            {project.name}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className="shot-inner">
      <img
        src={project.image}
        alt={`${project.name} project preview`}
        onError={() => setError(true)}
      />

      <div className="shot-overlay">
        <span>VIEW PROJECT</span>
        <ArrowUpRight size={18} />
      </div>
    </div>
  )
}

/* =========================================================
   PROJECTS
========================================================= */

function Projects() {
  return (
    <section
      className="section"
      id="project"
    >
      <div className="container">

        <Heading
          title="Selected Projects"
          sub="Live products and applications built with modern technologies."
        />

        <div className="grid g2 project-grid">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.name}
              delay={(index % 2) * 0.08}
            >
              <Tilt
                className="gborder"
                max={6}
              >
                <article className="glass proj">

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shot"
                    style={{
                      '--h': project.hue,
                    }}
                    aria-label={`Open ${project.name}`}
                  >
                    <ProjectImage
                      project={project}
                    />

                    <span className="project-index">
                      0{index + 1}
                    </span>
                  </a>

                  <div className="body">

                    <div className="project-title-row">
                      <div>
                        <span className="project-type">
                          FULL STACK PROJECT
                        </span>

                        <h3>
                          {project.name}
                        </h3>
                      </div>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon"
                        aria-label={`Open ${project.name}`}
                      >
                        <ArrowUpRight size={19} />
                      </a>
                    </div>

                    <p>
                      {project.desc}
                    </p>

                    <div className="tags">
                      {project.tech.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    <div className="row project-actions">
                      <a
                        className="btn primary sm"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live project
                        <ExternalLink size={15} />
                      </a>

                      <a
                        className="btn ghost sm"
                        href={LINKS.gh}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    </div>

                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

/* =========================================================
   SERVICES
========================================================= */

function Services() {
  return (
    <section
      className="section"
      id="services"
    >
      <div className="container">

        <Heading
          title="What I Build"
          sub="Practical digital solutions for businesses and products."
        />

        <div className="grid g3">
          {SERVICES.map(
            ([title, Icon, description], index) => (
              <Reveal
                key={title}
                delay={(index % 3) * 0.06}
              >
                <Tilt
                  className="glass card service-card"
                  max={7}
                >
                  <div className="service-top">
                    <div className="ico">
                      <Icon size={22} />
                    </div>

                    <span>
                      0{index + 1}
                    </span>
                  </div>

                  <h4>{title}</h4>

                  <p>
                    {description}
                  </p>

                  <div className="service-line" />
                </Tilt>
              </Reveal>
            )
          )}
        </div>

      </div>
    </section>
  )
}

/* =========================================================
   CONTACT
========================================================= */

function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()

    const form = new FormData(e.target)

    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')

    const body = encodeURIComponent(
      `${message}\n\nFrom: ${name} (${email})`
    )

    window.location.href =
      `${LINKS.mail}?subject=${encodeURIComponent(
        'Portfolio enquiry'
      )}&body=${body}`

    setSent(true)
  }

  return (
    <section
      className="section contact-section"
      id="contact"
    >
      <div className="container contact">

        <Reveal>
          <div className="contact-copy">

            <span className="section-kicker">
              <Sparkles size={14} />
              Get in touch
            </span>

            <h2>
              Let's build something
              <span> remarkable.</span>
            </h2>

            <p className="lead">
              Have a project, website or application
              idea? Send me a message and let's discuss
              how we can turn it into a working product.
            </p>

            <ul className="clist">

              <li>
                <Mail size={18} />
                <a href={LINKS.mail}>
                  ksasibca@gmail.com
                </a>
              </li>

              <li>
                <Phone size={18} />
                <a href={LINKS.tel}>
                  +91 86678 66864
                </a>
              </li>

              <li>
                <MapPin size={18} />
                <a
                  href={LINKS.map}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tiruppur, Tamil Nadu
                </a>
              </li>

            </ul>

            <div className="socials">

              <a
                href={LINKS.gh}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>

              <a
                href={LINKS.in}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

            </div>

          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="glass form"
            onSubmit={submit}
          >
            <div className="form-heading">
              <span>
                START A PROJECT
              </span>

              <h3>
                Tell me about your idea.
              </h3>
            </div>

            <label>
              Name

              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
              />
            </label>

            <label>
              Email

              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>

            <label>
              Message

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Tell me about your project..."
              />
            </label>

            <button
              className="btn primary"
              type="submit"
            >
              {sent
                ? 'Opening your email app…'
                : 'Send message'}

              <ArrowUpRight size={18} />
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  )
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer">

      <div>
        <strong>
          SASI DHARAN
        </strong>

        <span>
          Full Stack Developer
        </span>
      </div>

      <p>
        © {new Date().getFullYear()}
        {' '}
        Sasi Dharan. Built with React.
      </p>

      <a href="#home">
        Back to top
        <ArrowUpRight size={15} />
      </a>

    </footer>
  )
}

/* =========================================================
   APP
========================================================= */

export default function App() {
  return (
    <div className="app-shell">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}
