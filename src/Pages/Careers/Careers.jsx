import React, { useState } from 'react';
import { Briefcase, Users, TrendingUp, Award, Coffee, Heart, MapPin, Clock, DollarSign } from 'lucide-react';

const CareersPage = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const jobOpenings = [
        {
            id: 1,
            title: "Loan Officer",
            department: "Operations",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            salary: "$800 - $1,200/month",
            description: "Review and process loan applications, conduct client interviews, and ensure compliance with lending policies.",
            requirements: ["Bachelor's degree in Finance or related field", "2+ years experience in banking/microfinance", "Strong analytical skills"]
        },
        {
            id: 2,
            title: "Senior Full Stack Developer",
            department: "Technology",
            location: "Remote",
            type: "Full-time",
            salary: "$2,000 - $3,500/month",
            description: "Build and maintain our microloan platform using modern web technologies including React, Node.js, and MongoDB.",
            requirements: ["5+ years experience in full-stack development", "Proficiency in React, Node.js, MongoDB", "Experience with payment integrations"]
        },
        {
            id: 3,
            title: "Credit Risk Analyst",
            department: "Risk Management",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            salary: "$1,000 - $1,500/month",
            description: "Analyze borrower creditworthiness, develop risk models, and provide recommendations for loan approvals.",
            requirements: ["Bachelor's degree in Finance, Economics, or Statistics", "Strong data analysis skills", "Experience with risk assessment tools"]
        },
        {
            id: 4,
            title: "Customer Support Specialist",
            department: "Customer Service",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            salary: "$500 - $700/month",
            description: "Provide exceptional support to borrowers, answer inquiries, and resolve issues related to loan applications and repayments.",
            requirements: ["Excellent communication skills", "Customer service experience", "Fluency in English and Bengali"]
        },
        {
            id: 5,
            title: "Marketing Manager",
            department: "Marketing",
            location: "Hybrid",
            type: "Full-time",
            salary: "$1,200 - $1,800/month",
            description: "Develop and execute marketing strategies to promote our microloan services and increase borrower acquisition.",
            requirements: ["Bachelor's degree in Marketing", "3+ years in digital marketing", "Experience in fintech or financial services"]
        },
        {
            id: 6,
            title: "UI/UX Designer",
            department: "Technology",
            location: "Remote",
            type: "Full-time",
            salary: "$1,000 - $1,600/month",
            description: "Design intuitive user interfaces for our loan platform, create wireframes, and conduct user research.",
            requirements: ["Portfolio showcasing web/mobile designs", "Proficiency in Figma/Adobe XD", "Understanding of user-centered design"]
        }
    ];

    const benefits = [
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Health Insurance",
            description: "Comprehensive health coverage for you and your family"
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Flexible Hours",
            description: "Work-life balance with flexible working arrangements"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Career Growth",
            description: "Professional development and advancement opportunities"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Performance Bonus",
            description: "Annual bonuses based on individual and company performance"
        }
    ];

    const departments = ['all', 'Technology', 'Operations', 'Risk Management', 'Customer Service', 'Marketing'];

    const filteredJobs = selectedDepartment === 'all'
        ? jobOpenings
        : jobOpenings.filter(job => job.department === selectedDepartment);

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-6">
                            Join Our Team
                        </h1>
                        <p className="text-lg text-base-content/70 mb-8">
                            Be part of a mission-driven organization that's making financial services accessible to everyone. Build your career while making a real impact.
                        </p>
                    </div>
                </div>
            </div>

            {/* Company Culture */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                        Why Work at LoanLink?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="card-body items-center text-center">
                                    <div className="text-primary mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="card-title text-xl mb-2 text-base-content">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-base-content/70">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Job Openings */}
            <div className="bg-base-200 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-base-content">
                            Open Positions
                        </h2>

                        {/* Department Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setSelectedDepartment(dept)}
                                    className={`btn ${selectedDepartment === dept
                                            ? 'btn-primary'
                                            : 'btn-outline'
                                        }`}
                                >
                                    {dept === 'all' ? 'All Positions' : dept}
                                </button>
                            ))}
                        </div>

                        {/* Job Listings */}
                        <div className="space-y-6">
                            {filteredJobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="card-body">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="card-title text-2xl text-base-content mb-2">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="badge badge-primary">{job.department}</span>
                                                    <span className="badge badge-outline">{job.type}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-base-content/80 mb-4">
                                            {job.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                            <div className="flex items-center gap-2 text-base-content/70">
                                                <MapPin className="w-5 h-5 text-primary" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-base-content/70">
                                                <Clock className="w-5 h-5 text-primary" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-base-content/70">
                                                <DollarSign className="w-5 h-5 text-primary" />
                                                <span>{job.salary}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <h4 className="font-bold text-base-content mb-2">Requirements:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-base-content/70">
                                                {job.requirements.map((req, idx) => (
                                                    <li key={idx}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredJobs.length === 0 && (
                            <div className="text-center py-12">
                                <Briefcase className="w-16 h-16 text-base-content/30 mx-auto mb-4" />
                                <p className="text-xl text-base-content/70">
                                    No positions available in this department at the moment.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Application Process */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-base-content">
                        Application Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Apply Online', desc: 'Submit your application through our portal' },
                            { step: '2', title: 'Initial Review', desc: 'Our HR team reviews your application' },
                            { step: '3', title: 'Interview', desc: 'Meet with our hiring team' },
                            { step: '4', title: 'Offer', desc: 'Receive and accept your job offer' }
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-lg text-base-content mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-base-content/70">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-secondary py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Don't See a Perfect Fit?
                        </h2>
                        <p className="text-white/90 text-lg mb-8">
                            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                        </p>
                        <button className="btn btn-lg bg-white text-primary hover:bg-base-100 border-none">
                            Send General Application
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
