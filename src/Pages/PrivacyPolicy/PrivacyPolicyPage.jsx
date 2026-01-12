import React from 'react';
import { Shield, Eye, Lock, Database, Users, Bell, Trash2, FileText, Mail, Calendar } from 'lucide-react';

const PrivacyPolicyPage = () => {
    const lastUpdated = "January 12, 2026";

    const sections = [
        {
            icon: FileText,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "When you register for LoanLink, we collect information such as your name, email address, phone number, national ID or passport number, address, and financial information including income source and monthly income. We also collect profile photos and other information you voluntarily provide."
                },
                {
                    subtitle: "Application Data",
                    text: "When you apply for a loan, we collect detailed information about your loan request, including loan amount, purpose, employment details, and supporting documentation."
                },
                {
                    subtitle: "Usage Information",
                    text: "We automatically collect information about how you interact with our platform, including IP address, browser type, device information, pages visited, and time spent on our site."
                },
                {
                    subtitle: "Payment Information",
                    text: "Payment details are processed securely through Stripe. We do not store complete credit card numbers on our servers. We only retain transaction records and payment status information."
                }
            ]
        },
        {
            icon: Eye,
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your information to process loan applications, verify your identity, assess creditworthiness, communicate application status, and manage your account."
                },
                {
                    subtitle: "Platform Improvement",
                    text: "We analyze usage patterns to improve our services, develop new features, and enhance user experience across the platform."
                },
                {
                    subtitle: "Communication",
                    text: "We send you important notifications about your applications, account updates, security alerts, and promotional materials (which you can opt out of at any time)."
                },
                {
                    subtitle: "Legal Compliance",
                    text: "We use your information to comply with applicable laws, regulations, legal processes, and to prevent fraud and maintain platform security."
                }
            ]
        },
        {
            icon: Users,
            title: "Information Sharing",
            content: [
                {
                    subtitle: "With Loan Officers",
                    text: "Your loan application information is shared with authorized loan officers (managers) who review and process applications. They can only access information necessary for their role."
                },
                {
                    subtitle: "With Service Providers",
                    text: "We share information with trusted third-party service providers who assist us with payment processing (Stripe), hosting services, email communications, and analytics."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may disclose your information when required by law, to respond to legal processes, protect our rights, prevent fraud, or ensure user safety."
                },
                {
                    subtitle: "Business Transfers",
                    text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity."
                }
            ]
        },
        {
            icon: Lock,
            title: "Data Security",
            content: [
                {
                    subtitle: "Encryption",
                    text: "All data transmitted to and from LoanLink is encrypted using industry-standard SSL/TLS protocols. Sensitive data is encrypted at rest in our databases."
                },
                {
                    subtitle: "Access Controls",
                    text: "We implement strict role-based access controls. Only authorized personnel with legitimate business needs can access your personal information."
                },
                {
                    subtitle: "Security Monitoring",
                    text: "Our systems are continuously monitored for suspicious activity, unauthorized access attempts, and security vulnerabilities."
                },
                {
                    subtitle: "Regular Audits",
                    text: "We conduct regular security audits and assessments to ensure our security measures remain effective and up-to-date."
                }
            ]
        },
        {
            icon: Database,
            title: "Data Retention",
            content: [
                {
                    subtitle: "Active Accounts",
                    text: "We retain your information for as long as your account is active or as needed to provide you services and process your loan applications."
                },
                {
                    subtitle: "Legal Requirements",
                    text: "We may retain certain information for longer periods if required by law, for dispute resolution, to enforce our agreements, or for legitimate business purposes."
                },
                {
                    subtitle: "Deletion Requests",
                    text: "You may request deletion of your account and associated data. We will delete your information within 30 days, except where retention is required by law or legitimate business needs."
                }
            ]
        },
        {
            icon: Shield,
            title: "Your Rights and Choices",
            content: [
                {
                    subtitle: "Access and Update",
                    text: "You can access and update your personal information at any time through your profile settings in the dashboard."
                },
                {
                    subtitle: "Data Portability",
                    text: "You have the right to request a copy of your personal data in a structured, machine-readable format."
                },
                {
                    subtitle: "Opt-Out",
                    text: "You can opt out of promotional emails and SMS notifications through your account settings or by clicking unsubscribe links in our communications."
                },
                {
                    subtitle: "Account Deletion",
                    text: "You may request deletion of your account and associated data by contacting our support team at support@loanlink.com."
                }
            ]
        },
        {
            icon: Bell,
            title: "Cookies and Tracking",
            content: [
                {
                    subtitle: "Essential Cookies",
                    text: "We use necessary cookies for authentication, security, and basic platform functionality. These cannot be disabled."
                },
                {
                    subtitle: "Analytics Cookies",
                    text: "We use analytics tools to understand how users interact with our platform. You can opt out through your browser settings or privacy preferences."
                },
                {
                    subtitle: "Third-Party Cookies",
                    text: "Some features may use third-party cookies from services like Stripe for payment processing. These are governed by their respective privacy policies."
                }
            ]
        },
        {
            icon: Users,
            title: "Children's Privacy",
            content: [
                {
                    subtitle: "Age Restriction",
                    text: "LoanLink is not intended for individuals under 18 years of age. We do not knowingly collect information from minors. If you are under 18, please do not use our services."
                },
                {
                    subtitle: "Parental Rights",
                    text: "If we become aware that we have collected information from a minor, we will take immediate steps to delete such information. Parents who believe their child has provided information should contact us immediately."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-16 px-4 border-b border-base-300">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                        <Shield className="text-primary" size={48} />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content mb-4">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <p className="text-lg text-base-content/70 mb-4">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-base-content/60">
                        <Calendar size={16} />
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Introduction */}
                <div className="bg-base-200/50 rounded-2xl p-8 mb-12 border border-base-300">
                    <p className="text-base-content/80 leading-relaxed mb-4">
                        Welcome to LoanLink's Privacy Policy. This document describes how LoanLink ("we", "our", or "us") collects, uses, shares, and protects your personal information when you use our microloan request and approval platform.
                    </p>
                    <p className="text-base-content/80 leading-relaxed">
                        By using LoanLink, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={index} className="scroll-mt-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <section.icon className="text-primary" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-base-content mb-1">{section.title}</h2>
                                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {section.content.map((item, itemIndex) => (
                                    <div key={itemIndex} className="bg-base-100 rounded-xl p-6 border border-base-300 hover:border-primary/50 transition-colors">
                                        <h3 className="text-lg font-bold text-base-content mb-3">{item.subtitle}</h3>
                                        <p className="text-base-content/70 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="text-primary" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-base-content mb-2">Contact Us</h2>
                            <p className="text-base-content/70 mb-4">
                                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                            </p>
                            <div className="space-y-2 text-base-content/80">
                                <p><strong>Email:</strong> privacy@loanlink.com</p>
                                <p><strong>Support:</strong> support@loanlink.com</p>
                                <p><strong>Phone:</strong> +880 1234-567890</p>
                                <p><strong>Address:</strong> Savar, Dhaka - 1340, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Changes to Policy */}
                <div className="mt-8 bg-base-200/50 rounded-xl p-6 border border-base-300">
                    <h3 className="text-lg font-bold text-base-content mb-3">Changes to This Privacy Policy</h3>
                    <p className="text-base-content/70 leading-relaxed">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </div>

                {/* Acknowledgment */}
                <div className="mt-8 text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
                    <p className="text-base-content/70 text-sm">
                        By continuing to use LoanLink after changes are posted, you acknowledge and agree to the updated Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
