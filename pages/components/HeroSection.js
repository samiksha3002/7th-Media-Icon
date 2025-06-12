// components/HeroSection.jsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6" data-aos="fade-right">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Turn <span className="text-orange-500">Clicks</span> into <br />
            <span className="text-blue-900">Conversions</span>
          </h1>
          <p className="text-gray-600 text-lg">
            With 7th Media Icon, master the art of outdoor persuasion as we harness
            location, scale, creativity, and impact to transform your brand reach.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-md transition">
              Start Now
            </button>
            <button className="flex items-center text-gray-800 font-semibold space-x-2 hover:underline">
              <span>Learn more</span>
              <i className="fas fa-arrow-right" />
            </button>
          </div>

          {/* Brands */}
          <div className="pt-6 text-sm text-gray-500">
            <p>Powered by</p>
            <div className="flex flex-wrap gap-4 mt-2 text-gray-700">
              <span>Log Trans</span>
              <span>Excels</span>
              <span>MeetHub</span>
              <span>FactFix</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4" data-aos="fade-left">
          {/* Box 1 */}
          <div className="bg-orange-100 p-5 rounded-xl text-center shadow-sm">
            <div className="flex justify-center -space-x-2 mb-2">
              <Image src="/images/avatar1.jpg" alt="avatar1" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/avatar2.jpg" alt="avatar2" width={32} height={32} className="rounded-full border-2 border-white" />
              <Image src="/images/avatar3.jpg" alt="avatar3" width={32} height={32} className="rounded-full border-2 border-white" />
            </div>
            <p className="text-xl font-bold text-orange-600">124K+</p>
            <p className="text-gray-700 text-sm">People reached</p>
          </div>

          {/* Main Image */}
          <div className="row-span-2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero-girl.jpg"
              alt="hero"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="bg-blue-900 text-white p-6 rounded-xl text-center shadow-sm">
            <p className="text-3xl font-bold">98%</p>
            <p className="text-sm">Satisfaction Rate</p>
          </div>

          {/* Box 4 */}
          <div className="bg-gray-100 p-6 rounded-xl text-center shadow-sm">
            <p className="text-2xl font-semibold text-blue-900">5.8K</p>
            <p className="text-sm text-gray-600">Clients Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}
