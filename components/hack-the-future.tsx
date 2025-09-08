"use client"

import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function HackTheFuture() {
  const { theme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative z-20"
    >
      <div className="flex flex-col items-center lg:items-start space-y-4">
        <div className="relative w-full max-w-md lg:max-w-lg">
          <motion.div
            className="relative w-full h-32 lg:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-500/20 border border-green-500/20 shadow-2xl"
            animate={{
              rotate: [0, 2, -2, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.2), rgba(20,184,166,0.3))'
                : 'linear-gradient(135deg, rgba(34,197,94,0.4), rgba(16,185,129,0.3), rgba(20,184,166,0.4))',
              boxShadow: theme === 'dark'
                ? '0 25px 50px -12px rgba(34,197,94,0.4), 0 0 0 1px rgba(34,197,94,0.2)'
                : '0 25px 50px -12px rgba(34,197,94,0.3), 0 0 0 1px rgba(34,197,94,0.1)'
            }}
          >
            {/* Animated particles background */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full opacity-30 ${
                    theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                  }`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            {/* Main text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-black text-center leading-tight tracking-wider ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.5)]'
                    : 'bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  y: [0, -2, 0],
                  textShadow: [
                    '0 0 20px rgba(34,197,94,0.5)',
                    '0 0 30px rgba(34,197,94,0.7)',
                    '0 0 20px rgba(34,197,94,0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                HACK THE FUTURE
              </motion.h2>
            </div>
            
            {/* Glowing border effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(34,197,94,0.3), transparent)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
        <motion.p
          className="text-muted-foreground text-center lg:text-left max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Innovate. Code. Transform.
        </motion.p>
      </div>
    </motion.div>
  )
}