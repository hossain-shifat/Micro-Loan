import React from 'react';
import { Users, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';

const Statistics = () => {
    const stats = [
        {
            id: 1,
            icon: Users,
            value: "50,000+",
            label: "Active Borrowers",
            color: "text-primary",
            bgColor: "bg-primary/10"
        },
        {
            id: 2,
            icon: DollarSign,
            value: "$25M+",
            label: "Loans Disbursed",
            color: "text-secondary",
            bgColor: "bg-secondary/10"
        },
        {
            id: 3,
            icon: CheckCircle,
            value: "95%",
            label: "Approval Rate",
            color: "text-success",
            bgColor: "bg-success/10"
        },
        {
            id: 4,
            icon: TrendingUp,
            value: "98%",
            label: "Repayment Success",
            color: "text-accent",
            bgColor: "bg-accent/10"
        }
    ];

    return (
        <section className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-heading text-base-content mb-4">
                    Our Impact in Numbers
                </h2>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                    Empowering communities through accessible microfinance solutions
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="stat-card hover:scale-105 transition-transform duration-300"
                    >
                        <div className={`${stat.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                        <h3 className="text-4xl font-bold font-heading text-base-content mb-2">
                            {stat.value}
                        </h3>
                        <p className="text-base-content/70 font-medium">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Statistics;
