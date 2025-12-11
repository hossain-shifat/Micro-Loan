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

export const journeyTimeline = [
    {
        id: 1,
        year: 2008,
        title: "The Idea Was Born",
        detail: "A small group of tech-minded students identified how difficult microloan access was for ordinary people. The first concept of a digital loan management system was created."
    },
    {
        id: 2,
        year: 2012,
        title: "First Prototype",
        detail: "The team built a basic loan tracking desktop tool used by three small agencies to manage borrower information manually."
    },
    {
        id: 3,
        year: 2015,
        title: "Shift Toward Cloud-Based System",
        detail: "Realizing the future of fintech, the project was rebuilt into a cloud-ready loan management platform."
    },
    {
        id: 4,
        year: 2018,
        title: "LoanBee Brand Was Launched",
        detail: "The name LoanBee was officially introduced with early features like loan application tracking, user roles, and a basic approval workflow."
    },
    {
        id: 5,
        year: 2020,
        title: "Web App 1.0 Released",
        detail: "The first public version launched with real-time loan status updates, email sign-in, secure data storage, and borrower/manager dashboards."
    },
    {
        id: 6,
        year: 2021,
        title: "Mobile Optimization Added",
        detail: "LoanBee became fully mobile-friendly, increasing overall user engagement by 40%."
    },
    {
        id: 7,
        year: 2022,
        title: "Major Security Upgrade",
        detail: "Upgraded with JWT authentication, encrypted loan records, and complete activity logging for enhanced security."
    },
    {
        id: 8,
        year: 2023,
        title: "Smart Application Workflow",
        detail: "Automated verification and streamlined approval systems were introduced to speed up loan processing."
    },
    {
        id: 9,
        year: 2024,
        title: "Payments & Analytics Integrated",
        detail: "Stripe payments, borrower analytics, and manager performance dashboards were implemented for a modern loan ecosystem."
    },
    {
        id: 10,
        year: 2025,
        title: "LoanBee Rebuilt (Modern Version)",
        detail: "A fully redesigned system with Firebase auth, JWT cookies, advanced dashboards, role-based access, payment flow, search/filter, pagination, and secure deployment."
    }
];
