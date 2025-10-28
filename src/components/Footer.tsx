import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">Ahmed.</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              I am an experienced web designer with 6+ years in the field. Collaborating with various companies and startups
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <Facebook className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <Twitter className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <Instagram className="w-5 h-5 text-black" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-400 transition-colors">
                <Linkedin className="w-5 h-5 text-black" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-green-500 font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About Me</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Contact Me</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-green-500 font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">0123-456-789</li>
              <li className="text-gray-400">www.example.com</li>
              <li className="text-gray-400">example@gmail.com</li>
              <li className="text-gray-400">
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45463
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-green-500 font-semibold text-lg mb-6">Get the latest information</h3>
            <div className="relative max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Email Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center hover:bg-green-400 transition-colors"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-zinc-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 <span className="text-green-500">Ahmed</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;