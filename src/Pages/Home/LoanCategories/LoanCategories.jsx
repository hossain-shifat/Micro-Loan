import React from 'react';
import { Link } from 'react-router';
import { Store, GraduationCap, Home, Briefcase, Tractor, Heart, Zap, PiggyBank } from 'lucide-react';

const LoanCategories = () => {
    const categories = [
        {
            id: 1,
            icon: Store,
            title: "Business Loans",
            description: "Fund your business expansion and working capital needs",
            amount: "Up to $50,000",
            interest: "8% - 12%",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            icon: GraduationCap,
            title: "Education Loans",
            description: "Invest in your future with affordable education financing",
            amount: "Up to $30,000",
            interest: "7% - 10%",
            gradient: "from-purple-500 to-purple-600"
        },
        {
            id: 3,
            icon: Home,
            title: "Home Improvement",
            description: "Renovate and upgrade your home with flexible terms",
            amount: "Up to $40,000",
            interest: "9% - 13%",
            gradient: "from-green-500 to-green-600"
        },
        {
            id: 4,
            icon: Tractor,
            title: "Agriculture Loans",
            description: "Support your farming needs with specialized agricultural loans",
            amount: "Up to $25,000",
            interest: "6% - 9%",
            gradient: "from-yellow-500 to-yellow-600"
        },
        {
            id: 5,
            icon: Heart,
            title: "Medical Loans",
            description: "Emergency medical expenses covered with quick approval",
            amount: "Up to $20,000",
            interest: "8% - 11%",
            gradient: "from-red-500 to-red-600"
        },
        {
            id: 6,
            icon: Briefcase,
            title: "Personal Loans",
            description: "General purpose loans for your personal needs",
            amount: "Up to $15,000",
            interest: "10% - 14%",
            gradient: "from-indigo-500 to-indigo-600"
        },
        {
            id: 7,
            icon: Zap,
            title: "Emergency Loans",
            description: "Quick cash for urgent financial requirements",
            amount: "Up to $10,000",
            interest: "12% - 15%",
            gradient: "from-orange-500 to-orange-600"
        },
        {
            id: 8,
            icon: PiggyBank,
            title: "Women Empowerment",
            description: "Special loans for women entrepreneurs with better rates",
            amount: "Up to $35,000",
            interest: "7% - 10%",
            gradient: "from-pink-500 to-pink-600"
        }
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-heading text-base-content mb-4">
                    Loan Categories
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                    Explore our diverse range of loan options tailored to meet your specific needs
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="group relative overflow-hidden rounded-xl border border-base-300 bg-base-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

                        <div className="p-6 relative z-10">
                            <div className={`bg-gradient-to-br ${category.gradient} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-xl font-bold font-heading text-base-content mb-2">
                                {category.title}
                            </h3>

                            <p className="text-sm text-base-content/70 mb-4 leading-relaxed">
                                {category.description}
                            </p>

                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-base-content/60">Max Amount:</span>
                                    <span className="text-sm font-semibold text-primary">{category.amount}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-base-content/60">Interest:</span>
                                    <span className="text-sm font-semibold text-secondary">{category.interest}</span>
                                </div>
                            </div>

                            <Link
                                to="/all-loans"
                                className="block text-center px-4 py-2 bg-base-200 hover:bg-primary hover:text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                Explore Loans
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LoanCategories;
