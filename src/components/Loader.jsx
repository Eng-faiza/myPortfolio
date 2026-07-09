import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          <motion.div
            className="font-display text-5xl font-bold text-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.span
              className="text-gradient"
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: '0.05em', opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              FM
            </motion.span>
          </motion.div>
          <motion.div
            className="mt-6 h-[2px] w-40 overflow-hidden rounded-full bg-ink/10"
          >
            <motion.div
              className="h-full bg-accent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
          <motion.p
            className="mt-4 text-xs tracking-[0.3em] uppercase text-ink/40 font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Crafting the experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
