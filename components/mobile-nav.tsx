"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 text-[#191919] focus:outline-none" aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#f2f2f2]">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-[#cef0e9] flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Logo"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                </div>
              </div>
              <button onClick={toggleMenu} className="p-2 text-[#191919] focus:outline-none" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-6 text-lg">
                <li>
                  <Link href="/" className="block py-2 text-[#191919] hover:text-[#089274]" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="block py-2 text-[#191919] hover:text-[#089274]" onClick={toggleMenu}>
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="block py-2 text-[#191919] hover:text-[#089274]" onClick={toggleMenu}>
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="block py-2 text-[#191919] hover:text-[#089274]" onClick={toggleMenu}>
                    Deals
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Footer Actions */}
            <div className="p-4 border-t border-[#f2f2f2]">
              <div className="flex flex-col gap-3">
                <Link
                  href="#subscribe"
                  className="block w-full py-3 text-center text-[#191919] border border-[#f2f2f2] rounded-md hover:bg-[#f2f2f2]"
                  onClick={toggleMenu}
                >
                  Subscribe
                </Link>
                <Link
                  href="#contact"
                  className="block w-full py-3 text-center bg-[#0bb791] text-white rounded-md hover:bg-[#089274]"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

