import Image from "next/image"
import Link from "next/link"
import { ChevronRight, CuboidIcon as Cube, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-16">
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

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-[#191919] hover:text-[#089274]">
            News
          </Link>
          <Link href="#" className="text-[#191919] hover:text-[#089274]">
            Videos
          </Link>
          <Link href="#" className="text-[#191919] hover:text-[#089274]">
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

      {/* Hero Section */}
      <section className="bg-[#089274] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore the Future of Smart Home Technology</h1>
            <p className="mb-8 text-lg">
              Welcome to our channel, where innovation meets convenience! Discover the latest in smart home tech and
              watch our most popular videos to transform your living space.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#watch"
                className="px-6 py-3 bg-[#191919] text-white rounded-md hover:bg-black transition-colors"
              >
                Watch Now
              </Link>
              <Link
                href="#subscribe"
                className="px-6 py-3 bg-[#cef0e9] text-[#089274] rounded-md hover:bg-white transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-full h-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Smart home"
            width={800}
            height={600}
            className="object-cover h-full ml-auto"
          />
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-[#cef0e9] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <span className="text-[#089274] font-medium">Explore</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-[#191919]">
            Discover Our Latest Smart Home Videos
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-[#191919]">
            Stay updated with our recent videos showcasing innovative smart home technology. Dive into the world of tech
            with us!
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="md:col-span-2 flex justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="People discussing smart home technology"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="flex justify-center mb-4">
                <Cube className="h-8 w-8 text-[#089274]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Smart Lighting Solutions</h3>
              <p className="text-sm text-[#191919] text-center">
                Transform your home with intelligent lighting that adapts to your lifestyle and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="flex justify-center mb-4">
                <Cube className="h-8 w-8 text-[#089274]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Home Security Innovations</h3>
              <p className="text-sm text-[#191919] text-center">
                Protect your home with cutting-edge security systems that offer peace of mind and convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="flex justify-center mb-4">
                <Cube className="h-8 w-8 text-[#089274]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Smart Thermostat Review</h3>
              <p className="text-sm text-[#191919] text-center">
                Optimize your energy usage with our comprehensive review of the latest smart thermostats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <div className="flex justify-center mb-4">
                <Cube className="h-8 w-8 text-[#089274]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Watch More Videos</h3>
              <p className="text-sm text-[#191919] text-center">
                Join us for more exciting content on smart home technology and tips for your lifestyle.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#learn"
              className="px-6 py-3 bg-white text-[#191919] border border-[#f2f2f2] rounded-md hover:bg-[#f2f2f2] transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="#signup"
              className="px-6 py-3 bg-white text-[#191919] border border-[#f2f2f2] rounded-md hover:bg-[#f2f2f2] transition-colors flex items-center gap-2"
            >
              Sign Up <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#191919]">Stay Updated with Our Content</h2>
          <p className="max-w-2xl mx-auto mb-8 text-[#191919]">
            Subscribe now for the latest smart home tech updates and exclusive content delivered straight to you!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="#subscribe"
              className="px-6 py-3 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
            >
              Subscribe
            </Link>
            <Link
              href="#learn"
              className="px-6 py-3 bg-white text-[#191919] border border-[#f2f2f2] rounded-md hover:bg-[#f2f2f2] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#f2f2f2] pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">Logo</div>
              <p className="text-sm mb-6 text-[#191919]">
                Subscribe to our newsletter for the latest updates on smart home innovations.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your Email Here"
                  className="px-4 py-2 border border-[#f2f2f2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#089274]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#191919] text-white rounded-md hover:bg-black transition-colors"
                >
                  Join
                </button>
              </form>
              <p className="text-xs mt-2 text-[#191919]">
                By subscribing, you consent to our Privacy Policy and agree to receive updates.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-[#191919]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:text-[#089274]">
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#089274]">
                    Latest Videos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#089274]">
                    Tech News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:text-[#089274]">
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
            <p className="text-xs text-[#191919] mb-4 md:mb-0">© 2023 Art Genieals. All rights reserved.</p>
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
    </main>
  )
}

