import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Filter, Search, Star } from "lucide-react"

export default function DealsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#089274] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Smart Home Deals & Discounts</h1>
            <p className="text-lg mb-8">
              Discover amazing deals on the latest smart home technology. Transform your living space without breaking
              the bank.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for deals..."
                className="w-full px-4 py-3 pl-10 rounded-md text-[#191919] focus:outline-none focus:ring-2 focus:ring-[#0bb791]"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Deals Content */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#191919]">Featured Deals</h2>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-[#f2f2f2] text-sm">
                Category <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-[#f2f2f2] text-sm">
                Price Range <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-[#f2f2f2] text-sm">
                <Filter className="h-4 w-4" /> Filter
              </button>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Deal 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Thermostat"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0bb791] text-white text-sm font-bold px-3 py-1 rounded-full">
                  30% OFF
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-500 ml-1">(42)</span>
                </div>
                <h3 className="text-lg font-bold mb-1">Smart Thermostat Pro</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$139.99</span>
                  <span className="text-sm line-through text-gray-500">$199.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Energy-efficient smart thermostat with voice control and learning capabilities.
                </p>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Security Camera"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0bb791] text-white text-sm font-bold px-3 py-1 rounded-full">
                  25% OFF
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <span className="text-sm text-gray-500 ml-1">(78)</span>
                </div>
                <h3 className="text-lg font-bold mb-1">HD Security Camera</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$74.99</span>
                  <span className="text-sm line-through text-gray-500">$99.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  1080p HD security camera with night vision, motion detection, and two-way audio.
                </p>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Light Bulbs"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0bb791] text-white text-sm font-bold px-3 py-1 rounded-full">
                  40% OFF
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-500 ml-1">(56)</span>
                </div>
                <h3 className="text-lg font-bold mb-1">Smart Light Bulbs (4-Pack)</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$59.99</span>
                  <span className="text-sm line-through text-gray-500">$99.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Color-changing smart bulbs compatible with voice assistants and smartphone control.
                </p>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Speaker"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0bb791] text-white text-sm font-bold px-3 py-1 rounded-full">
                  20% OFF
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <span className="text-sm text-gray-500 ml-1">(112)</span>
                </div>
                <h3 className="text-lg font-bold mb-1">Smart Speaker with Assistant</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$79.99</span>
                  <span className="text-sm line-through text-gray-500">$99.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Premium sound quality with built-in voice assistant for smart home control.
                </p>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Lock"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0bb791] text-white text-sm font-bold px-3 py-1 rounded-full">
                  35% OFF
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-500 ml-1">(34)</span>
                </div>
                <h3 className="text-lg font-bold mb-1">Smart Door Lock</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$129.99</span>
                  <span className="text-sm line-through text-gray-500">$199.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Keyless entry with fingerprint, PIN code, and smartphone app control options.
                </p>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Robot Vacuum"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0bb791] text-white text-sm font-bold px-3 py-1 rounded-full">
                  25% OFF
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 fill-[#0bb791] text-[#0bb791]" />
                  <Star className="h-4 w-4 text-gray-300" />
                  <span className="text-sm text-gray-500 ml-1">(89)</span>
                </div>
                <h3 className="text-lg font-bold mb-1">Robot Vacuum Cleaner</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$224.99</span>
                  <span className="text-sm line-through text-gray-500">$299.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Smart navigation with mapping technology, app control, and voice assistant compatibility.
                </p>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  Buy Now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-white border border-[#f2f2f2] text-[#191919] rounded-md hover:bg-[#f2f2f2] transition-colors">
              Load More Deals
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-[#cef0e9]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#191919]">
              Get Exclusive Deals Straight to Your Inbox
            </h2>
            <p className="mb-6 text-[#191919]">
              Subscribe to our newsletter and be the first to know about flash sales, limited-time offers, and special
              discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-[#089274]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

