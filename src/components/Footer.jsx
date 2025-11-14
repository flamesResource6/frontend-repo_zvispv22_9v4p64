import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-600">
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">About</h4>
            <ul className="space-y-2">
              <li>How Rahii works</li>
              <li>Newsroom</li>
              <li>Investors</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Community</h4>
            <ul className="space-y-2">
              <li>Diversity & belonging</li>
              <li>Accessibility</li>
              <li>Invite friends</li>
              <li>Gift cards</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Hosting</h4>
            <ul className="space-y-2">
              <li>Try hosting</li>
              <li>AirCover for Hosts</li>
              <li>Explore hosting resources</li>
              <li>Visit our community forum</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Safety information</li>
              <li>Cancellation options</li>
              <li>Report neighborhood concern</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Rahii, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
