import React, { useState } from 'react';
import { Search, MessageCircle, BookOpen, Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, HelpCircle, FileText, Shield, DollarSign, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const HelpSupport = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [openFaq, setOpenFaq] = useState(null);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const categories = ['All', 'Getting Started', 'Loans', 'Applications', 'Payments', 'Account'];

    const faqs = [
        {
            id: 1,
            category: 'Getting Started',
            question: 'How do I create an account on LoanLink?',
            answer: 'To create an account, click the "Register" button in the top navigation. Fill in your name, email, photo URL, select your role (Borrower or Manager), and create a secure password. Make sure your password has at least 6 characters with both uppercase and lowercase letters.'
        },
        {
            id: 2,
            category: 'Getting Started',
            question: 'What are the different user roles?',
            answer: 'LoanLink has three user roles: Borrowers (individuals seeking loans), Managers (loan officers who review applications), and Admins (system administrators). Each role has different permissions and dashboard features.'
        },
        {
            id: 3,
            category: 'Loans',
            question: 'How do I apply for a loan?',
            answer: 'Browse available loans on the "All Loans" page, click "View Details" on a loan that interests you, then click "Apply Now". Fill out the application form with your personal and financial information. Your application will be reviewed by our loan officers.'
        },
        {
            id: 4,
            category: 'Loans',
            question: 'What documents do I need to apply?',
            answer: 'You will need your National ID or Passport Number, proof of income source, contact information, and a clear reason for the loan. Specific document requirements may vary by loan type.'
        },
        {
            id: 5,
            category: 'Applications',
            question: 'How long does the approval process take?',
            answer: 'Application review typically takes 2-5 business days. You can track your application status in your "My Loans" dashboard. You will receive email notifications when your status changes.'
        },
        {
            id: 6,
            category: 'Applications',
            question: 'Can I cancel my loan application?',
            answer: 'Yes, you can cancel pending applications from your "My Loans" dashboard. Simply click the "Cancel" button next to the application. Note that this option is only available for applications with "Pending" status.'
        },
        {
            id: 7,
            category: 'Payments',
            question: 'What is the application fee?',
            answer: 'There is a $10 application processing fee for each loan application. This fee is paid via Stripe payment gateway and helps cover administrative costs. The fee is non-refundable once paid.'
        },
        {
            id: 8,
            category: 'Payments',
            question: 'How do I pay the application fee?',
            answer: 'Click the "Pay" button in your "My Loans" dashboard next to applications with "Unpaid" status. You will be redirected to a secure Stripe payment page. After successful payment, your fee status will automatically update to "Paid".'
        },
        {
            id: 9,
            category: 'Account',
            question: 'How do I update my profile information?',
            answer: 'Navigate to "My Profile" from your dashboard and click the "Edit Profile" button. You can update your name, photo, and other personal information. Some fields like email may require verification.'
        },
        {
            id: 10,
            category: 'Account',
            question: 'I forgot my password. What should I do?',
            answer: 'Click "Login" and use the password reset option (if available). You will receive an email with instructions to reset your password. If you continue having issues, contact our support team.'
        },
        {
            id: 11,
            category: 'Loans',
            question: 'What interest rates do you offer?',
            answer: 'Interest rates vary by loan type and amount. Each loan listing displays its specific interest rate. Rates typically range from 5% to 15% annually depending on the loan category and risk assessment.'
        },
        {
            id: 12,
            category: 'Applications',
            question: 'Why was my application rejected?',
            answer: 'Applications may be rejected due to incomplete information, insufficient income verification, or credit concerns. You will receive specific feedback from the loan officer. You can reapply after addressing the issues mentioned.'
        }
    ];

    const quickLinks = [
        { icon: BookOpen, title: 'User Guide', description: 'Complete guide to using LoanLink', link: '#' },
        { icon: FileText, title: 'Terms & Conditions', description: 'Read our terms of service', link: '#' },
        { icon: Shield, title: 'Privacy Policy', description: 'How we protect your data', link: '#' },
        { icon: DollarSign, title: 'Loan Calculator', description: 'Estimate your payments', link: '#' }
    ];

    const supportChannels = [
        {
            icon: Mail,
            title: 'Email Support',
            detail: 'support@loanlink.com',
            description: 'We respond within 24 hours',
            color: 'primary'
        },
        {
            icon: Phone,
            title: 'Phone Support',
            detail: '+880 1234-567890',
            description: 'Mon-Fri, 9AM-6PM (GMT+6)',
            color: 'secondary'
        },
        {
            icon: MessageCircle,
            title: 'Live Chat',
            detail: 'Chat with us',
            description: 'Available during business hours',
            color: 'info'
        },
        {
            icon: MapPin,
            title: 'Visit Us',
            detail: 'Dhaka, Bangladesh',
            description: 'Savar, Dhaka - 1340',
            color: 'success'
        }
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleContactSubmit = (e) => {
        e.preventDefault();

        if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
            toast.error('Please fill in all fields');
            return;
        }

        toast.success('Message sent successfully! We will respond within 24 hours.');
        setContactForm({ name: '', email: '', subject: '', message: '' });
    };

    const handleInputChange = (e) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-linear-to-br from-primary/10 via-base-100 to-secondary/10 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                        <HelpCircle className="text-primary" size={48} />
                    </div>
                    <h1 className="text-5xl font-bold text-base-content mb-4">
                        How can we <span className="text-primary">help you?</span>
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
                        Search our knowledge base or contact our support team for assistance with your LoanLink account
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40" size={20} />
                            <input
                                type="text"
                                placeholder="Search for help articles, FAQs, guides..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary transition-colors text-base"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Quick Links */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-base-content mb-6 text-center">Quick Links</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {quickLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => toast.info(`${link.title} - Coming soon!`)}
                                className="group bg-base-100 p-6 rounded-xl border border-base-300 hover:border-primary transition-all duration-300 hover:shadow-lg text-left"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <link.icon className="text-primary" size={24} />
                                </div>
                                <h3 className="font-bold text-base-content mb-2 group-hover:text-primary transition-colors">
                                    {link.title}
                                </h3>
                                <p className="text-sm text-base-content/60">{link.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Support Channels */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-base-content mb-6 text-center">Contact Support</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, index) => (
                            <div
                                key={index}
                                className="bg-base-100 p-6 rounded-xl border border-base-300 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <div className={`w-16 h-16 bg-${channel.color}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <channel.icon className={`text-${channel.color}`} size={28} />
                                </div>
                                <h3 className="font-bold text-base-content mb-2">{channel.title}</h3>
                                <p className="font-semibold text-primary mb-1">{channel.detail}</p>
                                <p className="text-sm text-base-content/60">{channel.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-base-content mb-4">Frequently Asked Questions</h2>
                        <p className="text-base-content/60">Find answers to common questions about LoanLink</p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                                        ? 'bg-primary text-primary-content shadow-lg scale-105'
                                        : 'bg-base-200 text-base-content hover:bg-base-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {filteredFaqs.length === 0 ? (
                            <div className="text-center py-12">
                                <AlertCircle className="mx-auto text-base-content/20 mb-4" size={64} />
                                <p className="text-xl text-base-content/60">No FAQs found. Try adjusting your search or category.</p>
                            </div>
                        ) : (
                            filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-base-100 border border-base-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                                        className="w-full p-5 flex items-center justify-between text-left hover:bg-base-200/50 transition-colors"
                                    >
                                        <div className="flex-1">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                                                {faq.category}
                                            </span>
                                            <h3 className="font-bold text-base-content">{faq.question}</h3>
                                        </div>
                                        {openFaq === faq.id ? (
                                            <ChevronUp className="text-primary flex-shrink-0 ml-4" size={20} />
                                        ) : (
                                            <ChevronDown className="text-base-content/40 flex-shrink-0 ml-4" size={20} />
                                        )}
                                    </button>
                                    {openFaq === faq.id && (
                                        <div className="px-5 pb-5 pt-2">
                                            <div className="flex gap-3">
                                                <CheckCircle className="text-success flex-shrink-0 mt-1" size={20} />
                                                <p className="text-base-content/70 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="max-w-2xl mx-auto">
                    <div className="bg-linear-to-br from-base-100 to-base-200 rounded-2xl border border-base-300 p-8 shadow-lg">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="text-primary" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-base-content mb-2">Still Need Help?</h2>
                            <p className="text-base-content/60">Send us a message and we'll get back to you within 24 hours</p>
                        </div>

                        <div className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-base-content mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={contactForm.name}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-base-content mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={contactForm.email}
                                        onChange={handleInputChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-base-content mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={contactForm.subject}
                                    onChange={handleInputChange}
                                    placeholder="What can we help you with?"
                                    className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-base-content mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={contactForm.message}
                                    onChange={handleInputChange}
                                    rows="5"
                                    placeholder="Tell us more about your issue..."
                                    className="w-full px-4 py-3 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button onClick={handleContactSubmit} className="btn btn-primary w-full gap-2">
                                <Send size={18} />
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>

                {/* Business Hours Banner */}
                <div className="mt-12 bg-linear-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border border-primary/20">
                    <Clock className="mx-auto text-primary mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-base-content mb-2">Support Hours</h3>
                    <p className="text-base-content/70 mb-4">
                        Our support team is available Monday to Friday, 9:00 AM to 6:00 PM (GMT+6)
                    </p>
                    <p className="text-sm text-base-content/60">
                        We aim to respond to all inquiries within 24 hours during business days
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
