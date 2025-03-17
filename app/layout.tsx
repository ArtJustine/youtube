import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export const metadata: Metadata = {
  title: "Smart Home Technology",
  description: "Explore the future of smart home technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* Navigation */}
        <nav className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-16">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#cef0e9] flex items-center justify-center">
              <Image
                src="/logo.svg?height=40&width=40"
                alt="Logo"
                width={24}
                height={24}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#191919] hover:text-[#089274]">
              Home
            </Link>
            <Link href="/news" className="text-[#191919] hover:text-[#089274]">
              News
            </Link>
            <Link href="/videos" className="text-[#191919] hover:text-[#089274]">
              Videos
            </Link>
            <Link href="/deals" className="text-[#191919] hover:text-[#089274]">
              Deals
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#subscribe" className="hidden md:block px-4 py-2 text-[#191919] hover:text-[#089274]">
              Subscribe
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-[#0bb791] text-white rounded-full hover:bg-[#089274] transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-white border-t border-[#f2f2f2] pt-16 pb-8">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
            
              <div>
                <h3 className="font-bold mb-4 text-[#191919]">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm hover:text-[#089274]">
                      Home Page
                    </Link>
                  </li>
                  <li>
                    <Link href="/videos" className="text-sm hover:text-[#089274]">
                      Latest Videos
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-sm hover:text-[#089274]">
                      Tech News
                    </Link>
                  </li>
                  <li>
                    <Link href="/deals" className="text-sm hover:text-[#089274]">
                      Best Deals
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-[#089274]">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-[#191919]">Connect With Us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm hover:text-[#089274]">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-[#089274]">
                      Support Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-[#089274]">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-[#089274]">
                      Blog Posts
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm hover:text-[#089274]">
                      User Reviews
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-[#191919]">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  <Link href="#" className="text-[#191919] hover:text-[#089274]">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-[#191919] hover:text-[#089274]">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-[#191919] hover:text-[#089274]">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-[#191919] hover:text-[#089274]">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-[#191919] hover:text-[#089274]">
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-[#f2f2f2] pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-xs text-[#191919] mb-4 md:mb-0">© 2023 Art Gonzales. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-xs hover:text-[#089274]">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-xs hover:text-[#089274]">
                  Terms of Use
                </Link>
                <Link href="#" className="text-xs hover:text-[#089274]">
                  Cookie Settings
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

