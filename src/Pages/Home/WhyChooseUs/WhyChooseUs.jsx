import React from 'react';
import { Shield, Clock, Award, HeadphonesIcon, CreditCard, FileCheck } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: Shield,
            title: "Secure & Trusted",
            description: "Bank-level security with encrypted data protection and compliance with financial regulations",
            color: "primary"
        },
        {
            id: 2,
            icon: Clock,
            title: "Fast Approval",
            description: "Get your loan approved within 24-48 hours with our streamlined verification process",
            color: "secondary"
        },
        {
            id: 3,
            icon: CreditCard,
            title: "Flexible Repayment",
            description: "Choose from multiple EMI plans that fit your budget and financial situation",
            color: "accent"
        },
        {
            id: 4,
            icon: Award,
            title: "Low Interest Rates",
            description: "Competitive rates starting from 8% with transparent fees and no hidden charges",
            color: "success"
        },
        {
            id: 5,
            icon: HeadphonesIcon,
            title: "24/7 Support",
            description: "Dedicated customer support team ready to assist you at every step of your journey",
            color: "info"
        },
        {
            id: 6,
            icon: FileCheck,
            title: "Minimal Documentation",
            description: "Simple application process with minimal paperwork and quick verification",
            color: "warning"
        }
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-heading text-base-content mb-4">
                    Why Choose LoanLink?
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                    We provide more than just loans - we're your financial partner in growth
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="group p-6 rounded-xl border border-base-300 bg-base-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className={`bg-${feature.color}/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                            <feature.icon className={`w-7 h-7 text-${feature.color}`} />
                        </div>
                        <h3 className="text-xl font-bold font-heading text-base-content mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-base-content/70 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
