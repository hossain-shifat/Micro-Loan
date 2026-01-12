import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, TrendingUp, BookOpen, Shield } from 'lucide-react';

const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Financial Tips', 'Loan Guides', 'Success Stories', 'Industry News'];

    const blogPosts = [
        {
            id: 1,
            title: '5 Essential Tips for First-Time Microloan Borrowers',
            excerpt: 'Learn the fundamental strategies to successfully apply for and manage your first microloan. From documentation to repayment planning.',
            category: 'Loan Guides',
            author: 'Sarah Johnson',
            date: 'January 10, 2026',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
            featured: true
        },
        {
            id: 2,
            title: 'How Small Businesses Grow with Microloans',
            excerpt: 'Discover real stories of entrepreneurs who transformed their businesses through strategic microloan investments.',
            category: 'Success Stories',
            author: 'Michael Chen',
            date: 'January 8, 2026',
            readTime: '7 min read',
            image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=800&q=80',
            featured: true
        },
        {
            id: 3,
            title: 'Understanding Interest Rates: A Complete Guide',
            excerpt: 'Break down the complexities of microloan interest rates and learn how to choose the best option for your financial situation.',
            category: 'Financial Tips',
            author: 'Emily Rodriguez',
            date: 'January 5, 2026',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            featured: false
        },
        {
            id: 4,
            title: 'The Role of NGOs in Microloan Distribution',
            excerpt: 'Explore how non-profit organizations are making financial services accessible to underserved communities worldwide.',
            category: 'Industry News',
            author: 'David Kumar',
            date: 'January 3, 2026',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80',
            featured: false
        },
        {
            id: 5,
            title: 'Building Credit Through Microloan Repayment',
            excerpt: 'Learn how consistent microloan repayments can help establish and improve your credit score over time.',
            category: 'Financial Tips',
            author: 'Lisa Thompson',
            date: 'December 30, 2025',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
            featured: false
        },
        {
            id: 6,
            title: 'From Idea to Reality: A Borrower\'s Journey',
            excerpt: 'Follow the inspiring story of Maria, who turned her craft hobby into a thriving business with a $5,000 microloan.',
            category: 'Success Stories',
            author: 'James Wilson',
            date: 'December 28, 2025',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
            featured: false
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-5xl font-bold text-base-content mb-4">
                            LoanLink <span className="text-primary">Insights</span>
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Your trusted resource for microloan knowledge, financial tips, and success stories from our community
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-base-content/40" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles, guides, and stories..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-3 justify-center mb-12">
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

                {/* Featured Posts */}
                {selectedCategory === 'All' && searchTerm === '' && (
                    <div className="mb-16">
                        <div className="flex items-center gap-2 mb-6">
                            <TrendingUp className="text-primary" size={24} />
                            <h2 className="text-3xl font-bold text-base-content">Featured Articles</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="group bg-base-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-300"
                                >
                                    <div className="relative overflow-hidden h-64">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-bold">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-base-content/60 mb-3">
                                            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full font-semibold">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-base-content mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-base-content/70 mb-4 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-base-content/60">
                                                <User size={16} />
                                                <span>{post.author}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                                                Read More <ArrowRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Regular Posts */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <BookOpen className="text-primary" size={24} />
                        <h2 className="text-3xl font-bold text-base-content">
                            {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
                        </h2>
                    </div>

                    {regularPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <Shield className="mx-auto text-base-content/20 mb-4" size={64} />
                            <p className="text-xl text-base-content/60">No articles found. Try adjusting your filters.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <div
                                    key={post.id}
                                    className="group bg-base-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-base-300 flex flex-col"
                                >
                                    <div className="relative overflow-hidden h-48">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 text-xs text-base-content/60 mb-3">
                                            <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full font-semibold">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                {post.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-base-content mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-base-content/70 text-sm mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-4 border-t border-base-300">
                                            <div className="flex items-center gap-2 text-xs text-base-content/60">
                                                <User size={14} />
                                                <span className="truncate">{post.author}</span>
                                            </div>
                                            <button className="flex items-center gap-1 text-primary font-bold text-sm hover:gap-2 transition-all">
                                                Read <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Newsletter Section */}
                <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
                    <h2 className="text-3xl font-bold text-base-content mb-4">Stay Updated</h2>
                    <p className="text-base-content/70 mb-6 max-w-2xl mx-auto">
                        Subscribe to our newsletter and get the latest insights, tips, and success stories delivered to your inbox every week
                    </p>
                    <div className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:border-primary"
                        />
                        <button className="btn bg-primary text-primary-content hover:bg-primary/90 px-8">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
