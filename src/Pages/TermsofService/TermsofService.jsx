import React from 'react';
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, UserCheck, DollarSign, Shield, Calendar } from 'lucide-react';

const TermsOfService = () => {
    const lastUpdated = "January 12, 2026";

    const sections = [
        {
            icon: FileText,
            title: "Acceptance of Terms",
            content: [
                {
                    subtitle: "Agreement to Terms",
                    text: "By accessing and using LoanLink, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you must not use our services."
                },
                {
                    subtitle: "Eligibility",
                    text: "You must be at least 18 years old to use LoanLink. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into binding contracts."
                },
                {
                    subtitle: "Account Registration",
                    text: "To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete."
                }
            ]
        },
        {
            icon: UserCheck,
            title: "User Roles and Responsibilities",
            content: [
                {
                    subtitle: "Borrowers",
                    text: "As a borrower, you may browse available loans, submit loan applications, track application status, and manage your approved loans. You are responsible for providing truthful and accurate information in all loan applications."
                },
                {
                    subtitle: "Managers (Loan Officers)",
                    text: "Managers can add new loan products, review and process loan applications, approve or reject applications, and manage loan portfolios. Managers must act professionally and make fair, unbiased lending decisions."
                },
                {
                    subtitle: "Administrators",
                    text: "Administrators have full access to manage users, loans, and applications. They are responsible for maintaining platform integrity and ensuring compliance with policies."
                }
            ]
        },
        {
            icon: DollarSign,
            title: "Loan Applications and Fees",
            content: [
                {
                    subtitle: "Application Process",
                    text: "Borrowers may submit loan applications by completing the required form with personal, financial, and loan-specific information. Submission of an application does not guarantee approval."
                },
                {
                    subtitle: "Application Fee",
                    text: "A non-refundable application processing fee of $10 is required for each loan application. This fee must be paid via our secure payment gateway (Stripe) before your application is fully processed."
                },
                {
                    subtitle: "Approval and Disbursement",
                    text: "Loan approvals are subject to verification and assessment by loan officers. Approved loan amounts will be disbursed according to the terms specified in your loan agreement."
                },
                {
                    subtitle: "Repayment Terms",
                    text: "You agree to repay your loan according to the EMI schedule provided. Failure to make timely payments may result in late fees, impact your credit rating, and legal action."
                }
            ]
        },
        {
            icon: XCircle,
            title: "Prohibited Activities",
            content: [
                {
                    subtitle: "Fraudulent Information",
                    text: "Providing false, misleading, or fraudulent information in your application or account is strictly prohibited and may result in immediate account termination and legal action."
                },
                {
                    subtitle: "Unauthorized Access",
                    text: "You may not attempt to access accounts, data, or systems that you are not authorized to access. Any unauthorized access attempts will be investigated and may be reported to law enforcement."
                },
                {
                    subtitle: "Platform Abuse",
                    text: "You may not use LoanLink for any illegal purpose, to transmit harmful code, to spam, or to interfere with the proper functioning of the platform."
                },
                {
                    subtitle: "Multiple Accounts",
                    text: "Creating multiple accounts to circumvent application limits or for fraudulent purposes is prohibited."
                }
            ]
        },
        {
            icon: Shield,
            title: "Intellectual Property",
            content: [
                {
                    subtitle: "Platform Ownership",
                    text: "All content, features, and functionality of LoanLink, including but not limited to text, graphics, logos, and software, are owned by LoanLink and are protected by copyright, trademark, and other intellectual property laws."
                },
                {
                    subtitle: "Limited License",
                    text: "We grant you a limited, non-exclusive, non-transferable license to access and use LoanLink for its intended purpose. You may not copy, modify, distribute, sell, or lease any part of our services."
                },
                {
                    subtitle: "User Content",
                    text: "You retain ownership of information you submit to LoanLink. By submitting content, you grant us a license to use, store, and process such content as necessary to provide our services."
                }
            ]
        },
        {
            icon: AlertTriangle,
            title: "Disclaimers and Limitations",
            content: [
                {
                    subtitle: "No Guarantee of Approval",
                    text: "LoanLink does not guarantee loan approval. All applications are subject to review and assessment by loan officers based on eligibility criteria and risk assessment."
                },
                {
                    subtitle: "Service Availability",
                    text: "We strive to maintain continuous service availability but do not guarantee uninterrupted access. We may suspend or discontinue services for maintenance, updates, or other reasons without prior notice."
                },
                {
                    subtitle: "Third-Party Services",
                    text: "Our platform integrates with third-party services (such as payment processors). We are not responsible for the performance, reliability, or policies of these third-party services."
                },
                {
                    subtitle: "Financial Advice",
                    text: "LoanLink provides a platform for loan transactions but does not provide financial, legal, or tax advice. You should consult appropriate professionals before making financial decisions."
                }
            ]
        },
        {
            icon: Scale,
            title: "Limitation of Liability",
            content: [
                {
                    subtitle: "Disclaimer of Warranties",
                    text: "LoanLink is provided 'as is' and 'as available' without warranties of any kind, either express or implied. We do not warrant that our services will be error-free or uninterrupted."
                },
                {
                    subtitle: "Limitation of Damages",
                    text: "To the maximum extent permitted by law, LoanLink shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services."
                },
                {
                    subtitle: "Maximum Liability",
                    text: "Our total liability to you for any claims arising from your use of LoanLink shall not exceed the amount of fees you have paid to us in the six months preceding the claim."
                }
            ]
        },
        {
            icon: CheckCircle,
            title: "Account Termination",
            content: [
                {
                    subtitle: "Termination by User",
                    text: "You may terminate your account at any time by contacting our support team. Upon termination, you remain responsible for any outstanding loan obligations."
                },
                {
                    subtitle: "Termination by LoanLink",
                    text: "We reserve the right to suspend or terminate your account if you violate these Terms of Service, engage in fraudulent activity, or for any other reason we deem necessary to protect our platform or users."
                },
                {
                    subtitle: "Effect of Termination",
                    text: "Upon termination, your right to use LoanLink will immediately cease. We may retain certain information as required by law or for legitimate business purposes."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-secondary/10 via-base-100 to-primary/10 py-16 px-4 border-b border-base-300">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-3 bg-secondary/10 rounded-full mb-4">
                        <FileText className="text-secondary" size={48} />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content mb-4">
                        Terms of <span className="text-primary">Service</span>
                    </h1>
                    <p className="text-lg text-base-content/70 mb-4">
                        Please read these terms carefully before using LoanLink. By using our platform, you agree to these terms.
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
                    <h2 className="text-2xl font-bold text-base-content mb-4">Welcome to LoanLink</h2>
                    <p className="text-base-content/80 leading-relaxed mb-4">
                        These Terms of Service ("Terms") govern your access to and use of LoanLink, a microloan request and approval management platform. These Terms constitute a legally binding agreement between you and LoanLink.
                    </p>
                    <p className="text-base-content/80 leading-relaxed">
                        Please read these Terms carefully. By creating an account or using any part of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                    </p>
                </div>

                {/* Terms Sections */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <div key={index} className="scroll-mt-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <section.icon className="text-secondary" size={24} />
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-base-content mb-1">{section.title}</h2>
                                    <div className="h-1 w-20 bg-secondary rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {section.content.map((item, itemIndex) => (
                                    <div key={itemIndex} className="bg-base-100 rounded-xl p-6 border border-base-300 hover:border-secondary/50 transition-colors">
                                        <h3 className="text-lg font-bold text-base-content mb-3">{item.subtitle}</h3>
                                        <p className="text-base-content/70 leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dispute Resolution */}
                <div className="mt-16 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 border border-secondary/20">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Scale className="text-secondary" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-base-content mb-4">Dispute Resolution and Governing Law</h2>

                            <div className="space-y-4 text-base-content/80">
                                <div>
                                    <h3 className="font-bold text-base-content mb-2">Governing Law</h3>
                                    <p className="leading-relaxed">
                                        These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-base-content mb-2">Dispute Resolution</h3>
                                    <p className="leading-relaxed">
                                        Any disputes arising from these Terms or your use of LoanLink shall first be attempted to be resolved through good-faith negotiations. If negotiations fail, disputes shall be resolved through binding arbitration in Dhaka, Bangladesh.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-base-content mb-2">Class Action Waiver</h3>
                                    <p className="leading-relaxed">
                                        You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Changes to Terms */}
                <div className="mt-8 bg-base-200/50 rounded-xl p-6 border border-base-300">
                    <h3 className="text-lg font-bold text-base-content mb-3">Changes to These Terms</h3>
                    <p className="text-base-content/70 leading-relaxed">
                        We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of LoanLink after changes are posted constitutes acceptance of the modified Terms.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="mt-8 bg-base-200/50 rounded-xl p-6 border border-base-300">
                    <h3 className="text-lg font-bold text-base-content mb-3">Questions About These Terms?</h3>
                    <p className="text-base-content/70 leading-relaxed mb-4">
                        If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2 text-base-content/80">
                        <p><strong>Email:</strong> legal@loanlink.com</p>
                        <p><strong>Support:</strong> support@loanlink.com</p>
                        <p><strong>Phone:</strong> +880 1234-567890</p>
                        <p><strong>Address:</strong> Savar, Dhaka - 1340, Bangladesh</p>
                    </div>
                </div>

                {/* Acknowledgment */}
                <div className="mt-8 text-center p-6 bg-secondary/5 rounded-xl border border-secondary/20">
                    <p className="text-base-content/70 text-sm">
                        By using LoanLink, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
