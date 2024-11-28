import React from 'react';
import { Cpu, HardDrive, Monitor } from 'lucide-react';

const specifications = [
  {
    category: 'Processing Power',
    icon: Cpu,
    specs: [
      { label: 'CPU', value: 'Quad-core ARM Cortex-A73' },
      { label: 'GPU', value: 'Mali-G52 MC2' },
      { label: 'RAM', value: '4GB DDR4' }
    ]
  },
  {
    category: 'Storage',
    icon: HardDrive,
    specs: [
      { label: 'Internal', value: '256GB SSD' },
      { label: 'Expandable', value: 'Up to 1TB via microSD' },
      { label: 'Game Format', value: 'Optimized ROM format' }
    ]
  },
  {
    category: 'Display Output',
    icon: Monitor,
    specs: [
      { label: 'Resolution', value: 'Up to 4K @ 60fps' },
      { label: 'HDR', value: 'HDR10 Support' },
      { label: 'Upscaling', value: 'AI-powered scaling' }
    ]
  }
];

export function Specs() {
  return (
    <section id="specs" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Cpu className="text-purple-500 h-6 w-6" />
            <span className="text-purple-400 font-medium">Technical Specifications</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Hardware, Modern Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            State-of-the-art technology packed into a retro-inspired design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specifications.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <li key={specIndex} className="flex justify-between">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}