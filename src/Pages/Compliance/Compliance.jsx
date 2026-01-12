import React from 'react';
import { Scale, CheckCircle, FileText, Globe, Users, ShieldCheck, AlertCircle, BookOpen, Calendar } from 'lucide-react';

const Compliance = () => {
    const lastUpdated = "January 12, 2026";

    const complianceAreas = [
        {
            icon: Scale,
            title: "Financial Regulations",
            description: "Full compliance with Bangladesh Bank regulations and microcredit guidelines for financial institutions.",
            color: "primary"
        },
        {
            icon: ShieldCheck,
            title: "Data Protection",
            description: "GDPR-aligned data protection practices ensuring user privacy and data security across all operations.",
            color: "secondary"
        },
        {
            icon: Users,
            title: "Consumer Protection",
            description: "Adherence to consumer protection laws ensuring fair lending practices and transparent terms.",
            color: "info"
        },
        {
            icon: Globe,
            title: "International Standards",
            description: "Compliance with ISO standards for information security management and quality assurance.",
            color: "success"
        }
    ];

    const sections = [
        {
            icon: Scale,
            title: "Regulatory Compliance",
            content: [
                {
                    subtitle: "Bangladesh Bank Guidelines",
                    text: "LoanLink operates in full compliance with the Bangladesh Bank's regulations for microcredit institutions. We maintain proper licensing, adhere to interest rate caps, and follow prescribed lending practices."
                },
                {
                    subtitle: "Microfinance Regulatory Authority (MRA)",
                    text: "We comply with MRA guidelines for microcredit operations, including capital adequacy requirements, loan portfolio standards, and reporting obligations."
                },
                {
                    subtitle: "Anti-Money Laundering (AML)",
                    text: "We implement robust AML procedures including Know Your Customer (KYC) verification, transaction monitoring, and suspicious activity reporting to prevent financial crimes."
                },
                {
                    subtitle: "Counter-Terrorism Financing (CTF)",
                    text: "Our systems include screening mechanisms to prevent funds from being used for terrorist financing, in compliance with international and national CTF regulations."
                }
            ]
        },
        {
            icon: ShieldCheck,
            title: "Data Protection and Privacy",
            content: [
                {
                    subtitle: "GDPR Compliance",
                    text: "Although based in Bangladesh, we align our practices with GDPR principles including data minimization, purpose limitation, transparency, and user rights to access, rectify, and delete data."
                },
                {
                    subtitle: "Digital Security Act, 2018",
                    text: "We comply with Bangladesh's Digital Security Act by implementing appropriate security measures to protect digital information and prevent unauthorized access."
                },
                {
                    subtitle: "Data Localization",
                    text: "Critical financial and personal data is stored within Bangladesh in compliance with local data localization requirements, with encrypted backups in secure locations."
                },
                {
                    subtitle: "Consent Management",
                    text: "We obtain explicit consent before collecting personal data and provide clear opt-in/opt-out mechanisms for marketing communications and data processing activities."
                }
            ]
        },
        {
            icon: Users,
            title: "Consumer Protection",
            content: [
                {
                    subtitle: "Fair Lending Practices",
                    text: "We ensure non-discriminatory lending practices, transparent interest rates, and clear disclosure of all loan terms and conditions before application approval."
                },
                {
                    subtitle: "Truth in Lending",
                    text: "All loan agreements clearly disclose APR, total cost of credit, payment schedules, and any fees or penalties in simple, understandable language."
                },
                {
                    subtitle: "Responsible Lending",
                    text: "We assess borrower affordability and repayment capacity to prevent over-indebtedness, following responsible lending guidelines."
                },
                {
                    subtitle: "Complaint Resolution",
                    text: "We maintain a structured complaint handling process with clear escalation procedures and commit to resolving disputes fairly and promptly."
                }
            ]
        },
        {
            icon: FileText,
            title: "Operational Compliance",
            content: [
                {
                    subtitle: "Record Keeping",
                    text: "We maintain comprehensive records of all transactions, loan applications, approvals, disbursements, and repayments as required by financial regulations."
                },
                {
                    subtitle: "Audit Trail",
                    text: "Our systems maintain detailed audit trails of all user activities, system changes, and data modifications for compliance verification and dispute resolution."
                },
                {
                    subtitle: "Reporting Obligations",
                    text: "We submit regular reports to regulatory authorities including financial statements, loan portfolio analysis, and compliance certifications as required."
                },
                {
                    subtitle: "Document Retention",
                    text: "We retain documents and records for periods specified by law, typically 7 years for financial records, with secure archival and retrieval systems."
                }
            ]
        },
        {
            icon: BookOpen,
            title: "Ethical Standards",
            content: [
                {
                    subtitle: "Code of Conduct",
                    text: "All LoanLink employees, loan officers, and administrators adhere to a strict code of conduct emphasizing integrity, fairness, and professionalism."
                },
                {
                    subtitle: "Conflict of Interest",
                    text: "We maintain policies to identify and manage conflicts of interest, ensuring loan decisions are made objectively without personal bias."
                },
                {
                    subtitle: "Confidentiality",
                    text: "Staff members are bound by confidentiality agreements and can only access customer information necessary for their roles."
                },
                {
                    subtitle: "Whistleblower Protection",
                    text: "We encourage reporting of unethical behavior or compliance violations and protect whistleblowers from retaliation."
                }
            ]
        },
        {
            icon: CheckCircle,
            title: "Quality Assurance",
            content: [
                {
                    subtitle: "ISO 27001 Alignment",
                    text: "Our information security management practices align with ISO 27001 standards for protecting sensitive information."
                },
                {
                    subtitle: "Internal Audits",
                    text: "We conduct regular internal audits of our compliance processes, security measures, and operational procedures."
                },
                {
                    subtitle: "Third-Party Assessments",
                    text: "Independent third-party auditors periodically review our compliance programs to ensure effectiveness and identify improvement areas."
                },
                {
                    subtitle: "Continuous Improvement",
                    text: "We maintain a compliance improvement program that regularly updates policies and procedures based on regulatory changes and best practices."
                }
            ]
        },
        {
            icon: AlertCircle,
            title: "Risk Management",
            content: [
                {
                    subtitle: "Credit Risk Assessment",
                    text: "We employ systematic credit assessment procedures to evaluate borrower creditworthiness and ability to repay loans."
                },
                {
                    subtitle: "Fraud Prevention",
                    text: "Our fraud detection systems monitor applications and transactions for suspicious patterns, with procedures to investigate and report fraud."
                },
                {
                    subtitle: "Operational Risk",
                    text: "We identify, assess, and mitigate operational risks through documented procedures, staff training, and system controls."
                },
                {
                    subtitle: "Business Continuity",
                    text: "We maintain business continuity and disaster recovery plans to ensure service availability during emergencies or system failures."
                }
            ]
        }
    ];

    const certifications = [
        {
            title: "Licensed Financial Institution",
            description: "Registered with Bangladesh Bank as a microfinance institution",
            status: "Active"
        },
        {
            title: "MRA Compliance",
            description: "Certified by Microfinance Regulatory Authority",
            status: "Current"
        },
        {
            title: "Data Protection",
            description: "GDPR-aligned data protection framework",
            status: "Verified"
        },
        {
            title: "ISO 27001 Alignment",
            description: "Information security management standards",
            status: "Compliant"
        }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-info/10 via-base-100 to-primary/10 py-16 px-4 border-b border-base-300">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-3 bg-info/10 rounded-full mb-4">
                        <Scale className="text-info" size={48} />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content mb-4">
                        Compliance & <span className="text-primary">Regulations</span>
                    </h1>
                    <p className="text-lg text-base-content/70 mb-4">
                        LoanLink operates with full regulatory compliance, ensuring trust, transparency, and accountability in all our operations.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-base-content/60">
                        <Calendar size={16} />
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </div>
            </div>

            {/* Compliance Areas */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-base-content text-center mb-8">Our Compliance Framework</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {complianceAreas.map((area, index) => (
                        <div
                            key={index}
                            className="bg-base-100 p-6 rounded-xl border border-base-300 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            <div className={`w-16 h-16 bg-${area.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <area.icon className={`text-${area.color}`} size={28} />
                            </div>
                            <h3 className="font-bold text-base-content mb-2">{area.title}</h3>
                            <p className="text-sm text-base-content/60 leading-relaxed">{area.description}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <div className="bg-base-200/50 rounded-2xl p-8 mb-12 border border-base-300">
                        <h2 className="text-2xl font-bold text-base-content mb-4">Our Commitment to Compliance</h2>
                        <p className="text-base-content/80 leading-relaxed mb-4">
                            LoanLink is committed to operating with the highest standards of regulatory compliance, ethical conduct, and transparency. We recognize that trust is fundamental to our relationship with borrowers, partners, and regulatory authorities.
                        </p>
                        <p className="text-base-content/80 leading-relaxed">
                            This page outlines our compliance framework, regulatory adherence, and the measures we take to ensure we meet all legal and ethical obligations in the microfinance sector.
                        </p>
                    </div>

                    {/* Compliance Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="scroll-mt-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <section.icon className="text-info" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-base-content mb-1">{section.title}</h2>
                                        <div className="h-1 w-20 bg-info rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {section.content.map((item, itemIndex) => (
                                        <div key={itemIndex} className="bg-base-100 rounded-xl p-6 border border-base-300 hover:border-info/50 transition-colors">
                                            <h3 className="text-lg font-bold text-base-content mb-3">{item.subtitle}</h3>
                                            <p className="text-base-content/70 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-base-content mb-4">Licenses & Certifications</h2>
                            <p className="text-base-content/60">Our regulatory approvals and compliance certifications</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between bg-base-100 p-6 rounded-xl border border-base-300 hover:border-info/50 transition-colors"
                                >
                                    <div className="flex gap-4">
                                        <CheckCircle className="text-success flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <h3 className="font-bold text-base-content mb-1">{cert.title}</h3>
                                            <p className="text-sm text-base-content/70">{cert.description}</p>
                                        </div>
                                    </div>
                                    <span className="badge badge-success badge-lg">{cert.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Regulatory Authorities */}
                    <div className="mt-16 bg-gradient-to-br from-info/5 to-primary/5 rounded-2xl p-8 border border-info/20">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-base-content mb-2">Regulatory Oversight</h2>
                            <p className="text-base-content/70">
                                We are regulated and supervised by the following authorities
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-base-100 p-6 rounded-xl border border-base-300 text-center">
                                <Globe className="mx-auto text-info mb-3" size={32} />
                                <h3 className="font-bold text-base-content mb-2">Bangladesh Bank</h3>
                                <p className="text-sm text-base-content/60">Central bank and primary financial regulator</p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-xl border border-base-300 text-center">
                                <Scale className="mx-auto text-info mb-3" size={32} />
                                <h3 className="font-bold text-base-content mb-2">MRA</h3>
                                <p className="text-sm text-base-content/60">Microfinance Regulatory Authority</p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-xl border border-base-300 text-center">
                                <ShieldCheck className="mx-auto text-info mb-3" size={32} />
                                <h3 className="font-bold text-base-content mb-2">Ministry of Finance</h3>
                                <p className="text-sm text-base-content/60">Government financial oversight</p>
                            </div>
                        </div>
                    </div>

                    {/* Compliance Contact */}
                    <div className="mt-8 bg-base-200/50 rounded-xl p-6 border border-base-300">
                        <h3 className="text-lg font-bold text-base-content mb-3">Compliance Inquiries</h3>
                        <p className="text-base-content/70 leading-relaxed mb-4">
                            For questions about our compliance practices, regulatory adherence, or to report compliance concerns, please contact our dedicated compliance team.
                        </p>
                        <div className="space-y-2 text-base-content/80">
                            <p><strong>Compliance Officer:</strong> compliance@loanlink.com</p>
                            <p><strong>Legal Department:</strong> legal@loanlink.com</p>
                            <p><strong>General Support:</strong> support@loanlink.com</p>
                            <p><strong>Phone:</strong> +880 1234-567890</p>
                            <p><strong>Address:</strong> Savar, Dhaka - 1340, Bangladesh</p>
                        </div>
                    </div>

                    {/* Regular Updates */}
                    <div className="mt-8 bg-base-200/50 rounded-xl p-6 border border-base-300">
                        <h3 className="text-lg font-bold text-base-content mb-3">Compliance Updates</h3>
                        <p className="text-base-content/70 leading-relaxed">
                            We continuously monitor regulatory changes and update our compliance practices accordingly. This page is regularly reviewed and updated to reflect our current compliance status and any changes in applicable regulations. All users are encouraged to review this page periodically.
                        </p>
                    </div>

                    {/* Acknowledgment */}
                    <div className="mt-8 text-center p-6 bg-info/5 rounded-xl border border-info/20">
                        <p className="text-base-content/70 text-sm">
                            LoanLink's commitment to compliance ensures a trustworthy, transparent, and legally sound platform for all stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compliance;
