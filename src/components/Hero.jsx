import { motion } from 'framer-motion'

const text = ['Beyond', 'the', 'Horizon.']

const Hero = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 text-center">
    <div className="starfield" />
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="relative z-10"
    >
      {text.map((word) => (
        <motion.h1
          key={word}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
          className="font-heading text-5xl font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_0_25px_rgba(0,240,255,0.6)] md:text-8xl"
        >
          {word}
        </motion.h1>
      ))}
    </motion.div>
  </section>
)

export default Hero
