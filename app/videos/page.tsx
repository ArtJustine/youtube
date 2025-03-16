import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Clock, Filter, Play, Search, Tag } from "lucide-react"

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#089274] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Smart Home Video Tutorials</h1>
            <p className="text-lg mb-8">
              Learn how to transform your living space with our collection of smart home video guides, reviews, and
              tutorials.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for videos..."
                className="w-full px-4 py-3 pl-10 rounded-md text-[#191919] focus:outline-none focus:ring-2 focus:ring-[#0bb791]"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Videos Content */}
      <section className="py-12 bg-[#f9f9f9]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            <Link
              href="#"
              className="px-4 py-2 bg-[#0bb791] text-white rounded-full hover:bg-[#089274] transition-colors"
            >
              All Videos
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
            >
              Tutorials
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
            >
              Smart Lighting
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
            >
              Security
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors"
            >
              Smart Speakers
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#191919]">Featured Videos</h2>
            <div className="flex flex-wrap gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-[#f2f2f2] text-sm">
                Latest <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-[#f2f2f2] text-sm">
                Category <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-md border border-[#f2f2f2] text-sm">
                <Filter className="h-4 w-4" /> Filter
              </button>
            </div>
          </div>

          {/* Featured Video */}
          <div className="mb-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Smart Home Hub Setup"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="h-12 w-12 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 12:45
                  </div>
                  <div className="absolute top-4 left-4 bg-[#0bb791] text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                    <Tag className="h-3 w-3" /> Featured
                  </div>
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">Complete Smart Home Hub Setup Guide</h3>
                  <div className="text-sm text-gray-500 mb-4">Published on March 15, 2023</div>
                  <p className="text-gray-700 mb-6">
                    In this comprehensive guide, we walk you through setting up your smart home hub from scratch. Learn
                    how to connect all your devices, create automation routines, and troubleshoot common issues. This
                    video is perfect for beginners who want to build a fully integrated smart home system.
                  </p>
                  <p className="text-gray-700 mb-6">
                    We cover compatibility with major ecosystems including Amazon Alexa, Google Home, and Apple HomeKit,
                    so you can choose the platform that works best for your needs. By the end of this tutorial, you'll
                    have a fully functioning smart home hub that serves as the brain of your connected home.
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                    >
                      <Play className="h-4 w-4" /> Watch Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Video 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
                <div className="text-xs text-gray-500 mb-3">Published on February 10, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  Discover how to set up smart lighting in your home with this beginner-friendly guide. We cover bulb
                  types, switches, and how to create the perfect ambiance for any occasion.
                </p>
                <Link href="#" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Security System"
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
                  <Clock className="h-3 w-3" /> 15:47
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Home Security Camera Installation</h3>
                <div className="text-xs text-gray-500 mb-3">Published on January 25, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  Learn how to install and configure security cameras around your home for maximum protection. We
                  discuss optimal placement, connectivity options, and mobile app setup.
                </p>
                <Link href="#" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Thermostat Review"
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
                  <Clock className="h-3 w-3" /> 10:23
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Top 5 Smart Thermostats Compared</h3>
                <div className="text-xs text-gray-500 mb-3">Published on March 5, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  We compare the top 5 smart thermostats on the market to help you choose the right one for your home.
                  Features, pricing, and energy efficiency are all covered in detail.
                </p>
                <Link href="#" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Speaker Comparison"
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
                  <Clock className="h-3 w-3" /> 12:18
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Smart Speakers: Sound Quality Test</h3>
                <div className="text-xs text-gray-500 mb-3">Published on February 18, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  We put the most popular smart speakers through rigorous sound quality tests to determine which offers
                  the best audio experience for music, podcasts, and voice assistant responses.
                </p>
                <Link href="#" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Video 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Kitchen Gadgets"
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
                  <Clock className="h-3 w-3" /> 14:52
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Smart Kitchen Gadgets Worth Buying</h3>
                <div className="text-xs text-gray-500 mb-3">Published on January 12, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  Transform your kitchen with these innovative smart gadgets. From connected coffee makers to
                  voice-controlled ovens, we review the best smart kitchen technology available today.
                </p>
                <Link href="#" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Read More
                </Link>
              </div>
            </div>

            {/* Video 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Smart Home Automation"
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
                  <Clock className="h-3 w-3" /> 18:05
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Advanced Home Automation Routines</h3>
                <div className="text-xs text-gray-500 mb-3">Published on March 8, 2023</div>
                <p className="text-sm text-gray-600 mb-4">
                  Take your smart home to the next level with advanced automation routines. Learn how to create complex
                  scenarios that respond to your lifestyle and preferences automatically.
                </p>
                <Link href="#" className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors">
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-white border border-[#f2f2f2] text-[#191919] rounded-md hover:bg-[#f2f2f2] transition-colors">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 bg-[#cef0e9]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#191919]">Never Miss a New Video</h2>
            <p className="mb-6 text-[#191919]">
              Subscribe to our channel and be the first to know when we publish new tutorials, reviews, and guides.
            </p>
            <div className="flex justify-center">
              <Link
                href="#"
                className="px-6 py-3 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
              >
                Subscribe to Our Channel
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

