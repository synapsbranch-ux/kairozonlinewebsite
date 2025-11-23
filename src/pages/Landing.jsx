import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import SignupModal from '../components/SignupModal';
import { Upload, Code2, Globe, Shield, Zap, BarChart3, Play, Image as ImageIcon, Video, Link2 } from 'lucide-react';

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [selectedLang, setSelectedLang] = useState('node');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate upload
  useEffect(() => {
    let interval;
    if (isUploading && uploadProgress < 100) {
      interval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 5, 100));
      }, 100);
    } else if (uploadProgress === 100) {
      setTimeout(() => {
        setUploadProgress(0);
        setIsUploading(false);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isUploading, uploadProgress]);

  const codeExamples = {
    node: `import { Karoiz } from 'karoiz';

const client = new Karoiz('kz_xxxxxxxxx');

const { data } = await client.upload({
  file: './video.mp4',
  transforms: ['optimize', 'hls'],
  cdn: true
});

console.log(data.url);`,
    python: `from karoiz import Karoiz

client = Karoiz('kz_xxxxxxxxx')

data = client.upload(
    file='video.mp4',
    transforms=['optimize', 'hls'],
    cdn=True
)

print(data['url'])`,
    curl: `curl -X POST https://api.karoiz.online/upload \\
  -H "Authorization: Bearer kz_xxxxxxxxx" \\
  -F "file=@video.mp4" \\
  -F "transforms=optimize,hls" \\
  -F "cdn=true"`
  };

  return (
    <div className="relative">
      <Navbar onGetStarted={() => setIsModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1598956421870-c7c3f7141dd0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjbG91ZCUyMGNvbXB1dGluZyUyMG5ldHdvcmt8ZW58MHx8fGJsdWV8MTc2MzkxMTQxOHww&ixlib=rb-4.1.0&q=85"
            alt="Cloud Network"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8FAFB]/50 to-[#F8FAFB]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Media infrastructure
              <br />
              <span className="text-[#0A4D68]">for modern teams</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Upload. Transform. Deliver. Globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="btn-primary text-base"
                data-testid="hero-start-free-btn"
                onClick={() => setIsModalOpen(true)}
              >
                Start Free – 5GB included
              </button>
              <button className="btn-secondary text-base" data-testid="hero-pricing-btn">
                See Pricing
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">No credit card required</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0A4D68] mb-2">2.3B+</div>
              <div className="text-gray-600">Files delivered this month</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0A4D68] mb-2">&lt;50ms</div>
              <div className="text-gray-600">Global average latency</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0A4D68] mb-2">99.99%</div>
              <div className="text-gray-600">Uptime guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Demo Section - Interactive */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#00D9FF]/10 rounded-full text-[#0A4D68] font-semibold text-sm mb-4">
              Upload
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Drag, drop,
              <span className="text-[#0A4D68]"> done.</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Interactive Upload Zone */}
            <div 
              className="relative bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-[#00D9FF] transition-smooth cursor-pointer"
              onClick={() => !isUploading && setIsUploading(true)}
              data-testid="upload-demo-zone"
            >
              {!isUploading && uploadProgress === 0 ? (
                <>
                  <Upload className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold mb-2">Drop your files here</h3>
                  <p className="text-gray-600">or click to browse</p>
                  <p className="text-sm text-gray-500 mt-4">Supports: Videos, Images, Audio • Max 5GB</p>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <Video className="w-16 h-16 mx-auto text-[#00D9FF]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">demo-video.mp4</h3>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-[#00D9FF] h-3 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-600">{uploadProgress}% uploaded</p>
                  {uploadProgress === 100 && (
                    <div className="mt-4 flex items-center justify-center gap-2 text-[#10B981]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="font-semibold">Processing complete!</span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Results */}
            {uploadProgress === 100 && (
              <div className="mt-8 bg-[#0F1419] rounded-xl p-6 animate-fade-in-up">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                  <span className="text-white font-mono text-sm">✓ Optimized</span>
                  <span className="text-white font-mono text-sm">✓ HLS Converted</span>
                  <span className="text-white font-mono text-sm">✓ CDN Distributed</span>
                </div>
                <div className="bg-[#1a1d24] rounded-lg p-4">
                  <code className="text-[#00D9FF] text-sm break-all">
                    https://cdn.karoiz.online/v/abc123def456.m3u8
                  </code>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Developer Experience Section - Code Demo */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#00D9FF]/10 rounded-full text-[#0A4D68] font-semibold text-sm mb-4">
              Developer First
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Integrate in minutes,
              <br />
              <span className="text-[#0A4D68]">not weeks.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, elegant API that fits right into your code.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Language Tabs */}
            <div className="flex gap-2 mb-4">
              {[
                { key: 'node', label: 'Node.js' },
                { key: 'python', label: 'Python' },
                { key: 'curl', label: 'cURL' }
              ].map(lang => (
                <button
                  key={lang.key}
                  onClick={() => setSelectedLang(lang.key)}
                  className={`px-4 py-2 rounded-lg font-mono text-sm transition-smooth ${
                    selectedLang === lang.key
                      ? 'bg-[#0A4D68] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  data-testid={`lang-tab-${lang.key}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Code Block */}
            <div className="bg-[#0F1419] rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="p-6 overflow-x-auto">
                <code className="text-gray-300 text-sm font-mono whitespace-pre">
                  {codeExamples[selectedLang]}
                </code>
              </pre>
            </div>

            {/* SDK Tags */}
            <div className="flex gap-3 mt-8 flex-wrap justify-center">
              {['JavaScript', 'Python', 'Go', 'Ruby', 'PHP', 'Rust', 'Java'].map(sdk => (
                <span key={sdk} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                  {sdk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Delivery Section - Animated Globe */}
      <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-[#F8FAFB]">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#00D9FF]/10 rounded-full text-[#0A4D68] font-semibold text-sm mb-4">
              Global CDN
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Fast everywhere.
              <span className="text-[#0A4D68]"> Really.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Content delivered from the edge location closest to your users.
            </p>
          </div>
          
          {/* 3D Globe Effect */}
          <div className="relative max-w-3xl mx-auto">
            <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-[#0A4D68] to-[#084a5e] p-12 shadow-2xl" style={{ perspective: '1000px' }}>
              {/* Rotating Globe */}
              <div className="absolute inset-12 rounded-full border-2 border-[#00D9FF]/30 animate-spin" style={{ animationDuration: '20s' }}>
                {/* Longitude lines */}
                {[0, 30, 60, 90, 120, 150].map(deg => (
                  <div
                    key={deg}
                    className="absolute inset-0 border-l border-[#00D9FF]/20"
                    style={{ transform: `rotateY(${deg}deg)`, transformStyle: 'preserve-3d' }}
                  ></div>
                ))}
              </div>

              {/* Latitude circles */}
              <div className="absolute inset-12 rounded-full border-2 border-[#00D9FF]/30">
                <div className="absolute inset-1/4 rounded-full border border-[#00D9FF]/20"></div>
                <div className="absolute inset-0 top-1/4 bottom-auto h-px bg-[#00D9FF]/20"></div>
                <div className="absolute inset-0 top-1/2 bottom-auto h-px bg-[#00D9FF]/20"></div>
                <div className="absolute inset-0 top-3/4 bottom-auto h-px bg-[#00D9FF]/20"></div>
              </div>

              {/* Connection Points */}
              {[
                { top: '20%', left: '30%', delay: '0s' },
                { top: '35%', right: '25%', delay: '0.5s' },
                { top: '60%', left: '40%', delay: '1s' },
                { top: '70%', right: '35%', delay: '1.5s' },
                { top: '45%', left: '55%', delay: '2s' }
              ].map((point, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-[#00D9FF] rounded-full animate-ping"
                  style={{ ...point, animationDelay: point.delay }}
                ></div>
              ))}

              {/* Center glow */}
              <div className="absolute inset-1/3 rounded-full bg-[#00D9FF] blur-3xl opacity-20 animate-pulse"></div>
            </div>

            {/* Stats around globe */}
            <div className="absolute -top-4 left-8 glass-morphism rounded-lg px-4 py-2">
              <div className="text-[#0A4D68] font-bold">North America</div>
              <div className="text-sm text-gray-600">32ms avg</div>
            </div>
            <div className="absolute top-1/4 -right-8 glass-morphism rounded-lg px-4 py-2">
              <div className="text-[#0A4D68] font-bold">Europe</div>
              <div className="text-sm text-gray-600">28ms avg</div>
            </div>
            <div className="absolute bottom-1/4 -left-8 glass-morphism rounded-lg px-4 py-2">
              <div className="text-[#0A4D68] font-bold">Asia</div>
              <div className="text-sm text-gray-600">41ms avg</div>
            </div>
            <div className="absolute -bottom-4 right-1/4 glass-morphism rounded-lg px-4 py-2">
              <div className="text-[#0A4D68] font-bold">South America</div>
              <div className="text-sm text-gray-600">38ms avg</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0A4D68] to-[#084a5e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your media workflow?
          </h2>
          <p className="text-xl mb-12 text-gray-200">
            Join thousands of developers building faster with Karoiz.online
          </p>
          <button 
            className="bg-[#00D9FF] text-[#0F1419] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-smooth"
            data-testid="final-cta-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Start Free Today
          </button>
          <p className="text-sm text-gray-300 mt-6">5GB storage • 10GB bandwidth • No credit card required</p>
        </div>
      </section>

      <Footer />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Landing;