import React from 'react';
import { CheckCircle, TrendingUp, Shield, Users, Clock, FileText } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            icon: <TrendingUp className="w-12 h-12" />,
            title: "Microloan Processing",
            description: "Fast and efficient microloan processing with competitive interest rates tailored to your financial needs.",
            features: ["Quick approval process", "Flexible loan amounts", "Transparent terms"]
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Secure Application",
            description: "Your data is protected with industry-standard encryption and secure verification processes.",
            features: ["End-to-end encryption", "Identity verification", "Data privacy guaranteed"]
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "Dedicated Support",
            description: "Our loan officers provide personalized assistance throughout your loan journey.",
            features: ["24/7 customer support", "Expert consultation", "Application guidance"]
        },
        {
            icon: <Clock className="w-12 h-12" />,
            title: "Flexible EMI Plans",
            description: "Choose from multiple EMI options that fit your budget and repayment capability.",
            features: ["Customizable plans", "Early repayment options", "Grace period available"]
        },
        {
            icon: <FileText className="w-12 h-12" />,
            title: "Digital Documentation",
            description: "Streamlined digital document submission and management for hassle-free applications.",
            features: ["Paperless process", "Document tracking", "Instant verification"]
        },
        {
            icon: <CheckCircle className="w-12 h-12" />,
            title: "Real-time Tracking",
            description: "Monitor your loan application status and repayment schedule in real-time through our dashboard.",
            features: ["Application tracking", "Payment reminders", "Status notifications"]
        }
    ];

    const benefits = [
        "Low interest rates starting from 5%",
        "No hidden charges or processing fees",
        "Loans up to $50,000 for qualified borrowers",
        "Same-day approval for eligible applications",
        "Flexible repayment terms from 6 to 60 months",
        "No prepayment penalties"
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                            Our Services
                        </h1>
                        <p className="text-lg text-base-content/70 mb-8">
                            Comprehensive microloan solutions designed to empower individuals and small businesses with accessible financial services.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="card-body">
                                <div className="text-primary mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="card-title text-2xl mb-3 text-base-content">
                                    {service.title}
                                </h3>
                                <p className="text-base-content/70 mb-4">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                                            <span className="text-base-content/80">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-base-200 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                            Why Choose LoanLink?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 bg-base-100 p-6 rounded-lg shadow-md"
                                >
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        <CheckCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <p className="text-base-content text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/90 text-lg mb-8">
                        Apply for a microloan today and take the first step towards achieving your financial goals.
                    </p>
                    <button className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none">
                        Apply for Loan Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
