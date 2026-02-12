import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import DestinationCard from '../components/DestinationCard'
import { destinations } from '../data/destinations'

const HomePage = () => (
  <motion.main
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
  >
    <Hero />
    <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
      <h2 className="mb-6 font-heading text-3xl uppercase tracking-[0.15em] text-white md:text-4xl">Interstellar Destinations</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  </motion.main>
)

export default HomePage
