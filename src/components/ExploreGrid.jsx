import React from 'react'
import { MapPin, Calendar, Sparkles } from 'lucide-react'

const cards = [
  {
    title: 'Design-forward stays',
    subtitle: 'Spaces that inspire',
    icon: <Sparkles className="text-rose-500" size={20} />,
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'City escapes',
    subtitle: 'Weekend-ready itineraries',
    icon: <MapPin className="text-blue-500" size={20} />,
    image:
      'https://images.unsplash.com/photo-1504893524553-b8553f3c8ad7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Flexible dates',
    subtitle: 'Find the best moments',
    icon: <Calendar className="text-emerald-500" size={20} />,
    image:
      'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function ExploreGrid() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
            Explore experiences
          </h2>
          <button className="text-sm font-medium text-gray-700 hover:text-black">
            View all
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  {card.icon}
                  <span>{card.subtitle}</span>
                </div>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
