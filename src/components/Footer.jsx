import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F1419] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_mediastorage/artifacts/r5f8v1qk_logo_kairoz.png"
                alt="Karoiz.online"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Karoiz.online</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Media infrastructure for modern teams. Upload, transform, and deliver globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-smooth" data-testid="footer-twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-smooth" data-testid="footer-github">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-smooth" data-testid="footer-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00D9FF] transition-smooth" data-testid="footer-email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Features
                </a>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  SDKs
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Karoiz.online. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                Status
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                Changelog
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth text-sm">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;