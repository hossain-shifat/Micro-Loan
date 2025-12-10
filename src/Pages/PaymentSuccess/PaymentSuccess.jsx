import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import useAxiosSecure from '../../Hooks/Axios/AxiosSecure/useAxiosSecure'
import { BadgeCheck } from 'lucide-react'

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams()
    const [paymentInfo, setPaymentInfo] = useState({})
    const sessionId = searchParams.get('session_id')
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`payment-success?session_id=${sessionId}`)
                .then(res => {
                    setPaymentInfo({
                        transactionId: res.data.transactionId,
                        amount: res.data.amount,
                        customerEmail: res.data.customerEmail,
                        paidAt: res.data.paidAt,
                        loanId: res.data.paymentInfo?.loanId,
                        loanTitle: res.data.paymentInfo?.loanTitle,
                        borrowerName: res.data.paymentInfo?.borrowerName
                    })
                })
        }
    }, [sessionId, axiosSecure])

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="space-y-2">
            <BadgeCheck size={120} stroke='green' className="max-w-full mx-auto"/>
            <h1 className="text-center font-bold text-6xl">Payment Success!</h1>
        </div>
    </div>
  )
}

export default PaymentSuccess
