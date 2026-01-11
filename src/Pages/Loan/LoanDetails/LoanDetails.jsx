import React from 'react'
import useAxiosSecure from '../../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router'
import useRole from '../../../Hooks/Role/useRoll'

// Skeleton Components
const SimilarLoanSkeleton = () => (
    <div className="card bg-base-300 shadow-sm animate-pulse">
        <div className="card-body p-4">
            <div className="flex items-center gap-3">
                <div className="skeleton w-16 h-16 rounded-lg shrink-0"></div>
                <div className="flex-1 space-y-2">
                    <div className="skeleton h-4 w-3/4"></div>
                    <div className="skeleton h-5 w-1/2"></div>
                    <div className="skeleton h-3 w-2/3"></div>
                </div>
                <div className="skeleton w-16 h-8 rounded-lg"></div>
            </div>
        </div>
    </div>
)

const LoanDetailsSkeleton = () => (
    <div className="min-h-screen bg-base-100">
        {/* Header Skeleton */}
        <div className="bg-base-200 border-b border-base-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="skeleton h-4 w-64 mb-2"></div>
                <div className="skeleton h-10 w-80"></div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Sidebar Skeleton */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="card-body">
                            <div className="skeleton h-8 w-48 mb-4"></div>
                            <div className="space-y-3">
                                {[...Array(6)].map((_, i) => (
                                    <SimilarLoanSkeleton key={i} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="card-body">
                            <div className="skeleton h-7 w-40 mb-4"></div>
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                                        <div className="flex-1 space-y-2">
                                            <div className="skeleton h-4 w-32"></div>
                                            <div className="skeleton h-3 w-24"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Skeleton */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="skeleton h-72 w-full rounded-t-2xl"></div>

                        <div className="card-body">
                            {/* Amount Skeleton */}
                            <div className="skeleton h-32 w-full rounded-lg mb-6"></div>

                            {/* Stats Skeleton */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="skeleton h-24 rounded-lg"></div>
                                ))}
                            </div>

                            <div className="divider"></div>

                            {/* Description Skeleton */}
                            <div className="mb-6 space-y-3">
                                <div className="skeleton h-6 w-48"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-3/4"></div>
                            </div>

                            {/* Documents Skeleton */}
                            <div className="skeleton h-24 w-full rounded-lg mb-6"></div>

                            {/* Provider Skeleton */}
                            <div className="skeleton h-32 w-full rounded-lg mb-6"></div>

                            {/* Button Skeleton */}
                            <div className="skeleton h-14 w-full rounded-lg"></div>
                        </div>
                    </div>

                    {/* Important Info Skeleton */}
                    <div className="card bg-base-200 shadow-xl border border-base-300">
                        <div className="card-body">
                            <div className="skeleton h-8 w-64 mb-4"></div>
                            <div className="space-y-4">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="skeleton h-16 w-full rounded-lg"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const LoanDetails = () => {
    const { role, roleLoading } = useRole()
    const { id } = useParams()
    const axiosSecure = useAxiosSecure()

    const { isLoading, data: loans = [] } = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/loans`)
            return res.data
        }
    })

    // Show skeleton while loading
    if (isLoading || roleLoading) {
        return <LoanDetailsSkeleton />
    }

    const similarLoans = loans.slice(0, 6)
    const loan = loans.find((l) => l._id === id);

    // Handle case where loan is not found
    if (!loan) {
        return (
            <div className="min-h-screen bg-base-100 flex items-center justify-center">
                <div className="alert alert-error max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Loan not found!</span>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-base-100 *:rounded-xl">
            {/* Header Section */}
            <div className="*:rounded-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center gap-2 text-sm breadcrumbs mb-2">
                        <ul>
                            <li><Link to="/" className="text-base-content/70 hover:text-primary">Home</Link></li>
                            <li><Link to="/loans" className="text-base-content/70 hover:text-primary">Loans</Link></li>
                            <li className="text-base-content font-medium">Loan Details</li>
                        </ul>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-base-content">Loan Details</h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Similar Loans Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="card bg-base-200 shadow-xl border border-base-300">
                            <div className="card-body">
                                <h2 className="card-title text-2xl mb-4">Similar Loans</h2>
                                <div className="space-y-3">
                                    {similarLoans.map((similarLoan, index) => (
                                        <div key={index} className="card bg-base-300 hover:bg-base-100 transition-all duration-300 shadow-sm">
                                            <div className="card-body p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="w-16 h-16 rounded-lg">
                                                            <img src={similarLoan.photo} alt={similarLoan.loanTitle} className="object-cover" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-bold text-base-content truncate">{similarLoan.loanTitle}</h3>
                                                        <p className="text-primary font-bold text-lg">${similarLoan.maxLoanLimit}</p>
                                                        <p className="text-base-content/60 text-xs">{similarLoan.interestRate}% interest</p>
                                                    </div>
                                                    <Link to={`/loan-details/${similarLoan._id}`}>
                                                        <button className="btn btn-primary btn-sm">View</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Info Card */}
                        <div className="card bg-base-200 shadow-xl border border-base-300">
                            <div className="card-body">
                                <h3 className="card-title text-lg mb-4">Why Choose Us?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="badge badge-primary badge-lg">✓</div>
                                        <div>
                                            <p className="font-semibold text-base-content">Quick Processing</p>
                                            <p className="text-base-content/70 text-sm">Fast approval process</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="badge badge-primary badge-lg">✓</div>
                                        <div>
                                            <p className="font-semibold text-base-content">100% Secure</p>
                                            <p className="text-base-content/70 text-sm">Bank-level security</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="badge badge-primary badge-lg">✓</div>
                                        <div>
                                            <p className="font-semibold text-base-content">Easy Documentation</p>
                                            <p className="text-base-content/70 text-sm">Simple process</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* Loan Overview Card */}
                        <div className="card bg-base-200 shadow-xl border border-base-300">
                            <figure className="relative h-72 overflow-hidden">
                                <img src={loan.photo} alt={loan.loanTitle} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="badge badge-primary badge-lg font-bold">{loan.loanCategory}</span>
                                        <span className="badge badge-accent badge-lg font-bold">{loan.interestRate}% Interest</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-base-100">{loan.loanTitle}</h2>
                                    {loan.loanId && <p className="text-base-100/90 text-sm mt-1">Loan ID: {loan.loanId}</p>}
                                </div>
                            </figure>

                            <div className="card-body">
                                {/* Loan Amount Highlight */}
                                <div className="alert shadow-lg bg-primary/10 border-2 border-primary mb-6">
                                    <div className="flex flex-col items-start w-full">
                                        <span className="text-base-content/70 text-sm font-medium">Maximum Loan Amount</span>
                                        <span className="text-4xl md:text-5xl font-bold text-primary mt-1">
                                            ${loan.maxLoanLimit}
                                        </span>
                                    </div>
                                </div>

                                {/* Key Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="stat bg-base-300 rounded-lg shadow-sm">
                                        <div className="stat-title text-base-content/70">Interest Rate</div>
                                        <div className="stat-value text-primary text-3xl">{loan.interestRate}%</div>
                                        <div className="stat-desc">Per annum</div>
                                    </div>

                                    <div className="stat bg-base-300 rounded-lg shadow-sm">
                                        <div className="stat-title text-base-content/70">EMI Plans</div>
                                        <div className="stat-value text-secondary text-3xl">{loan.EMIPlans}</div>
                                        <div className="stat-desc">Months available</div>
                                    </div>

                                    <div className="stat bg-base-300 rounded-lg shadow-sm">
                                        <div className="stat-title text-base-content/70">Category</div>
                                        <div className="stat-value text-accent text-2xl">{loan.loanCategory}</div>
                                        <div className="stat-desc">Loan type</div>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-base-content mb-3">About This Loan</h3>
                                    <p className="text-base-content/80 leading-relaxed">{loan.description}</p>
                                </div>

                                {/* Required Documents */}
                                <div className="alert alert-warning shadow-lg mb-6">
                                    <div className="flex flex-col items-start w-full">
                                        <span className="font-bold text-base-content mb-2 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                            Required Documents
                                        </span>
                                        <span className="text-base-content/80">{loan.requiredDocuments}</span>
                                    </div>
                                </div>

                                {/* Loan Provider Info */}
                                {loan.name && (
                                    <div className="card bg-base-300 shadow-sm mb-6">
                                        <div className="card-body">
                                            <h3 className="card-title text-lg">Loan Provider</h3>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar placeholder">
                                                    <div className="bg-primary text-primary-content rounded-full w-12">
                                                        <span className="text-xl">{loan.name.charAt(0).toUpperCase()}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-base-content">{loan.name}</p>
                                                    {loan.email && <p className="text-base-content/60 text-sm">{loan.email}</p>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Apply Button */}
                                <Link to={`/apply-loan/${loan._id}`}>
                                    <button
                                        disabled={role !== 'user' && role !== 'borrower'}
                                        className="btn btn-primary btn-lg w-full shadow-lg"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Apply for This Loan
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Important Information */}
                        <div className="card bg-base-200 shadow-xl border border-base-300">
                            <div className="card-body">
                                <h2 className="card-title text-2xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Important Information
                                </h2>

                                <div className="space-y-6">
                                    {/* Loan Rules */}
                                    <div className="collapse collapse-arrow bg-base-300">
                                        <input type="checkbox" defaultChecked />
                                        <div className="collapse-title text-lg font-semibold">
                                            Loan Rules
                                        </div>
                                        <div className="collapse-content">
                                            <ul className="space-y-2 text-base-content/80">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-success mt-1">•</span>
                                                    <span>Ensure timely EMI payments to avoid penalties.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-success mt-1">•</span>
                                                    <span>Provide accurate personal and financial information.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-success mt-1">•</span>
                                                    <span>Loans are subject to approval based on eligibility.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Privacy Policy */}
                                    <div className="collapse collapse-arrow bg-base-300">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-lg font-semibold">
                                            Privacy Policy
                                        </div>
                                        <div className="collapse-content">
                                            <p className="text-base-content/80 leading-relaxed">
                                                Your personal data is securely stored and will never be shared with third parties without consent. We comply with all privacy regulations.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Safety Assurance */}
                                    <div className="collapse collapse-arrow bg-base-300">
                                        <input type="checkbox" />
                                        <div className="collapse-title text-lg font-semibold">
                                            Safety Assurance
                                        </div>
                                        <div className="collapse-content">
                                            <p className="text-base-content/80 leading-relaxed">
                                                Our platform uses secure servers and encryption to keep your financial data safe. All transactions are monitored to prevent fraud.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoanDetails
