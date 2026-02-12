import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'
import AetheriaLogo from './AetheriaLogo'

const Navbar = () => (
  <motion.nav
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 z-30 w-full px-4 py-4 md:px-10"
  >
    <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <AetheriaLogo className="h-8 w-8" />
        <div>
          <p className="font-heading text-lg tracking-[0.2em]">AETHERIA</p>
        </div>
      </div>
      <button className="rounded-full border border-white/20 p-2 text-cyan transition hover:shadow-glow">
        <Menu size={18} />
      </button>
    </div>
  </motion.nav>
)

export default Navbar
