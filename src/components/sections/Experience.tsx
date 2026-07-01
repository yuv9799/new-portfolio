import { motion } from "framer-motion";

const experiences = [
  {
    org: "Full-Stack Developer & AI/ML Contributor",
    role: "Independent Projects & Open Source",
    period: "2025 - Present",
    link: "https://github.com/yuv9799",
    points: [
      "Designed and developed full-stack web applications integrating Generative AI APIs and machine learning pipelines.",
      "Engineered machine learning systems including SVM-based classification models and K-Means clustering algorithms for customer segmentation.",
      "Built clean REST APIs with FastAPI (Python) and Express (Node.js) coupled with TypeScript and React/Next.js client-side applications."
    ]
  },
  {
    org: "Creative Web Engineering",
    role: "Personal Simulation & Tooling Projects",
    period: "2025 - Present",
    points: [
      "Created 'Tab-Pocalypse', a real-time canvas-based physics simulation visualizing browser memory leaks and CPU/RAM metrics.",
      "Developed web utilities including Next.js document printers, interactive generators, and responsive frontend applications.",
      "Implemented smooth, responsive user experiences utilizing Tailwind CSS, Framer Motion, and modern UI architectures."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-accent/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">What I&apos;m Working On</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, idx) => (
            <motion.div
              key={experience.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative border-l-2 border-border pl-6"
            >
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-foreground" />
              <h3 className="text-lg font-semibold text-foreground">{experience.org}</h3>
              <p className="mb-1 text-sm text-muted-foreground">{experience.role}</p>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground/80">{experience.period}</p>
              {experience.link && (
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="mb-3 inline-block text-sm text-foreground underline underline-offset-4">
                  View GitHub
                </a>
              )}
              <ul className="space-y-1.5">
                {experience.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
