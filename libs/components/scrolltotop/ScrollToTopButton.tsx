'use client'

import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

const ScrollToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll()
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setShowScrollTop(pageYOffset >= 400)
  }, [pageYOffset])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div>
      {showScrollTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 cursor-pointer"
        >
          <img
            src="https://neomoji.vercel.app/tothetop.png"
            alt="Scroll to top"
            className="w-12 h-12"
          />
        </button>
      )}
    </div>
  )
}

export default ScrollToTopButton

