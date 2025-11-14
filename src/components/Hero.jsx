import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Find extraordinary stays & curated experiences
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
              Rahii brings together unique homes and handpicked activities designed for modern travelers seeking authentic moments.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white/70 backdrop-blur rounded-2xl p-2 border border-black/5 shadow-sm">
              <div className="px-4 py-3 rounded-xl hover:bg-white transition">
                <p className="text-xs text-gray-500">Where</p>
                <input className="w-full bg-transparent outline-none text-sm" placeholder="Search destination" />
              </div>
              <div className="px-4 py-3 rounded-xl hover:bg-white transition">
                <p className="text-xs text-gray-500">When</p>
                <input className="w-full bg-transparent outline-none text-sm" placeholder="Add dates" />
              </div>
              <div className="px-4 py-3 rounded-xl hover:bg-white transition">
                <p className="text-xs text-gray-500">Guests</p>
                <input className="w-full bg-transparent outline-none text-sm" placeholder="Add guests" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
