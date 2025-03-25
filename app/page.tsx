import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight, Clock, Play, Tag } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
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
                className="px-6 py-3 bg-[#191919] text-white rounded-md hover:bg-black transition-colors "
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
            src="/hero.svg?height=600&width=800"
            alt="Smart home"
            width={800}
            height={600}
            className="object-cover h-full ml-auto"
          />
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#089274] font-medium">Latest News</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-[#191919]">Smart Home News & Updates</h2>
            <p className="max-w-2xl mx-auto text-[#191919]">
              Stay informed with the latest developments and innovations in smart home technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* News Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Home News"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> March 15, 2023
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Smart Home
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-[#089274] transition-colors">
                  <Link href="/news">The Future of Smart Home Technology: Trends to Watch in 2023</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Smart home technology continues to evolve at a rapid pace, with new innovations emerging regularly.
                </p>
                <Link
                  href="/news"
                  className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Security"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> March 12, 2023
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Security
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-[#089274] transition-colors">
                  <Link href="/news">New Study Shows Smart Security Systems Reduce Break-ins by 60%</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  A recent study reveals that homes with smart security systems experience significantly fewer
                  break-ins.
                </p>
                <Link
                  href="/news"
                  className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Speakers"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> March 10, 2023
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="h-3 w-3" /> New Products
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 hover:text-[#089274] transition-colors">
                  <Link href="/news">Leading Tech Company Unveils Next-Generation Smart Speaker</Link>
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  The latest smart speaker features enhanced sound quality and improved voice recognition capabilities.
                </p>
                <Link
                  href="/news"
                  className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#191919] border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
            >
              View All News <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Videos Section - Only 2 Most Recent */}
      <section className="bg-[#cef0e9] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <span className="text-[#089274] font-medium">Latest Videos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-[#191919]">Recent Smart Home Videos</h2>
          <p className="max-w-2xl mx-auto mb-16 text-[#191919]">
            Check out our most recent videos showcasing innovative smart home technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Video 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Home Setup"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 12:45
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Complete Smart Home Hub Setup Guide</h3>
                <div className="text-xs text-gray-500 mb-3">Published on March 15, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  In this comprehensive guide, we walk you through setting up your smart home hub from scratch.
                </p>
                <Link href="/videos" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Watch Now
                </Link>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Lighting Setup"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="h-3 w-3" /> 8:32
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Smart Lighting for Beginners</h3>
                <div className="text-xs text-gray-500 mb-3">Published on March 10, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  Discover how to set up smart lighting in your home with this beginner-friendly guide.
                </p>
                <Link href="/videos" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Watch Now
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/videos"
              className="px-6 py-3 bg-white text-[#191919] border border-gray-200 rounded-md hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              View All Videos <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <span className="text-[#089274] font-medium">Special Offers</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-[#191919]">Featured Smart Home Deals</h2>
            <p className="max-w-2xl mx-auto text-[#191919]">
              Discover amazing deals on the latest smart home technology. Transform your living space without breaking
              the bank.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Deal 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
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
                <h3 className="text-lg font-bold mb-1">Smart Thermostat Pro</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$139.99</span>
                  <span className="text-sm line-through text-gray-500">$199.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Energy-efficient smart thermostat with voice control and learning capabilities.
                </p>
                <Link
                  href="/deals"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  View Deal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
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
                <h3 className="text-lg font-bold mb-1">HD Security Camera</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$74.99</span>
                  <span className="text-sm line-through text-gray-500">$99.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  1080p HD security camera with night vision, motion detection, and two-way audio.
                </p>
                <Link
                  href="/deals"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  View Deal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Deal 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200">
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
                <h3 className="text-lg font-bold mb-1">Smart Light Bulbs (4-Pack)</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-bold text-[#089274]">$59.99</span>
                  <span className="text-sm line-through text-gray-500">$99.99</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Color-changing smart bulbs compatible with voice assistants and smartphone control.
                </p>
                <Link
                  href="/deals"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                >
                  View Deal <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/deals"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#191919] border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
            >
              View All Deals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stay Updated Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              className="px-6 py-3 bg-white text-[#191919] border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

