import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const EducationWork = () => {
  const education = [
    {
      institution: "Harmony Institute",
      degree: "Master in Visual Arts",
      period: "2012 - 2014"
    },
    {
      institution: "Aurora Academy",
      degree: "Bachelor in Visual Arts",
      period: "2008 - 2012"
    },
    {
      institution: "Crystalbrook",
      degree: "High School",
      period: "1996 - 2008"
    }
  ];

  const workExperience = [
    {
      company: "Insightlancer",
      position: "Senior Product Designer",
      period: "2018 - 2024"
    },
    {
      company: "Self-Employed",
      position: "Visual Artist",
      period: "2016 - 2018"
    },
    {
      company: "KG Graphics Studio",
      position: "Web Designer",
      period: "2014 - 2016"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Education & Work</p>
        
        <h1 className="text-5xl font-bold">
          My <span className="text-green-500">Academic &</span>
          <br />
          <span className="text-green-500">Professional</span> Journey
        </h1>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Education Section */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-500 p-3 rounded-full">
              <GraduationCap className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6 pb-6 last:pb-0 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.institution}</h3>
                  <p className="text-gray-400">{item.degree}</p>
                </div>
                <span className="bg-green-500 text-black text-base font-semibold px-5 py-2 rounded-full whitespace-nowrap ml-4">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-500 p-3 rounded-full">
              <Briefcase className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {workExperience.map((item, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-6 pb-6 last:pb-0 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.company}</h3>
                  <p className="text-gray-400">{item.position}</p>
                </div>
                <span className="bg-green-500 text-black text-base font-semibold px-5 py-2 rounded-full whitespace-nowrap ml-4">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationWork;