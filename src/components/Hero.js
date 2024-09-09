"use client";
import Image from 'next/image'
import img from '../public/images/img.jpg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-violet-900">
      <div className="text-center space-y-6">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src={img}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-pink-500"
          />
        </div>
        <h2 className="text-6xl font-bold text-pink-500 animate-pulse">Welcome to Athul's Portfolio</h2>
        <p className="text-xl text-violet-300">Software Developer</p>
        <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="bg-pink-500 text-gray-900 px-6 py-3 rounded-full hover:bg-pink-400 transition-colors">
          Explore My Work
        </button>
      </div>
    </section>
  );
}