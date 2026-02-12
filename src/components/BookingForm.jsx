import { useState } from 'react'
import { Check, LoaderCircle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const classes = ['Economy', 'Business', 'Zero-G Suite']

const BookingForm = () => {
  const [selected, setSelected] = useState('Business')
  const [status, setStatus] = useState('idle')

  const handleConfirm = () => {
    if (status !== 'idle') return
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1500)
  }

  return (
    <div className="space-y-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
      <h3 className="font-heading text-xl">Travel Class</h3>
      <div className="relative grid grid-cols-1 gap-2 sm:grid-cols-3">
        {classes.map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className="relative overflow-hidden rounded-xl border border-white/15 px-4 py-3 text-center"
          >
            {selected === item && (
              <motion.span
                layoutId="activeClass"
                transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan/70 to-purple/70"
              />
            )}
            <span className="relative z-10 font-semibold">{item}</span>
          </button>
        ))}
      </div>
      <button
        onClick={handleConfirm}
        className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-cyan to-purple font-heading text-lg tracking-widest text-black transition hover:brightness-110 disabled:cursor-not-allowed"
        disabled={status !== 'idle'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {status === 'idle' && (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              CONFIRM LAUNCH
            </motion.span>
          )}
          {status === 'loading' && (
            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LoaderCircle className="animate-spin" />
            </motion.span>
          )}
          {status === 'success' && (
            <motion.span key="success" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <Check />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}

export default BookingForm
