'use client'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SiIterm2 } from "react-icons/si";
import { SiMultisim } from "react-icons/si";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    if (currentTheme === 'light') {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="flex cursor-pointer p-[.5rem] rounded-[50%] hover:bg-[#E4E6EB]"
        >
          <span>
           <SiIterm2 className="w-5 h-5" />
          </span>
        </button>
      )
    } else {
      return (
        <button
          onClick={() => setTheme('light')}
          className="flex cursor-pointer p-[.5rem] rounded-[50%] hover:bg-[#65676B]"
        >
          <span>
           <SiMultisim className="w-5 h-5" />
          </span>
        </button>
      )
    }
  }
  return (
   <header className="fixed top-0 left-0 w-full z-[99]">
  <nav className="container h-[3.5rem] px-[1rem] flex items-center justify-between rounded lg:mt-2 shadow-[0_1px_2px_rgba(0,0,0,0.2)] bg-white dark:bg-[#18191A]">
    <Link
      href="/"
      className="text-[#050505] cursor-pointer dark:text-[#E4E6EB] font-bold flex items-center gap-2"
    >
      <img
        src="https://pub-c1de1cb456e74d6bbbee111ba9e6c757.r2.dev/matrix_navigation.gif"
        alt="Matrix Navigation"
        className="h-6 w-6"
      />
      Emojis. Lots of Emojis.
    </Link>
    {renderThemeChanger()}
  </nav>
</header>

  )
}

export default Navbar
