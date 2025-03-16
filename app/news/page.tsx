import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, Clock, Search, Tag, Bookmark, Share2, MessageSquare } from 'lucide-react';

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9]">
      {/* Hero Section */}
      <section className="bg-[#089274] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Smart Home News & Insights
            </h1>
            <p className="text-lg mb-8">
              Stay informed with the latest developments, trends, and innovations in smart home technology.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search news articles..."
                className="w-full px-4 py-3 pl-10 rounded-md text-[#191919] focus:outline-none focus:ring-2 focus:ring-[#0bb791]"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <div className="bg-white border-b border-[#f2f2f2]">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            <Link 
              href="#" 
              className="px-4 py-2 bg-[#0bb791] text-white rounded-full hover:bg-[#089274] transition-colors whitespace-nowrap"
            >
              All News
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
            >
              Smart Home
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
            >
              Security
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
            >
              Automation
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
            >
              New Products
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
            >
              Industry News
            </Link>
            <Link 
              href="#" 
              className="px-4 py-2 bg-white text-[#191919] rounded-full border border-[#f2f2f2] hover:bg-[#f2f2f2] transition-colors whitespace-nowrap"
            >
              Guides
            </Link>
          </div>
        </div>
      </div>

      {/* Main News Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width */}
            <div className="lg:col-span-2">
              {/* Featured Article */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Smart Home Hub"
                    width={800}
                    height={400}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0bb791] text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> March 15, 2023
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" /> 5 min read
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-4 w-4" /> Smart Home
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-[#089274] transition-colors">
                    <Link href="#">
                      The Future of Smart Home Technology: Trends to Watch in 2023
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Smart home technology continues to evolve at a rapid pace, with new innovations emerging regularly. 
                    From AI-powered assistants to energy-efficient solutions, the smart home landscape is changing how we 
                    interact with our living spaces. In this article, we explore the most significant trends that will shape 
                    the future of smart homes in 2023 and beyond.
                  </p>
                  <div className="flex justify-between items-center">
                    <Link 
                      href="#" 
                      className="text-[#0bb791] font-medium hover:text-[#089274] transition-colors flex items-center gap-1"
                    >
                      Read Full Article <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="flex gap-3">
                      <button className="text-gray-500 hover:text-[#089274]">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="text-gray-500 hover:text-[#089274]">
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-gray-500 hover:text-[#089274] flex items-center gap-1">
                        <MessageSquare className="h-5 w-5" /> 24
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Article 1 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                      <Link href="#">
                        New Study Shows Smart Security Systems Reduce Break-ins by 60%
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      A recent study by the Home Security Association reveals that homes with smart security systems 
                      experience significantly fewer break-ins compared to those without.
                    </p>
                    <Link 
                      href="#" 
                      className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Article 2 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                      <Link href="#">
                        Leading Tech Company Unveils Next-Generation Smart Speaker
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      The latest smart speaker features enhanced sound quality, improved voice recognition, and 
                      seamless integration with other smart home devices.
                    </p>
                    <Link 
                      href="#" 
                      className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Article 3 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Smart Energy"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> March 8, 2023
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" /> Energy
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 hover:text-[#089274] transition-colors">
                      <Link href="#">
                        Smart Energy Solutions Could Save Homeowners $500 Annually
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      New research indicates that implementing smart energy solutions in your home could lead to 
                      significant cost savings on utility bills.
                    </p>
                    <Link 
                      href="#" 
                      className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Article 4 */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      alt="Smart Kitchen"
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> March 5, 2023
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" /> Kitchen
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 hover:text-[#089274] transition-colors">
                      <Link href="#">
                        The Rise of Smart Kitchen Appliances: Convenience Meets Innovation
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Smart refrigerators, ovens, and coffee makers are transforming how we prepare meals and 
                      manage our kitchens. Here's what you need to know.
                    </p>
                    <Link 
                      href="#" 
                      className="text-[#0bb791] text-sm font-medium hover:text-[#089274] transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Load More Button */}
              <div className="flex justify-center mb-8">
                <button className="px-6 py-3 bg-white border border-[#f2f2f2] text-[#191919] rounded-md hover:bg-[#f2f2f2] transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="lg:col-span-1">
              {/* Trending Now */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-[#f2f2f2]">Trending Now</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Trending article"
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm hover:text-[#089274] transition-colors">
                        <Link href="#">
                          Smart Home Market Expected to Reach $135 Billion by 2025
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">March 14, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Trending article"
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm hover:text-[#089274] transition-colors">
                        <Link href="#">
                          5 Ways to Secure Your Smart Home Devices Against Hackers
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">March 13, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Trending article"
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm hover:text-[#089274] transition-colors">
                        <Link href="#">
                          New Voice Assistant Features That Will Transform Your Daily Routine
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">March 11, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Trending article"
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm hover:text-[#089274] transition-colors">
                        <Link href="#">
                          Industry Leaders Announce New Smart Home Compatibility Standard
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">March 9, 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-[#cef0e9] rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-3 text-[#191919]">Stay Informed</h3>
                <p className="text-sm text-[#191919] mb-4">
                  Subscribe to our newsletter and receive the latest smart home news directly in your inbox.
                </p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#089274]"
                  />
                  <button 
                    type="submit" 
                    className="w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-[#191919] mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 pb-2 border-b border-[#f2f2f2]">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Smart Home
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Automation
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Voice Assistant
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Energy Saving
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Smart Lighting
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    IoT
                  </Link>
                  <Link 
                    href="#" 
                    className="px-3 py-1 bg-[#f2f2f2] text-[#191919] rounded-full text-sm hover:bg-[#0bb791] hover:text-white transition-colors"
                  >
                    Smart Kitchen
                  </Link>
                </div>
              </div>

              {/* Featured Product */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Featured Product"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs font-bold text-[#0bb791] uppercase">Featured Product</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">Smart Home Starter Kit</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Everything you need to begin your smart home journey. Includes hub, lights, and sensors.
                  </p>
                  <Link 
                    href="#" 
                    className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
