import React from 'react'
import { Menu, Search, User, Globe } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">R</div>
          <span className="text-xl font-semibold tracking-tight text-gray-900">rahii</span>
        </div>

        <div className="hidden md:flex items-center shadow-sm rounded-full border border-gray-200 overflow-hidden">
          <input
            placeholder="Search experiences, cities, interests..."
            className="px-4 py-2 w-80 outline-none text-sm bg-white/80"
          />
          <button className="p-2 bg-gray-900 text-white hover:bg-black transition-colors">
            <Search size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 text-sm font-medium">
            <Globe size={18} />
            <span>EN</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100">
            <Menu size={20} />
            <User size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
