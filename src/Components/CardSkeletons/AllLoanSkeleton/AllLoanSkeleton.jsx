import React from 'react';

const AllLoanSkeleton = () => {
    return (
        <div className="bg-base-100 rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative h-48 bg-linear-to-br from-base-200 to-base-300 animate-pulse">
                <div className="absolute top-3 right-3 w-20 h-6 bg-base-300 rounded-full"></div>
            </div>

            <div className="p-6 space-y-4">
                <div className="space-y-2">
                    <div className="h-6 bg-base-200 rounded animate-pulse w-3/4"></div>
                    <div className="h-4 bg-base-200 rounded animate-pulse w-1/2"></div>
                </div>

                <div className="flex items-baseline gap-2">
                    <div className="h-8 bg-base-200 rounded animate-pulse w-24"></div>
                    <div className="h-4 bg-base-200 rounded animate-pulse w-16"></div>
                </div>

                <div className="space-y-2 pt-2">
                    <div className="flex justify-between">
                        <div className="h-4 bg-base-200 rounded animate-pulse w-20"></div>
                        <div className="h-4 bg-base-200 rounded animate-pulse w-16"></div>
                    </div>
                    <div className="flex justify-between">
                        <div className="h-4 bg-base-200 rounded animate-pulse w-24"></div>
                        <div className="h-4 bg-base-200 rounded animate-pulse w-20"></div>
                    </div>
                </div>

                <div className="pt-4">
                    <div className="h-11 bg-base-200 rounded-lg animate-pulse w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default AllLoanSkeleton;
