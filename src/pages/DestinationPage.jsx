import { ArrowLeft, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import { destinationMap } from '../data/destinations'

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const DestinationPage = () => {
  const { id } = useParams()
  const destination = destinationMap[id]

  if (!destination) return <Navigate to="/" replace />

  return (
    <motion.main
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 pb-14 pt-28 md:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-cyan backdrop-blur-md transition hover:border-cyan hover:gap-3">
          <ArrowLeft size={16} /> Back to Orbit
        </Link>

        <motion.div layoutId={`card-${destination.id}`} className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div variants={item} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="flex justify-center">
            <div className={`h-72 w-72 rounded-full bg-gradient-to-br ${destination.color} shadow-planet md:h-96 md:w-96`} />
          </motion.div>

          <motion.div variants={item} initial="hidden" animate="visible" transition={{ delay: 0.15 }} className="space-y-6">
            <h1 className="font-heading text-5xl uppercase leading-tight md:text-6xl">{destination.name}</h1>
            <div className="grid gap-3 text-lg text-white/85">
              <p><span className="text-cyan">Atmosphere:</span> {destination.atmosphere}</p>
              <p><span className="text-cyan">Gravity:</span> {destination.gravity}</p>
              <p><span className="text-cyan">Travel Time:</span> {destination.travelTime}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple/60 bg-purple/20 px-4 py-2 text-sm">
              <Info size={16} /> VIP concierge included in every mission.
            </div>
            <BookingForm />
          </motion.div>
        </motion.div>
      </div>
    </motion.main>
  )
}

export default DestinationPage
