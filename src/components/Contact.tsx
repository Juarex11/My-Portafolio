import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    interest: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] font-black text-gray-800 opacity-10 whitespace-nowrap tracking-tight leading-none">
          CONTACT ME
        </h2>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Contact Me</p>
        <h1 className="text-5xl font-bold">
          Let's Talk For <span className="text-green-500">Your</span>
          <br />
          <span className="text-green-500">Next Project</span>
        </h1>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 relative z-10">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Your Name */}
              <div>
                <label className="block text-sm mb-2">Your Name*</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Ex: John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm mb-2">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
                />
              </div>

              {/* I'm interested in */}
              <div>
                <label className="block text-sm mb-2">I'm interested in*</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm mb-2">Budget Range(USD)*</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm mb-2">Country*</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-green-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="pe">Peru</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2">Your Message*</label>
              <textarea
                name="message"
                placeholder="Enter here..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-black font-semibold px-8 py-3 rounded-lg hover:bg-green-400 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-6">
          {/* Address */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-green-500" />
              <h3 className="text-xl font-bold text-green-500">Address</h3>
            </div>
            <p className="text-gray-300">
              2464 Royal Ln. Mesa,
              <br />
              New Jersey 45463
            </p>
          </div>

          {/* Contact */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-5 h-5 text-green-500" />
              <h3 className="text-xl font-bold text-green-500">Contact</h3>
            </div>
            <p className="text-gray-300 mb-2">Phone: 0123-456-789</p>
            <p className="text-gray-300">Email: example@gmail.com</p>
          </div>

          {/* Time */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-green-500" />
              <h3 className="text-xl font-bold text-green-500">Time</h3>
            </div>
            <p className="text-gray-300 mb-2">Monday-Friday: 10:00 - 08:00</p>
            <p className="text-gray-300">Saturday-Sunday: 10:00 - 08:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;