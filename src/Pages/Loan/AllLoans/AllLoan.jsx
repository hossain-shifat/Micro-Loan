import React from 'react';
import FadeIn from '../../../Components/Animations/FadeIn/FadeIn';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure';
import { Link } from 'react-router';
import AllLoanSkeleton from '../../../Components/CardSkeletons/AllLoanSkeleton/AllLoanSkeleton';

const AllLoan = () => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`);
            return res.data;
        }
    });

    return (
        <div className="min-h-screen ">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8 bg-base-100 rounded-xl p-6 shadow-sm border border-base-300">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-2">
                                Available Loans
                            </h1>
                            <p className="text-base-content/70">
                                Explore {isLoading ? '...' : loans.length} loan options tailored for your needs
                            </p>
                        </div>
                        <div className="badge badge-primary badge-lg font-bold px-6 py-4">
                            {isLoading ? '...' : loans.length} Loans
                        </div>
                    </div>
                </div>

                {/* Loans Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        // Skeleton Loading State
                        Array.from({ length: 6 }).map((_, index) => (
                            <AllLoanSkeleton key={index} />
                        ))
                    ) : (
                        // Actual Loan Cards
                        loans.map((loan, index) => (
                            <FadeIn key={loan._id} delay={index * 0.1}>
                                <div className="card bg-base-100 shadow-lg border border-base-300 hover:shadow-xl transition-all duration-300 group rounded-xl">
                                    {/* Loan Image */}
                                    <figure className="relative h-48 overflow-hidden bg-base-200">
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            src={loan.photo}
                                            alt={loan.loanTitle}
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/400x300?text=Loan+Image';
                                            }}
                                        />
                                        <div className="absolute top-3 right-3">
                                            <div className="badge badge-primary badge-lg font-bold shadow-lg">
                                                {loan.loanCategory}
                                            </div>
                                        </div>
                                    </figure>

                                    {/* Loan Details */}
                                    <div className="card-body p-6">
                                        {/* Title */}
                                        <h2 className="card-title text-xl font-bold text-base-content line-clamp-2">
                                            {loan.loanTitle}
                                        </h2>

                                        {/* Loan Amount */}
                                        <div className="flex items-baseline gap-2 my-2">
                                            <span className="text-3xl font-bold text-primary">
                                                ${loan.maxLoanLimit?.toLocaleString()}
                                            </span>
                                            <span className="text-sm text-base-content/60">max limit</span>
                                        </div>

                                        {/* Additional Info */}
                                        <div className="space-y-2 pt-2 border-t border-base-300">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-base-content/70">Interest Rate</span>
                                                <span className="font-bold text-base-content">
                                                    {loan.interestRate || 'N/A'}%
                                                </span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-base-content/70">Duration</span>
                                                <span className="font-bold text-base-content">
                                                    {loan.duration || 'Flexible'}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Action Button */}
                                        <div className="card-actions justify-end mt-4">
                                            <Link to={`/loan-details/${loan._id}`} className="w-full">
                                                <button className="btn btn-primary w-full">
                                                    View Details
                                                    <svg
                                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))
                    )}
                </div>

                {/* Empty State */}
                {!isLoading && loans.length === 0 && (
                    <div className="text-center py-16">
                        <div className="alert bg-base-100 shadow-lg max-w-md mx-auto border border-base-300">
                            <svg
                                className="w-8 h-8 text-base-content/60"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                />
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold text-base-content">
                                    No loans available
                                </h3>
                                <p className="text-base-content/70 text-sm">
                                    Check back later for new loan opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllLoan;
