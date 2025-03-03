
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { CheckCircle, Star, User } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-600 blur-xl opacity-15 animate-[pulse_5s_ease-in-out_infinite]"></div>
      
      {/* Header Section */}
      <header className="w-full flex items-center justify-between py-4 px-8 bg-gray-900 bg-opacity-90 fixed top-0 left-0 right-0 z-10 shadow-lg">
        <div className="text-2xl font-bold text-white">The Free Money Playbook</div>
        <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-lg" onClick={() => document.getElementById('buy-now').scrollIntoView({ behavior: 'smooth' })}>
          Buy Now
        </Button>
      </header>
      
      {/* Headline Section */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600 drop-shadow-md mt-20"
      >
        The Free Money Playbook
      </motion.h1>
      
      <p className="mt-6 text-lg text-center text-gray-300 max-w-2xl">
        Zero Investment. Unlimited Profits. No Risk. Just Results.
      </p>
      
      <p className="mt-4 text-md text-center text-gray-400 max-w-2xl">
        Discover how to generate passive income without spending a dime. This step-by-step guide is designed for anyone looking to break free from financial struggles.
      </p>
      
      {/* Video Section */}
      <div className="mt-16 mb-16 flex justify-center w-full max-w-3xl">
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Course Introduction Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Benefits Section */}
      <div className="mt-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center"><Star className="text-yellow-400 mr-2" />Why You Need This Playbook</h2>
        <div className="mt-6 flex flex-col items-center space-y-4">
          {["No investment required – 100% free methods!", "Step-by-step guide for beginners!", "Works worldwide – anyone can do it!", "Passive income system that scales!", "Escape the rat race and take control of your income!", "Designed to tap into psychological triggers that make success inevitable!", "Turn financial stress into financial dominance with proven hacks!"].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="text-green-400" />
              <p className="text-gray-300 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Who Am I Section */}
      <div className="mt-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white flex items-center justify-center"><User className="text-blue-400 mr-2" />Who Am I and Why I</h2>
        <p className="mt-6 text-lg text-gray-300">
          Before the world went digital, I dominated the offline business game. I built, scaled, and profited—learning firsthand what makes businesses thrive and what makes them fail. Then, COVID hit. Overnight, the offline world collapsed, but I didn't. Instead, I adapted, pivoted, and cracked the code of online business.
        </p>
        <p className="mt-4 text-md text-gray-400">
          I discovered something powerful—ChatGPT isn’t just a tool, it’s a money machine. While most people waste time playing with AI, I figured out how to make it work for me, generating cash on autopilot.
        </p>
        <p className="mt-4 text-md text-gray-400">
          Now, I’m an expert in AI-driven moneymaking strategies, and I don’t believe in keeping secrets. This course isn’t about theories. It’s about what actually works. If you’re tired of struggling, watching others succeed, and wondering, “Why not me?”—then this is your chance.
        </p>
        <p className="mt-4 text-md text-gray-400 font-bold">- Rocky</p>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-gray-900 py-6 px-8 mt-16 flex justify-between items-center text-gray-400 text-sm">
        <div>
          Contact: <a href="mailto:your.email@example.com" className="text-yellow-400">your.email@example.com</a>
        </div>
        <div className="text-right text-gray-500">
          [Your disclaimer text here]
        </div>
      </footer>
    </div>
  );
}
