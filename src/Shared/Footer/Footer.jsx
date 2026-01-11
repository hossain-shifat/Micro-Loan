import React from 'react';
import { Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../../Components/Logo/Logo';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Logo />
                        <p className="font-bold text-lg text-base-content">
                            Liberty National Bank Ltd.
                        </p>
                        <p className="text-sm text-base-content/70">
                            Providing reliable financial services since 2002
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-base-content">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/careers" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-base-content">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/privacy-policy" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-service" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/security" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Security
                                </a>
                            </li>
                            <li>
                                <a href="/compliance" className="text-base-content/70 hover:text-primary transition-colors text-sm">
                                    Compliance
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-base-content">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                                <span className="text-sm text-base-content/70">
                                    123 Banking Street<br />
                                    Dhaka 1000, Bangladesh
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 shrink-0 text-primary" />
                                <a href="tel:+8801234567890" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    +880 1234-567890
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 shrink-0 text-primary" />
                                <a href="mailto:info@libertybank.com" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    info@libertybank.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-base-300 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-base-content/70 text-center md:text-left">
                            Copyright © {new Date().getFullYear()} Liberty National Bank Ltd. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/libertybank"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base-content/70 hover:text-primary transition-colors"
                                aria-label="Follow us on Twitter"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://youtube.com/@libertybank"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base-content/70 hover:text-primary transition-colors"
                                aria-label="Subscribe to our YouTube channel"
                            >
                                <Youtube className="w-6 h-6" />
                            </a>
                            <a
                                href="https://facebook.com/libertybank"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-base-content/70 hover:text-primary transition-colors"
                                aria-label="Follow us on Facebook"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
