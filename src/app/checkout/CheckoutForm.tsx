'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface CheckoutFormProps {
    tourHeading?: string;
    guestCount?: number;
    option?: string;
    payment?: string;
    totalPrice?: number;
    depositAmount?: number;
}

const COUNTRY_OPTIONS = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
];

const STATE_OPTIONS = [
    'Texas',
    'New York',
    'California',
    'Florida',
];

export default function CheckoutForm({
    totalPrice = 0,
    depositAmount = 0,
}: CheckoutFormProps) {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'check'>('card');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    // Dropdown States
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [isStateOpen, setIsStateOpen] = useState(false);

    const countryRef = useRef<HTMLDivElement>(null);
    const stateRef = useRef<HTMLDivElement>(null);

    // Stepper Scroll Shadow States
    const stepperScrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: 'Australia',
        streetAddress: '',
        townCity: '',
        state: 'Texas',
        zipCode: '',
        email: '',
        couponCode: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: '',
    });

    // Check stepper scroll position for inner shadows
    const checkScrollPosition = () => {
        const el = stepperScrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 5);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    };

    useEffect(() => {
        const el = stepperScrollRef.current;
        if (el) {
            checkScrollPosition();
            el.addEventListener('scroll', checkScrollPosition);
            window.addEventListener('resize', checkScrollPosition);
        }
        return () => {
            if (el) el.removeEventListener('scroll', checkScrollPosition);
            window.removeEventListener('resize', checkScrollPosition);
        };
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
                setIsCountryOpen(false);
            }
            if (stateRef.current && !stateRef.current.contains(event.target as Node)) {
                setIsStateOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectOption = (field: 'country' | 'state', value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (field === 'country') setIsCountryOpen(false);
        if (field === 'state') setIsStateOpen(false);
    };

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handleFinalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreedToTerms) return;
        setStep(3);
    };

    // Stepper Helper Classes
    const getStepBadgeClasses = (stepNumber: number) => {
        if (step > stepNumber) return 'bg-[#1AA903] text-white';
        if (step === stepNumber) return 'bg-primary text-white';
        return 'border border-gray-300 text-gray-400';
    };

    const getStepTextClasses = (stepNumber: number) => {
        if (step > stepNumber) return 'text-[#1AA903] font-[600]';
        if (step === stepNumber) return 'text-dark font-[600]';
        return 'text-gray-400 font-[500]';
    };

    const isCouponEntered = formData.couponCode.trim().length > 0;

    // Determine dynamic inner shadow classes based on scroll ability
    const getShadowClasses = () => {
        if (canScrollLeft && canScrollRight) {
            return 'shadow-[inset_24px_0_16px_-16px_rgba(0,0,0,0.08),inset_-24px_0_16px_-16px_rgba(0,0,0,0.08)]';
        }
        if (canScrollLeft) {
            return 'shadow-[inset_24px_0_16px_-16px_rgba(0,0,0,0.08)]';
        }
        if (canScrollRight) {
            return 'shadow-[inset_-24px_0_16px_-16px_rgba(0,0,0,0.08)]';
        }
        return '';
    };

    return (
        <div className="w-full max-w-[1038px] mx-auto">

            {/* STEPPER HEADER WITH SCROLLABLE CONTAINER & DYNAMIC SHADOWS */}
            <div className={`relative mb-6 sm:mb-8 md:mb-[32px] rounded-[16px] border border-border bg-white transition-shadow duration-200 ${getShadowClasses()}`}>
                <div
                    ref={stepperScrollRef}
                    onScroll={checkScrollPosition}
                    className="flex items-center justify-between gap-4 sm:gap-6 p-4 sm:p-5 md:p-[24px] overflow-x-auto scrollbar-none"
                >
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-[16px] shrink-0">
                        <span className={`w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center text-[14px] sm:text-[18px] font-[600] transition-colors ${getStepBadgeClasses(1)}`}>
                            {/* {step > 1 ? '✓' : '1'} */}
                            1
                        </span>
                        <span className={`text-[12px] sm:text-[14px] md:text-[18px] tracking-[0%] leading-[100%] uppercase whitespace-nowrap transition-colors ${getStepTextClasses(1)}`}>
                            Customer Details
                        </span>
                    </div>

                    <span className={`h-[1px] flex-1 min-w-[24px] max-w-[88px] transition-colors ${step > 1 ? 'bg-[#1AA903]' : 'bg-gray-200'}`} />

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-[16px] shrink-0">
                        <span className={`w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center text-[14px] sm:text-[18px] font-[600] transition-colors ${getStepBadgeClasses(2)}`}>
                            {/* {step > 2 ? '✓' : '2'} */}
                            2
                        </span>
                        <span className={`text-[12px] sm:text-[14px] md:text-[18px] tracking-[0%] leading-[100%] uppercase whitespace-nowrap transition-colors ${getStepTextClasses(2)}`}>
                            Payment Information
                        </span>
                    </div>

                    <span className={`h-[1px] flex-1 min-w-[24px] max-w-[88px] transition-colors ${step > 2 ? 'bg-[#1AA903]' : 'bg-gray-200'}`} />

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-[16px] shrink-0">
                        <span className={`w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center text-[14px] sm:text-[18px] font-[600] transition-colors ${getStepBadgeClasses(3)}`}>
                            3
                        </span>
                        <span className={`text-[12px] sm:text-[14px] md:text-[18px] tracking-[0%] leading-[100%] uppercase whitespace-nowrap transition-colors ${getStepTextClasses(3)}`}>
                            Done
                        </span>
                    </div>
                </div>
            </div>

            {/* STEP 1: CUSTOMER DETAILS */}
            {step === 1 && (
                <form onSubmit={handleNextStep} className="flex flex-col gap-6 sm:gap-8 bg-white">
                    <div className="flex flex-col gap-5 sm:gap-6">

                        {/* FIRST & LAST NAME */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Write"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    required
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Write"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    required
                                />
                            </div>
                        </div>

                        {/* COUNTRY & STREET ADDRESS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                            {/* CUSTOM DROPDOWN: COUNTRY */}
                            <div className="flex flex-col items-start gap-2 relative" ref={countryRef}>
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">Country / Region</label>
                                <button
                                    type="button"
                                    onClick={() => setIsCountryOpen(!isCountryOpen)}
                                    className={`w-full h-[48px] px-4 bg-white border border-[#E2E8F0] rounded-[12px] text-[15px] text-[#222222] font-[500] flex items-center justify-between transition-all focus:outline-none ${isCountryOpen ? 'ring-2 ring-blue-500/40 rounded-b-none border-b-0' : ''
                                        }`}
                                >
                                    <span>{formData.country || 'Select'}</span>
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isCountryOpen && (
                                    <div className="absolute top-[100%] left-0 w-full bg-white border border-[#E2E8F0] border-t-0 rounded-b-[14px] shadow-xl z-30 py-1 overflow-hidden">
                                        {COUNTRY_OPTIONS.map((country) => {
                                            const isSelected = formData.country === country;
                                            return (
                                                <div
                                                    key={country}
                                                    onClick={() => handleSelectOption('country', country)}
                                                    className={`w-full px-4 py-3 text-[14px] sm:text-[15px] cursor-pointer flex items-center justify-between transition-colors ${isSelected
                                                        ? 'bg-[#1a365d] text-white font-[600]'
                                                        : 'text-[#333333] hover:bg-gray-50 font-[400]'
                                                        }`}
                                                >
                                                    <span>{country}</span>
                                                    {isSelected && (
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">Street Address</label>
                                <input
                                    type="text"
                                    name="streetAddress"
                                    placeholder="Write"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    required
                                />
                            </div>
                        </div>

                        {/* TOWN / CITY & STATE */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">Town / City</label>
                                <input
                                    type="text"
                                    name="townCity"
                                    placeholder="Write"
                                    value={formData.townCity}
                                    onChange={handleInputChange}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    required
                                />
                            </div>

                            {/* CUSTOM DROPDOWN: STATE */}
                            <div className="flex flex-col items-start gap-2 relative" ref={stateRef}>
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">State</label>
                                <button
                                    type="button"
                                    onClick={() => setIsStateOpen(!isStateOpen)}
                                    className={`w-full h-[48px] px-4 bg-white border border-[#E2E8F0] rounded-[12px] text-[15px] text-[#222222] font-[500] flex items-center justify-between transition-all focus:outline-none ${isStateOpen ? 'ring-2 ring-blue-500/40 rounded-b-none border-b-0' : ''
                                        }`}
                                >
                                    <span>{formData.state || 'Select'}</span>
                                    <svg
                                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isStateOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Dropdown Menu */}
                                {isStateOpen && (
                                    <div className="absolute top-[100%] left-0 w-full bg-white border border-[#E2E8F0] border-t-0 rounded-b-[14px] shadow-xl z-30 py-1 overflow-hidden">
                                        {STATE_OPTIONS.map((state) => {
                                            const isSelected = formData.state === state;
                                            return (
                                                <div
                                                    key={state}
                                                    onClick={() => handleSelectOption('state', state)}
                                                    className={`w-full px-4 py-3 text-[14px] sm:text-[15px] cursor-pointer flex items-center justify-between transition-colors ${isSelected
                                                        ? 'bg-[#1a365d] text-white font-[600]'
                                                        : 'text-[#333333] hover:bg-gray-50 font-[400]'
                                                        }`}
                                                >
                                                    <span>{state}</span>
                                                    {isSelected && (
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* ZIP CODE & EMAIL */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="Write"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    required
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Write"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* COUPON SECTION */}
                    <div className="flex flex-col gap-4 p-5 sm:p-6 bg-white border border-[#E5E7EB] rounded-[16px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                        <p className="text-[17px] font-[600] leading-snug text-[#E9482B] tracking-tight">
                            If you have a coupon code, please apply it below.
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="couponCode"
                                placeholder="Write"
                                value={formData.couponCode}
                                onChange={handleInputChange}
                                className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            />
                            <button
                                type="button"
                                disabled={!isCouponEntered}
                                className={`w-full py-3.5 font-[600] text-[16px] rounded-full transition-colors ${isCouponEntered
                                    ? 'bg-[#102a45] text-white cursor-pointer hover:bg-[#162844]'
                                    : 'bg-[#EBEEF2] text-[#102a45] cursor-not-allowed opacity-60'
                                    }`}
                            >
                                Apply Coupon
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-2">
                        <button
                            type="button"
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-300 text-gray-500 font-[500] text-[16px] hover:bg-gray-50 transition-all"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-10 py-3 rounded-full bg-[#102a45] hover:bg-[#162844] text-white font-[600] text-[16px] tracking-wide transition-all"
                        >
                            Next Step
                        </button>
                    </div>
                </form>
            )}

            {/* STEP 2: PAYMENT INFORMATION */}
            {step === 2 && (
                <form onSubmit={handleFinalSubmit} className="flex flex-col gap-5 sm:gap-6 w-full">
                    {/* CREDIT CARD CONTAINER */}
                    <div
                        onClick={() => setPaymentMethod('card')}
                        className={`flex flex-col bg-white border border-[#E5E7EB] rounded-[16px] p-5 sm:p-6 shadow-[0_17px_60px_-24px_rgba(0,0,0,0.15)] cursor-pointer transition-all ${paymentMethod === 'card' ? 'ring-2 ring-[#102a45]' : ''
                            }`}
                    >
                        <div className="flex flex-wrap items-center justify-between gap-3 w-full mb-6">
                            <h2 className="text-base sm:text-xl font-black text-[#1E1E1E] tracking-normal uppercase leading-tight">
                                CREDIT CARD
                            </h2>

                            <div className="w-[120px] sm:w-[150px] h-[30px] flex items-center justify-end relative shrink-0">
                                <Image src="/images/Checkout/DebitCards.png" alt="Card icon" fill className="object-contain object-right" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    pattern="[0-9]{13,19}"
                                    maxLength={19}
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    disabled={paymentMethod !== 'card'}
                                    className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:bg-gray-100"
                                    required={paymentMethod === 'card'}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">MM / YY</label>
                                    <input
                                        type="text"
                                        name="cardExpiry"
                                        placeholder="MM/YY"
                                        pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                                        maxLength={5}
                                        value={formData.cardExpiry}
                                        onChange={handleInputChange}
                                        disabled={paymentMethod !== 'card'}
                                        className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:bg-gray-100"
                                        required={paymentMethod === 'card'}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-[14px] sm:text-[15px] font-[500] text-[#444444]">CVV</label>
                                    <input
                                        type="text"
                                        name="cardCvc"
                                        placeholder="123"
                                        pattern="[0-9]{3,4}"
                                        maxLength={4}
                                        value={formData.cardCvc}
                                        onChange={handleInputChange}
                                        disabled={paymentMethod !== 'card'}
                                        className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:bg-gray-100"
                                        required={paymentMethod === 'card'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-xs font-medium text-gray-400">Or</div>

                    {/* DIRECT BANK TRANSFER OPTION */}
                    <div
                        onClick={() => setPaymentMethod('bank')}
                        className={`flex items-center justify-between bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-4 cursor-pointer shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] transition-all ${paymentMethod === 'bank' ? 'ring-2 ring-[#102a45]' : ''
                            }`}
                    >
                        <h2 className="text-sm sm:text-lg font-[800] text-dark uppercase">DIRECT BANK TRANSFER</h2>
                        <input
                            type="radio"
                            name="paymentOption"
                            checked={paymentMethod === 'bank'}
                            onChange={() => setPaymentMethod('bank')}
                            className="w-5 h-5 accent-[#102a45] shrink-0"
                        />
                    </div>

                    <div className="text-center text-xs font-medium text-gray-400">Or</div>

                    {/* CHECK PAYMENTS OPTION */}
                    <div
                        onClick={() => setPaymentMethod('check')}
                        className={`flex items-center justify-between bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-4 cursor-pointer shadow-[0_8px_24px_-8px_rgba(0,0,0,0.06)] transition-all ${paymentMethod === 'check' ? 'ring-2 ring-[#102a45]' : ''
                            }`}
                    >
                        <h2 className="text-sm sm:text-lg font-[800] text-dark uppercase">CHECK PAYMENTS</h2>
                        <input
                            type="radio"
                            name="paymentOption"
                            checked={paymentMethod === 'check'}
                            onChange={() => setPaymentMethod('check')}
                            className="w-5 h-5 accent-[#102a45] shrink-0"
                        />
                    </div>

                    {/* COUPON CARD FRAME */}
                    <div className="flex flex-col gap-4 bg-white border border-[#E5E7EB] rounded-[16px] p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                        <p className="text-[17px] font-[600] leading-snug text-[#E9482B] tracking-tight">
                            If you have a coupon code, please apply it below.
                        </p>

                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                name="couponCode"
                                placeholder="Write"
                                value={formData.couponCode}
                                onChange={handleInputChange}
                                className="w-full h-[48px] px-4 bg-[#edf4ff] rounded-[12px] text-[15px] text-[#222222] font-[400] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                            />
                            <button
                                type="button"
                                disabled={!isCouponEntered}
                                className={`w-full py-3.5 font-[600] text-[16px] rounded-full transition-colors ${isCouponEntered
                                    ? 'bg-[#102a45] text-white cursor-pointer hover:bg-[#162844]'
                                    : 'bg-[#EBEEF2] text-[#102a45] cursor-not-allowed opacity-60'
                                    }`}
                            >
                                Apply Coupon
                            </button>
                        </div>
                    </div>

                    {/* LEGAL NOTICE & TERMS CHECKBOX */}
                    <div className="flex flex-col gap-3 text-xs sm:text-sm leading-relaxed text-gray-600 font-medium">
                        <p>
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="underline text-gray-800">privacy policy</a>.
                        </p>

                        <label className="flex items-start sm:items-center gap-3 cursor-pointer mt-1">
                            <input
                                type="checkbox"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                className="w-4 h-4 accent-[#102a45] rounded mt-0.5 sm:mt-0 shrink-0"
                                required
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">
                                I have read and agree to the payment and website <a href="#" className="underline text-gray-800">terms and conditions</a>.
                            </span>
                        </label>
                    </div>

                    {/* BOTTOM BUTTON ACTIONS */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-300 text-gray-600 font-[500] text-[16px] hover:bg-gray-50 transition-all"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            disabled={!agreedToTerms}
                            className={`w-full sm:w-auto px-10 py-3 rounded-full text-white font-[600] text-[16px] tracking-wide transition-all ${agreedToTerms ? 'bg-[#102a45] hover:bg-[#162844]' : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            )}

            {/* STEP 3: DONE */}
            {step === 3 && (
                <div className="flex flex-col items-center justify-center p-6 bg-white mt-10 sm:mt-16">
                    <div className="flex flex-col items-center gap-8 max-w-[295px] text-center">
                        <div className="flex flex-col items-center justify-center gap-5">
                            <div className="flex items-center justify-center rounded-full bg-[#E9482B]/10 p-5">
                                <svg
                                    className="w-[48px] h-[48px]"
                                    viewBox="0 0 79 69"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M70.2439 0H7.80488C5.7349 0 3.74969 0.819442 2.286 2.27806C0.822297 3.73667 0 5.71498 0 7.77778V54.4444C0 56.5072 0.822297 58.4855 2.286 59.9442C3.74969 61.4028 5.7349 62.2222 7.80488 62.2222H43.2781C43.0439 60.9389 42.9268 59.6556 42.9268 58.3333C42.9268 45.4611 53.4244 35 66.3415 35C70.4781 35 74.4976 36.0889 78.0488 38.15V7.77778C78.0488 3.46111 74.5756 0 70.2439 0ZM70.2439 27.2222H7.80488V15.5556H70.2439M64.2174 67.2556C62.7146 68.7532 60.2676 68.7 58.8312 67.1385L52.8555 60.6422C51.6691 59.3524 51.7125 57.356 52.9538 56.1189C54.228 54.8492 56.2891 54.8492 57.5633 56.1189L61.4634 60.0056L72.7197 48.7884C74.1969 47.3163 76.6203 47.4339 77.948 49.0422C79.111 50.451 79.0109 52.5134 77.7169 53.803L64.2174 67.2556Z" fill="#E9482B" />
                                </svg>
                            </div>
                            <span className="text-[18px] font-[600] text-gray-800">
                                Your Payment Was Successful!
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full py-3 rounded-full bg-[#102a45] hover:bg-[#162844] text-white font-[600] text-[16px] tracking-wider transition-all"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}