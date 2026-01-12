import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

const CallToAction = () => {
    const benefits = [
        "No hidden fees or charges",
        "Quick approval in 24-48 hours",
        "Flexible repayment options",
        "Expert financial guidance"
    ];

    return (
        <section className="py-16">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-base-100 to-base-300/20 p-12 md:p-16 border border-base-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                {/* Subtle Decorative Accent */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Shield className="w-4 h-4" />
                        <span>Trusted Financial Partner</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-base-content mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Take the first step towards achieving your financial goals. Apply for a loan today and experience hassle-free lending.
                    </p>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center justify-center md:justify-start gap-3 text-base-content bg-base-100 rounded-lg p-4 border border-base-300 hover:border-primary/30 hover:shadow-md transition-all">
                                <div className="bg-primary/10 p-1 rounded-full">
                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                </div>
                                <span className="text-base font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/all-loans"
                            className="group px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 border-2 border-base-300 bg-base-100 text-base-content rounded-lg font-bold text-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-10 flex items-center justify-center gap-2 text-base-content/60 text-sm">
                        <Shield className="w-4 h-4" />
                        <span>Secure Application</span>
                        <span className="text-base-content/40">•</span>
                        <span>Trusted by 50,000+ Borrowers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
