"use client";

import { useState } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import DefaultPage from "@/components/templates/page/default";
import PageSection from "@/components/ui/page-section";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Form submission functionality can be integrated with your preferred backend service");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DefaultPage className="text-left">
      {/* Hero Section */}
      <PageSection>
        {/* Background monster artwork */}
        <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
          <Image
            src="/images/lizardman.png"
            alt=""
            width={1200}
            height={1200}
            className="object-contain w-full h-full"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-crimson rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pt-12">
          <h1 className="font-display text-6xl md:text-8xl text-crimson fire-glow my-6">
            CONTACT
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/80">
            Enter the congregation. Join the darkness.
          </p>
          <div className="section-divider" />
        </div>
      </PageSection>

      {/* Contact Form Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-4xl text-heat fire-glow mb-6">
                  GET IN TOUCH
                </h2>
                <p className="text-white/80 font-body leading-relaxed mb-6">
                  Whether you&apos;re interested in booking THEOSIS for a show, collaborating,
                  or just want to connect, we&apos;d love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="card p-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/icons/64/email.png"
                      alt="Email"
                      width={32}
                      height={32}
                      className="opacity-80"
                    />
                    <div>
                      <h3 className="font-heading text-heat text-lg">Email</h3>
                      <a
                        href="mailto:contact@theosis.com"
                        className="text-white/70 hover:text-crimson transition-colors font-body"
                      >
                        contact@theosis.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card p-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/icons/64/location-pin.png"
                      alt="Location"
                      width={32}
                      height={32}
                      className="opacity-80"
                    />
                    <div>
                      <h3 className="font-heading text-heat text-lg">Location</h3>
                      <p className="text-white/70 font-body">San Diego, California</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/images/icons/64/share.png"
                      alt="Social Media"
                      width={32}
                      height={32}
                      className="opacity-80"
                    />
                    <div>
                      <h3 className="font-heading text-heat text-lg">Social Media</h3>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-white/70 hover:text-crimson transition-colors">
                          Facebook
                        </a>
                        <a href="#" className="text-white/70 hover:text-crimson transition-colors">
                          Instagram
                        </a>
                        <a href="#" className="text-white/70 hover:text-crimson transition-colors">
                          YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Info */}
              <div className="gothic-border p-6 bg-ooze/10">
                <h3 className="font-heading text-2xl text-crimson mb-4">Booking Info</h3>
                <p className="text-white/70 font-body leading-relaxed mb-4">
                  For booking inquiries, please include:
                </p>
                <ul className="space-y-2 text-white/70 font-body">
                  <li className="flex items-start space-x-2">
                    <span className="text-heat">•</span>
                    <span>Venue name and location</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-heat">•</span>
                    <span>Preferred date(s)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-heat">•</span>
                    <span>Event details and expected attendance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-heat">•</span>
                    <span>Budget and compensation details</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8 text-left">
              <h2 className="font-heading text-3xl text-heat mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-heading text-white/80 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-darkness border-2 border-ooze focus:border-heat outline-none text-white font-body transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-heading text-white/80 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-darkness border-2 border-ooze focus:border-heat outline-none text-white font-body transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-heading text-white/80 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-darkness border-2 border-ooze focus:border-heat outline-none text-white font-body transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press & Media</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-heading text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-darkness border-2 border-ooze focus:border-heat outline-none text-white font-body transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>

                <p className="text-white/40 text-sm font-body text-center">
                  Form submission can be integrated with your preferred backend service
                </p>
              </form>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Mailing List Section */}
      <PageSection>
        <div className="max-w-3xl mx-auto">
          <div className="section-divider" />
          <div className="card p-12 text-center space-y-6">
            <h2 className="font-display text-5xl text-crimson fire-glow">
              JOIN THE CONGREGATION
            </h2>
            <p className="font-heading text-xl text-white/80">
              Subscribe to our mailing list for exclusive updates, show announcements,
              and new releases.
            </p>

            <div className="max-w-md mx-auto pt-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-6 py-4 bg-darkness border-2 border-ooze focus:border-heat outline-none text-white font-body transition-colors"
                />
                <button className="btn-primary w-full">
                  Subscribe
                </button>
              </div>
              <p className="text-white/40 text-sm font-body mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Map/Location Section (Optional) */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider" />
          <h2 className="font-display text-5xl text-heat fire-glow mb-8">
            SAN DIEGO METAL
          </h2>
          <p className="font-heading text-xl text-white/70 mb-8">
            Proud to be part of the San Diego metal scene
          </p>
          <div className="card p-8 space-y-4">
            <p className="text-white/80 font-body leading-relaxed">
              THEOSIS is based in San Diego, California, where we&apos;ve been contributing to
              the vibrant local metal scene since 2012. From intimate club shows to larger
              festival stages, we&apos;re committed to bringing our brand of melodic death metal
              to audiences throughout Southern California and beyond.
            </p>
            <p className="text-white/60 font-body">
              Interested in bringing THEOSIS to your venue or event? Get in touch above!
            </p>
          </div>
        </div>
      </PageSection>

      {/* Final CTA */}
      <PageSection className="text-center mt-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-heat rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-display text-5xl text-crimson fire-glow">
            THE RITUAL AWAITS
          </h2>
          <p className="font-heading text-lg text-white/70">
            Thank you for your interest in THEOSIS. We look forward to hearing from you.
          </p>
        </div>
      </PageSection>
    </DefaultPage>
  );
}
