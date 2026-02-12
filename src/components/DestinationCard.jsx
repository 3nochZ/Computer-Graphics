import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DestinationCard = ({ destination }) => (
  <motion.div
    layoutId={`card-${destination.id}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md transition-colors hover:border-cyan/70 hover:shadow-glow"
  >
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.2em] text-cyan">Destination</p>
      <h3 className="font-heading text-3xl text-white">{destination.name}</h3>
      <p className="text-lg text-white/75">{destination.tagline}</p>
    </div>
    <Link to={`/destinations/${destination.id}`} className="absolute inset-0" aria-label={`View ${destination.name}`} />
    <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex translate-y-10 items-center justify-between rounded-xl border border-cyan/60 bg-cyan/20 px-4 py-3 font-semibold text-cyan opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      Book Now
      <ArrowUpRight size={18} />
    </div>
  </motion.div>
)

export default DestinationCard
