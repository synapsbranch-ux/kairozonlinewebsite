import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What file formats are supported?',
      answer: 'We support all major media formats including videos (MP4, MOV, AVI, WebM), images (JPEG, PNG, WebP, HEIC), and audio files (MP3, WAV, AAC). Files are automatically converted to web-optimized formats.'
    },
    {
      question: 'How does the free plan work?',
      answer: 'The free plan includes 5GB of storage and 10GB of bandwidth per month. Perfect for personal projects and testing. No credit card required to start, and you can upgrade anytime.'
    },
    {
      question: 'Can I use Karoiz.online for commercial projects?',
      answer: 'Yes! All our plans support commercial use. The Pro and Business plans are specifically designed for commercial projects with higher storage and bandwidth limits.'
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.99% uptime for all paid plans. Our infrastructure is built on multiple cloud providers with automatic failover to ensure your content is always available.'
    },
    {
      question: 'How fast is content delivery?',
      answer: 'Our global CDN delivers content from the edge location closest to your users. Average latency is under 50ms worldwide, with automatic caching and optimization.'
    },
    {
      question: 'Can I migrate from another platform?',
      answer: 'Yes! We provide migration tools and support to help you move from platforms like Cloudinary, Uploadcare, or AWS S3. Contact our team for assistance.'
    },
    {
      question: 'Do you offer custom enterprise plans?',
      answer: 'Yes, we offer custom enterprise plans with dedicated infrastructure, custom SLAs, and advanced features. Contact our sales team to discuss your requirements.'
    },
    {
      question: 'How secure is my content?',
      answer: 'All content is encrypted at rest and in transit. We offer password-protected links, expiring URLs, and IP whitelisting for sensitive content. SOC 2 and GDPR compliant.'
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-gradient-to-b from-white to-[#F8FAFB]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#00D9FF]/10 rounded-full text-[#0A4D68] font-semibold text-sm mb-4">
            FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently asked
            <span className="text-[#0A4D68]"> questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Karoiz.online
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} data-testid={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
