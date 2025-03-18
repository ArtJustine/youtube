"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#089274] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Living Made Simple</h1>
            <p className="mb-8 text-lg">
            Join me as I explore the world of smart homes and tech—so you can make the right choices without the hassle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@Art_Gonzales/videos"
                onClick={(e) => {
                  e.preventDefault(); 
                  window.open("https://www.youtube.com/@Art_Gonzales/videos", "_blank", "noopener,noreferrer");
                }}
                className="px-6 py-3 bg-[#191919] text-white rounded-md hover:bg-black transition-colors"
              >
                Watch Now
              </a>
              <a
                href="https://www.youtube.com/@Art_Gonzales"
                onClick={(e) => {
                  e.preventDefault(); 
                  window.open("https://www.youtube.com/@Art_Gonzales", "_blank", "noopener,noreferrer");
                }}
                className="px-6 py-3 bg-[#cef0e9] text-[#089274] rounded-md hover:bg-white transition-colors"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-full h-full">
          <Image
            src="/hero.svg?height=600&width=800"
            alt="Smart home"
            layout="fill"
            objectFit="cover"
            className="object-cover h-full ml-auto opacity-60"
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vNSs8KUdkbw?si=rj66fkHVom5TVaxO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
  <div className="flex justify-center mb-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/eWwWnPlT45o?si=iXd9R-gBs7TWlejf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <h3 className="text-xl font-bold mb-3 text-center">My VERY Inexpensive EDC For 2025
  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm text-left">
  <div className="flex justify-center mb-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/56tNSPsvL2M?si=cQEyCLW19blJBX6n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <h3 className="text-xl font-bold mb-3 text-center">Zemismart Matter Hub M1 for 2025? Not Really!

  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm text-left">
  <div className="flex justify-center mb-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-sQOGQp-sb8?si=DL_uK4HzGN_Z90ak" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <h3 className="text-xl font-bold mb-3 text-center">Why I Replaced My HomePod Mini with Amazon Echo 4th Generation!


  </h3>
</div>

<div className="bg-white p-6 rounded-lg shadow-sm text-left">
  <div className="flex justify-center mb-4">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/8Bi-HxlKNHE?si=OUJjNTg2TaUh6Dcz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>
  <h3 className="text-xl font-bold mb-3 text-center">I used the iPhone 12 for over a Year! Worth it in 2025?


  </h3>
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
            <a
              href="https://www.youtube.com/@Art_Gonzales"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0bb791] text-white rounded-md hover:bg-[#089274] transition-colors"
            >
              Subscribe
            </a>
            <Link
              href="#learn"
              className="px-6 py-3 bg-white text-[#191919] border border-[#f2f2f2] rounded-md hover:bg-[#f2f2f2] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

