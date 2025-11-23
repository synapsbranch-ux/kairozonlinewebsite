import React, { useState } from 'react';
import { Upload, Image, Video, Shield, Zap, BarChart3, ArrowRight } from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: Upload,
      title: 'Universal Upload',
      description: 'Drag and drop any media format',
      demo: {
        type: 'progress',
        items: ['video.mp4', 'image.png', 'audio.wav']
      }
    },
    {
      icon: Image,
      title: 'Image Optimization',
      description: 'Automatic format conversion & compression',
      demo: {
        type: 'comparison',
        before: '2.4 MB',
        after: '187 KB'
      }
    },
    {
      icon: Video,
      title: 'Video Streaming',
      description: 'Adaptive bitrate with HLS/DASH',
      demo: {
        type: 'quality',
        options: ['1080p', '720p', '480p', '360p']
      }
    },
    {
      icon: Shield,
      title: 'Secure Sharing',
      description: 'Password-protected expirable links',
      demo: {
        type: 'link',
        url: 'karoiz.io/s/abc123',
        expiry: '24h'
      }
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Global CDN with edge caching',
      demo: {
        type: 'speed',
        metrics: ['32ms', '28ms', '41ms']
      }
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights on views & bandwidth',
      demo: {
        type: 'chart',
        data: [40, 65, 55, 80, 95, 70]
      }
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#00D9FF]/10 rounded-full text-[#0A4D68] font-semibold text-sm mb-4">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to
            <span className="text-[#0A4D68]"> deliver media</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features demonstrated, not just described.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#F8FAFB] to-white border border-gray-200 hover:border-[#00D9FF] hover:shadow-xl transition-smooth overflow-hidden"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                data-testid={`feature-${index}`}
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#0A4D68]/10 flex items-center justify-center mb-6 group-hover:bg-[#0A4D68] group-hover:scale-110 transition-smooth">
                    <Icon className="w-7 h-7 text-[#0A4D68] group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>

                  {/* Interactive Demo */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    {feature.demo.type === 'progress' && (
                      <div className="space-y-2">
                        {feature.demo.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className={`w-2 h-2 rounded-full ${
                              hoveredFeature === index ? 'bg-[#10B981] animate-pulse' : 'bg-gray-300'
                            }`}></div>
                            <span className="text-gray-600 font-mono">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.demo.type === 'comparison' && (
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-red-500 font-bold line-through">{feature.demo.before}</div>
                          <div className="text-xs text-gray-500">Before</div>
                        </div>
                        <ArrowRight className="text-[#00D9FF]" />
                        <div className="text-center">
                          <div className="text-[#10B981] font-bold">{feature.demo.after}</div>
                          <div className="text-xs text-gray-500">After</div>
                        </div>
                      </div>
                    )}

                    {feature.demo.type === 'quality' && (
                      <div className="flex gap-2 flex-wrap">
                        {feature.demo.options.map((quality, i) => (
                          <span 
                            key={i} 
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              hoveredFeature === index && i === 0 
                                ? 'bg-[#00D9FF] text-white' 
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {quality}
                          </span>
                        ))}
                      </div>
                    )}

                    {feature.demo.type === 'link' && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded text-xs font-mono text-[#0A4D68]">
                          <Shield size={12} />
                          {feature.demo.url}
                        </div>
                        <div className="text-xs text-gray-500">Expires in {feature.demo.expiry}</div>
                      </div>
                    )}

                    {feature.demo.type === 'speed' && (
                      <div className="flex gap-2 justify-between text-center">
                        {feature.demo.metrics.map((metric, i) => (
                          <div key={i}>
                            <div className="text-[#00D9FF] font-bold text-lg">{metric}</div>
                            <div className="text-xs text-gray-500">Region {i + 1}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {feature.demo.type === 'chart' && (
                      <div className="flex items-end gap-1 h-16">
                        {feature.demo.data.map((value, i) => (
                          <div 
                            key={i} 
                            className={`flex-1 rounded-t transition-all ${
                              hoveredFeature === index ? 'bg-[#00D9FF]' : 'bg-gray-300'
                            }`}
                            style={{ height: `${value}%` }}
                          ></div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredFeature === index && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/5 to-transparent pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;