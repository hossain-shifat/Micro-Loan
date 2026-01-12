import React from 'react';
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckCircle, Bell, FileText, Calendar } from 'lucide-react';

const Security = () => {
    const lastUpdated = "January 12, 2026";

    const securityFeatures = [
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "All data transmitted between your device and our servers is encrypted using industry-standard TLS 1.3 protocol.",
            color: "primary"
        },
        {
            icon: Key,
            title: "Secure Authentication",
            description: "We use Firebase Authentication with multi-factor authentication options to protect your account access.",
            color: "secondary"
        },
        {
            icon: Server,
            title: "Protected Databases",
            description: "Your data is stored in encrypted MongoDB databases with strict access controls and regular backups.",
            color: "info"
        },
        {
            icon: Eye,
            title: "Privacy First",
            description: "We follow privacy-by-design principles and never sell your personal information to third parties.",
            color: "success"
        }
    ];

    const sections = [
        {
            icon: Shield,
            title: "Data Protection Measures",
            content: [
                {
                    subtitle: "Encryption at Rest",
                    text: "All sensitive data stored in our databases is encrypted using AES-256 encryption. This includes personal information, financial data, and authentication credentials."
                },
                {
                    subtitle: "Encryption in Transit",
                    text: "We enforce HTTPS across our entire platform using TLS 1.3 certificates. This ensures that all data transmitted between your browser and our servers is encrypted and cannot be intercepted."
                },
                {
                    subtitle: "Secure API Communication",
                    text: "All API endpoints are protected with authentication tokens and rate limiting to prevent unauthorized access and abuse."
                },
                {
                    subtitle: "Database Security",
                    text: "Our MongoDB databases are configured with network isolation, IP whitelisting, and require authentication. Database credentials are stored as environment variables and never committed to version control."
                }
            ]
        },
        {
            icon: Key,
            title: "Authentication and Access Control",
            content: [
                {
                    subtitle: "Firebase Authentication",
                    text: "We use Firebase Authentication, a trusted identity platform by Google, to manage user authentication. This provides enterprise-grade security for login and session management."
                },
                {
                    subtitle: "Password Requirements",
                    text: "Passwords must be at least 6 characters long and contain both uppercase and lowercase letters. We hash all passwords using industry-standard bcrypt before storage."
                },
                {
                    subtitle: "Role-Based Access Control (RBAC)",
                    text: "Our platform implements strict role-based permissions. Borrowers, Managers, and Admins each have different access levels, ensuring users can only access data and features appropriate to their role."
                },
                {
                    subtitle: "Session Management",
                    text: "User sessions are managed securely with automatic timeout after periods of inactivity. Sessions are invalidated upon logout, and tokens are refreshed regularly."
                }
            ]
        },
        {
            icon: Eye,
            title: "Privacy and Data Handling",
            content: [
                {
                    subtitle: "Minimal Data Collection",
                    text: "We only collect information necessary to provide our services and process loan applications. We do not collect unnecessary personal data."
                },
                {
                    subtitle: "Data Anonymization",
                    text: "Analytics and internal reporting use anonymized data whenever possible to protect user privacy while allowing us to improve our services."
                },
                {
                    subtitle: "Third-Party Integration Security",
                    text: "Payment processing through Stripe is handled entirely on their secure platform. We never store complete credit card numbers on our servers."
                },
                {
                    subtitle: "Data Retention Policies",
                    text: "We retain user data only for as long as necessary to provide services or as required by law. Users can request data deletion at any time."
                }
            ]
        },
        {
            icon: Server,
            title: "Infrastructure Security",
            content: [
                {
                    subtitle: "Cloud Hosting",
                    text: "Our application is hosted on secure, certified cloud infrastructure with built-in DDoS protection and automated security updates."
                },
                {
                    subtitle: "Regular Backups",
                    text: "We perform automated daily backups of all critical data. Backups are encrypted and stored in geographically distributed locations for disaster recovery."
                },
                {
                    subtitle: "Network Security",
                    text: "Our infrastructure uses firewalls, intrusion detection systems, and network segmentation to protect against unauthorized access and attacks."
                },
                {
                    subtitle: "Monitoring and Logging",
                    text: "We maintain comprehensive security logs and real-time monitoring to detect and respond to security incidents immediately."
                }
            ]
        },
        {
            icon: AlertTriangle,
            title: "Threat Prevention",
            content: [
                {
                    subtitle: "Fraud Detection",
                    text: "Our system includes automated fraud detection mechanisms that flag suspicious activities, multiple login attempts, and unusual transaction patterns."
                },
                {
                    subtitle: "SQL Injection Prevention",
                    text: "We use parameterized queries and input validation to protect against SQL injection and other injection-based attacks."
                },
                {
                    subtitle: "Cross-Site Scripting (XSS) Protection",
                    text: "All user inputs are sanitized and validated. We implement Content Security Policy (CSP) headers to prevent XSS attacks."
                },
                {
                    subtitle: "Rate Limiting",
                    text: "API endpoints are protected with rate limiting to prevent brute force attacks and system abuse."
                }
            ]
        },
        {
            icon: Bell,
            title: "Security Incident Response",
            content: [
                {
                    subtitle: "Incident Detection",
                    text: "We use automated monitoring tools to detect potential security incidents in real-time, including unauthorized access attempts and system anomalies."
                },
                {
                    subtitle: "Response Protocol",
                    text: "Our security team follows a documented incident response plan that includes containment, investigation, remediation, and notification procedures."
                },
                {
                    subtitle: "User Notification",
                    text: "In the event of a security breach that affects user data, we will notify affected users within 72 hours and provide guidance on protective measures."
                },
                {
                    subtitle: "Post-Incident Analysis",
                    text: "After any security incident, we conduct thorough analysis to identify root causes and implement measures to prevent similar incidents."
                }
            ]
        }
    ];

    const bestPractices = [
        {
            icon: CheckCircle,
            title: "Use Strong Passwords",
            description: "Create unique passwords with a mix of uppercase, lowercase, numbers, and special characters."
        },
        {
            icon: CheckCircle,
            title: "Enable Two-Factor Authentication",
            description: "Add an extra layer of security to your account by enabling 2FA in your account settings."
        },
        {
            icon: CheckCircle,
            title: "Keep Software Updated",
            description: "Ensure your browser and device operating system are always up to date with the latest security patches."
        },
        {
            icon: CheckCircle,
            title: "Verify Email Communications",
            description: "Always verify emails claiming to be from LoanLink. We will never ask for your password via email."
        },
        {
            icon: CheckCircle,
            title: "Use Secure Networks",
            description: "Avoid accessing your account from public Wi-Fi networks. Use a VPN if you must access from untrusted networks."
        },
        {
            icon: CheckCircle,
            title: "Monitor Account Activity",
            description: "Regularly review your account activity and report any suspicious actions immediately."
        }
    ];

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-success/10 via-base-100 to-info/10 py-16 px-4 border-b border-base-300">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block p-3 bg-success/10 rounded-full mb-4">
                        <Shield className="text-success" size={48} />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content mb-4">
                        Security & <span className="text-primary">Protection</span>
                    </h1>
                    <p className="text-lg text-base-content/70 mb-4">
                        Your security is our top priority. Learn about the measures we take to protect your data and account.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-base-content/60">
                        <Calendar size={16} />
                        <span>Last Updated: {lastUpdated}</span>
                    </div>
                </div>
            </div>

            {/* Security Features */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-base-content text-center mb-8">Our Security Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {securityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-base-100 p-6 rounded-xl border border-base-300 hover:shadow-lg transition-all duration-300 text-center"
                        >
                            <div className={`w-16 h-16 bg-${feature.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                <feature.icon className={`text-${feature.color}`} size={28} />
                            </div>
                            <h3 className="font-bold text-base-content mb-2">{feature.title}</h3>
                            <p className="text-sm text-base-content/60 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    {/* Introduction */}
                    <div className="bg-base-200/50 rounded-2xl p-8 mb-12 border border-base-300">
                        <h2 className="text-2xl font-bold text-base-content mb-4">Our Commitment to Security</h2>
                        <p className="text-base-content/80 leading-relaxed mb-4">
                            At LoanLink, we understand that you trust us with sensitive personal and financial information. We take this responsibility seriously and have implemented comprehensive security measures to protect your data.
                        </p>
                        <p className="text-base-content/80 leading-relaxed">
                            This page outlines the technical and organizational measures we employ to ensure the security, integrity, and confidentiality of your information.
                        </p>
                    </div>

                    {/* Security Sections */}
                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <div key={index} className="scroll-mt-8">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <section.icon className="text-success" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-base-content mb-1">{section.title}</h2>
                                        <div className="h-1 w-20 bg-success rounded-full"></div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {section.content.map((item, itemIndex) => (
                                        <div key={itemIndex} className="bg-base-100 rounded-xl p-6 border border-base-300 hover:border-success/50 transition-colors">
                                            <h3 className="text-lg font-bold text-base-content mb-3">{item.subtitle}</h3>
                                            <p className="text-base-content/70 leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Best Practices */}
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-base-content mb-4">Security Best Practices</h2>
                            <p className="text-base-content/60">Follow these recommendations to keep your account secure</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {bestPractices.map((practice, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 bg-base-100 p-6 rounded-xl border border-base-300 hover:border-success/50 transition-colors"
                                >
                                    <div className="flex-shrink-0">
                                        <practice.icon className="text-success" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-base-content mb-2">{practice.title}</h3>
                                        <p className="text-sm text-base-content/70 leading-relaxed">{practice.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Security Certifications */}
                    <div className="mt-16 bg-gradient-to-br from-success/5 to-info/5 rounded-2xl p-8 border border-success/20">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-base-content mb-2">Compliance & Standards</h2>
                            <p className="text-base-content/70">
                                We adhere to industry-standard security practices and regulations
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div className="bg-base-100 p-6 rounded-xl border border-base-300">
                                <Shield className="mx-auto text-success mb-3" size={32} />
                                <h3 className="font-bold text-base-content mb-2">SSL/TLS Certified</h3>
                                <p className="text-sm text-base-content/60">Industry-standard encryption</p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-xl border border-base-300">
                                <Lock className="mx-auto text-success mb-3" size={32} />
                                <h3 className="font-bold text-base-content mb-2">Data Protection</h3>
                                <p className="text-sm text-base-content/60">GDPR-compliant practices</p>
                            </div>

                            <div className="bg-base-100 p-6 rounded-xl border border-base-300">
                                <FileText className="mx-auto text-success mb-3" size={32} />
                                <h3 className="font-bold text-base-content mb-2">Regular Audits</h3>
                                <p className="text-sm text-base-content/60">Continuous security reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Report Security Issues */}
                    <div className="mt-8 bg-base-200/50 rounded-xl p-6 border border-base-300">
                        <h3 className="text-lg font-bold text-base-content mb-3">Report Security Issues</h3>
                        <p className="text-base-content/70 leading-relaxed mb-4">
                            If you discover a security vulnerability or have concerns about the security of LoanLink, please report it immediately to our security team. We take all reports seriously and will investigate promptly.
                        </p>
                        <div className="space-y-2 text-base-content/80">
                            <p><strong>Security Email:</strong> security@loanlink.com</p>
                            <p><strong>Support:</strong> support@loanlink.com</p>
                            <p><strong>Emergency Hotline:</strong> +880 1234-567890</p>
                        </div>
                    </div>

                    {/* Acknowledgment */}
                    <div className="mt-8 text-center p-6 bg-success/5 rounded-xl border border-success/20">
                        <p className="text-base-content/70 text-sm">
                            We continuously review and update our security practices to ensure the highest level of protection for our users.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
