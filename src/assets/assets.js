import bank from './bank.png'
import application from './application.png'
import document from './document.png'
import card from './credit.png'
import approved from './approve.png'
import footerImg from './footer-bg.png'
import newsLetter from './newsletter.png'
import auth from './auth.png'
import google from './google.png'
import error404 from './error404.png'
import { Eye, Sparkles, Target, TrendingUp } from 'lucide-react'




export const assets = {
    bank,
    footerImg,
    newsLetter,
    auth,
    google,
    error404
}

export const process = [
    {
        id: 1,
        title: "Application",
        details: "The borrower submits a loan application to the bank, either in person, online, or through other channels. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan.",
        img: application
    },
    {
        id: 2,
        title: "Documentation and Verification",
        details: "The bank requests supporting documents from the borrower, such as identification proof, income statements, bank statements, and collateral details (if applicable). The bank verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan.",
        img: document
    },
    {
        id: 3,
        title: "Credit Assessment",
        details: "The bank conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors.",
        img: card
    },
    {
        id: 4,
        title: "Loan Approval",
        details: "If the borrower meets the bank's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees.",
        img: approved
    },
]

export const missionVisionData = [
    {
        id: 1,
        icon: "Target",
        title: "Our Mission",
        detail: "To empower individuals with a modern microloan management system that streamlines applications, enhances transparency, and supports financial independence. LoanBee is committed to making financial services simple, secure, and accessible."
    },
    {
        id: 2,
        icon: 'Eye',
        title: "Our Vision",
        detail: "To become the most trusted digital microloan platform, redefining how people access financial opportunities. We envision a future where technology enables faster, smarter, and more inclusive lending for everyone."
    },
    {
        id: 3,
        icon: 'TrendingUp',
        title: "Our Mission",
        detail: "To continuously innovate and deliver powerful tools that help borrowers make informed decisions and managers operate efficiently. LoanBee aims to create a seamless financial ecosystem driven by modern technology."
    },
    {
        id: 4,
        icon: 'Sparkles',
        title: "Our Vision",
        detail: "To shape a world where financial services blend perfectly with intelligent digital solutions. Our goal is to inspire trust, promote growth, and make microloan management effortless for all."
    }
];
