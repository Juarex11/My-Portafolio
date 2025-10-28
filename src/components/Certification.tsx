import React, { useState } from 'react';
import { Award, Eye } from 'lucide-react';

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Advanced React Development",
      issuer: "Meta",
      date: "2024",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      description: "Comprehensive certification covering advanced React patterns, hooks, performance optimization, and modern state management techniques."
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=600&h=400&fit=crop",
      description: "Professional certification demonstrating expertise in designing and deploying scalable, highly available systems on AWS."
    },
    {
      title: "UI/UX Design Professional",
      issuer: "Google",
      date: "2023",
      image: "https://images.unsplash.com/photo-1616499452765-c37a6cd4de37?w=600&h=400&fit=crop",
      description: "Certificate in user interface and experience design, covering design thinking, prototyping, and user research methodologies."
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
      description: "Comprehensive program covering frontend and backend development, databases, APIs, and modern web technologies."
    },
    {
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2022",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      description: "Professional certification in agile methodologies, scrum framework, and team facilitation best practices."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] font-black text-gray-800 opacity-10 whitespace-nowrap tracking-tight leading-none">
          CERTIFICATIONS
        </h2>
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold">
          My Professional
          <br />
          <span className="text-green-500">Certifications</span>
        </h1>
      </div>

      {/* Certifications Grid */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {certifications.slice(activeIndex, activeIndex + 2).map((cert, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-green-500 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative group cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-20 h-20 rounded-lg object-cover border-2 border-zinc-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                  <span className="inline-block bg-green-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {certifications.slice(0, -1).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index ? 'bg-green-500 w-8' : 'bg-gray-600'
              }`}
              aria-label={`Go to certification ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-green-500 transition-colors"
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Certificate preview" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;