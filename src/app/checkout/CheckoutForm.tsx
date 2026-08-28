'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CheckoutFormProps {
    tourHeading?: string;
    guestCount?: number;
    option?: string;
    payment?: string;
    totalPrice?: number;
    depositAmount?: number;
}

export default function CheckoutForm({
    totalPrice = 0,
    depositAmount = 0,
}: CheckoutFormProps) {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'check'>('card');
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        townCity: '',
        state: '',
        zipCode: '',
        email: '',
        couponCode: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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

    // Stepper Color Helpers
    const getStepBadgeClasses = (stepNumber: number) => {
        if (step > stepNumber) return 'bg-[#1AA903] text-white';
        if (step === stepNumber) return 'bg-[#102a45] text-white';
        return 'border border-gray-300 text-gray-400';
    };

    const getStepTextClasses = (stepNumber: number) => {
        if (step > stepNumber) return 'text-[#1AA903]';
        if (step === stepNumber) return 'text-[#102a45]';
        return 'text-gray-400';
    };

    const isCouponEntered = formData.couponCode.trim().length > 0;

    return (
        <div className="w-full max-w-[1038px] mx-auto ">

            {/* STEPPER HEADER */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-5 mb-6 sm:mb-8 md:mb-10 p-4 sm:p-5 md:p-6 rounded-[16px] border border-[#D6D6D6] bg-white shadow-[0_16px_24px_-24px_rgba(0,0,0,0.06)] overflow-x-auto">
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${getStepBadgeClasses(1)}`}>
                        {step > 1 ? '✓' : '1'}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${getStepTextClasses(1)}`}>
                        Customer Details
                    </span>
                </div>

                <span className={`h-[1px] flex-1 min-w-[16px] max-w-[88px] transition-colors ${step > 1 ? 'bg-[#1AA903]' : 'bg-gray-200'}`} />

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${getStepBadgeClasses(2)}`}>
                        {step > 2 ? '✓' : '2'}
                    </span>
                    <span className={`text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${getStepTextClasses(2)}`}>
                        Payment Information
                    </span>
                </div>

                <span className={`h-[1px] flex-1 min-w-[16px] max-w-[88px] transition-colors ${step > 2 ? 'bg-[#1AA903]' : 'bg-gray-200'}`} />

                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${getStepBadgeClasses(3)}`}>
                        3
                    </span>
                    <span className={`text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors ${getStepTextClasses(3)}`}>
                        Done
                    </span>
                </div>
            </div>

            {/* STEP 1: CUSTOMER DETAILS */}
            {step === 1 && (
                <form onSubmit={handleNextStep} className="flex flex-col gap-6 sm:gap-8 md:gap-10 bg-white shadow-[0_16px_24px_-24px_rgba(0,0,0,0.06)]">
                    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Write"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 placeholder:text-gray-400 text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Write"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 placeholder:text-gray-400 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Country / Region</label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 bg-white text-gray-700 text-sm"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="UK">United Kingdom</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Street Address</label>
                                <input
                                    type="text"
                                    name="streetAddress"
                                    placeholder="Write"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 placeholder:text-gray-400 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Town / City</label>
                                <input
                                    type="text"
                                    name="townCity"
                                    placeholder="Write"
                                    value={formData.townCity}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 placeholder:text-gray-400 text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">State</label>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 bg-white text-gray-700 text-sm"
                                    required
                                >
                                    <option value="">Select</option>
                                    <option value="NY">New York</option>
                                    <option value="CA">California</option>
                                    <option value="TX">Texas</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">ZIP Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    placeholder="Write"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 placeholder:text-gray-400 text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Write"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 sm:p-3.5 border border-[#EFEFEF] rounded-xl focus:outline-blue-600 placeholder:text-gray-400 text-sm"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* COUPON SECTION VERTICAL STACK */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-[20px] p-4 sm:p-6 md:p-8 bg-white border border-[#EFEFEF] rounded-[16px] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.10)]">
                        <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-snug text-[#E9482B] tracking-tight">
                            If you have a coupon code, please apply it below.
                        </p>
                        <div className="flex flex-col gap-3.5">
                            <input
                                type="text"
                                name="couponCode"
                                placeholder="Write"
                                value={formData.couponCode}
                                onChange={handleInputChange}
                                className="w-full p-3.5 sm:p-4 border border-[#EFEFEF] rounded-xl text-sm focus:outline-blue-600 placeholder:text-gray-400"
                            />
                            <button
                                type="button"
                                disabled={!isCouponEntered}
                                className={`w-full py-3.5 sm:py-4 px-6 font-semibold text-sm rounded-full transition-colors ${isCouponEntered
                                    ? 'bg-[#102a45] text-white cursor-pointer hover:bg-[#162844]'
                                    : 'bg-[#EBEEF2] text-[#102a45] cursor-not-allowed opacity-60'
                                    }`}
                            >
                                Apply Coupon
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-2">
                        <button
                            type="button"
                            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 rounded-full border border-[#D6D6D6] text-gray-400 font-medium text-sm hover:bg-gray-50 transition-all"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-3.5 rounded-full bg-[#102a45] hover:bg-[#162844] text-white font-semibold text-sm tracking-wide transition-all"
                        >
                            Next Step
                        </button>
                    </div>
                </form>
            )}

            {/* STEP 2: PAYMENT INFORMATION */}
            {step === 2 && (
                <form onSubmit={handleFinalSubmit} className="flex flex-col gap-5 sm:gap-6 md:gap-[30px] w-full">

                    {/* CREDIT CARD CONTAINER */}
                    <div
                        onClick={() => setPaymentMethod('card')}
                        className={`flex flex-col bg-white border border-[#EFEFEF] rounded-[16px] p-4 sm:p-6 md:p-8 shadow-[0_17px_60px_-24px_rgba(0,0,0,0.24)] cursor-pointer transition-all ${paymentMethod === 'card' ? 'ring-2 ring-[#102a45]' : ''
                            }`}
                    >
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 w-full mb-5 sm:mb-8 md:mb-[40px]">
                            <div className="flex items-center gap-3">
                                <h2 className="text-base sm:text-xl md:text-2xl font-black text-[#1E1E1E] tracking-normal uppercase leading-tight">
                                    CREDIT CARD
                                </h2>
                            </div>

                            <div className="w-[120px] sm:w-[150px] md:w-[170px] h-[26px] sm:h-[34px] md:h-[38px] flex items-center justify-end gap-2 relative shrink-0">
                                <Image src="/images/Checkout/DebitCards.png" alt="Card icon" fill className="object-contain object-right" />
                            </div>
                        </div>

                        {/* Inputs Block */}
                        <div className="flex flex-col gap-4 sm:gap-6 md:gap-[40px] w-full">
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-2">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    pattern="[0-9]{13,19}"
                                    maxLength={19}
                                    title="Card number must contain between 13 and 19 digits"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    disabled={paymentMethod !== 'card'}
                                    className="w-full p-3 sm:p-3.5 md:p-4 border border-[#EFEFEF] rounded-xl text-sm focus:outline-blue-600 placeholder:text-gray-400 disabled:bg-gray-50"
                                    required={paymentMethod === 'card'}
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-2">MM / YY</label>
                                    <input
                                        type="text"
                                        name="cardExpiry"
                                        placeholder="MM/YY"
                                        pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                                        maxLength={5}
                                        title="Expiration format must be MM/YY"
                                        value={formData.cardExpiry}
                                        onChange={handleInputChange}
                                        disabled={paymentMethod !== 'card'}
                                        className="w-full p-3 sm:p-3.5 md:p-4 border border-[#EFEFEF] rounded-xl text-sm focus:outline-blue-600 placeholder:text-gray-400 disabled:bg-gray-50"
                                        required={paymentMethod === 'card'}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-2">CVV</label>
                                    <input
                                        type="text"
                                        name="cardCvc"
                                        placeholder="123"
                                        pattern="[0-9]{3,4}"
                                        maxLength={4}
                                        title="CVV must be 3 or 4 digits"
                                        value={formData.cardCvc}
                                        onChange={handleInputChange}
                                        disabled={paymentMethod !== 'card'}
                                        className="w-full p-3 sm:p-3.5 md:p-4 border border-[#EFEFEF] rounded-xl text-sm focus:outline-blue-600 placeholder:text-gray-400 disabled:bg-gray-50"
                                        required={paymentMethod === 'card'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-xs font-medium text-gray-400 my-[-4px]">Or</div>

                    {/* DIRECT BANK TRANSFER OPTION */}
                    <div
                        onClick={() => setPaymentMethod('bank')}
                        className={`flex items-center justify-between bg-white border border-[#EFEFEF] rounded-[16px] px-4 sm:px-5 md:px-[20px] py-3.5 sm:py-4 md:py-[24px] min-h-[60px] sm:min-h-[70px] md:h-[77px] cursor-pointer shadow-[0_17px_60px_-24px_rgba(0,0,0,0.24)] transition-all ${paymentMethod === 'bank' ? 'ring-2 ring-[#102a45]' : ''
                            }`}
                    >
                        <h2 className="text-sm sm:text-lg md:text-xl lg:text-[24px] font-[900] text-dark uppercase pr-3">DIRECT BANK TRANSFER</h2>
                        <input
                            type="radio"
                            name="paymentOption"
                            checked={paymentMethod === 'bank'}
                            onChange={() => setPaymentMethod('bank')}
                            className="w-5 h-5 accent-[#102a45] shrink-0"
                        />
                    </div>

                    <div className="text-center text-xs font-medium text-gray-400 my-[-4px]">Or</div>

                    {/* CHECK PAYMENTS OPTION */}
                    <div
                        onClick={() => setPaymentMethod('check')}
                        className={`flex items-center justify-between bg-white border border-[#EFEFEF] rounded-[16px] px-4 sm:px-5 md:px-[20px] py-3.5 sm:py-4 md:py-[24px] min-h-[60px] sm:min-h-[70px] md:h-[77px] cursor-pointer shadow-[0_17px_60px_-24px_rgba(0,0,0,0.24)] transition-all ${paymentMethod === 'check' ? 'ring-2 ring-[#102a45]' : ''
                            }`}
                    >
                        <h2 className="text-sm sm:text-lg md:text-xl lg:text-[24px] font-[900] text-dark uppercase pr-3">CHECK PAYMENTS</h2>
                        <input
                            type="radio"
                            name="paymentOption"
                            checked={paymentMethod === 'check'}
                            onChange={() => setPaymentMethod('check')}
                            className="w-5 h-5 accent-[#102a45] shrink-0"
                        />
                    </div>

                    {/* COUPON CARD FRAME VERTICAL STACK */}
                    <div className="flex flex-col gap-3 sm:gap-4 md:gap-[20px] bg-white border border-[#EFEFEF] rounded-[16px] p-4 sm:p-6 md:p-8 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.10)]">
                        <p className="text-sm sm:text-base md:text-[18px] font-semibold leading-snug text-[#E9482B] tracking-tight">
                            If you have a coupon code, please apply it below.
                        </p>

                        <div className="flex flex-col gap-3.5">
                            <input
                                type="text"
                                name="couponCode"
                                placeholder="Write"
                                value={formData.couponCode}
                                onChange={handleInputChange}
                                className="w-full p-3.5 sm:p-4 border border-[#EFEFEF] rounded-xl text-sm focus:outline-blue-600 placeholder:text-gray-400"
                            />
                            <button
                                type="button"
                                disabled={!isCouponEntered}
                                className={`w-full py-3.5 sm:py-4 px-6 font-semibold text-sm rounded-full transition-colors ${isCouponEntered
                                    ? 'bg-[#102a45] text-white cursor-pointer hover:bg-[#162844]'
                                    : 'bg-[#EBEEF2] text-[#102a45] cursor-not-allowed opacity-60'
                                    }`}
                            >
                                Apply Coupon
                            </button>
                        </div>
                    </div>

                    {/* LEGAL NOTICE & TERMS CHECKBOX */}
                    <div className="flex flex-col gap-3 text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                        <p>
                            Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="underline text-gray-800">privacy policy</a>.
                        </p>

                        <label className="flex items-start sm:items-center gap-3 cursor-pointer mt-1">
                            <input
                                type="checkbox"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                className="w-5 h-5 accent-[#102a45] rounded mt-0.5 sm:mt-0 shrink-0"
                                required
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">
                                I have read and agree to the payment and website <a href="#" className="underline text-gray-800">terms and conditions</a>.
                            </span>
                        </label>
                    </div>

                    {/* BOTTOM BUTTON ACTIONS */}
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-3.5 rounded-full border border-[#D6D6D6] text-gray-600 font-medium text-sm hover:bg-gray-50 transition-all"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            disabled={!agreedToTerms}
                            className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm tracking-wide transition-all ${agreedToTerms ? 'bg-[#102a45] hover:bg-[#162844]' : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Place Order
                        </button>
                    </div>
                </form>
            )}

            {/* STEP 3: DONE */}
            {step === 3 && (
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 sm:pb-12 bg-white mt-6 sm:mt-12 md:mt-20 lg:mt-[100px] 2xl:mt-[160px]">
                    <div className="flex flex-col items-center gap-6 sm:gap-10 md:gap-[60px] max-w-[295px] text-center">
                        <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 md:gap-[30px]">
                            <div className="flex items-center justify-center rounded-full bg-[#E9482B]/10 p-5 sm:p-6">
                                <svg
                                    className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px]"
                                    viewBox="0 0 79 69"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M70.2439 0H7.80488C5.7349 0 3.74969 0.819442 2.286 2.27806C0.822297 3.73667 0 5.71498 0 7.77778V54.4444C0 56.5072 0.822297 58.4855 2.286 59.9442C3.74969 61.4028 5.7349 62.2222 7.80488 62.2222H43.2781C43.0439 60.9389 42.9268 59.6556 42.9268 58.3333C42.9268 45.4611 53.4244 35 66.3415 35C70.4781 35 74.4976 36.0889 78.0488 38.15V7.77778C78.0488 3.46111 74.5756 0 70.2439 0ZM70.2439 27.2222H7.80488V15.5556H70.2439M64.2174 67.2556C62.7146 68.7532 60.2676 68.7 58.8312 67.1385L52.8555 60.6422C51.6691 59.3524 51.7125 57.356 52.9538 56.1189C54.228 54.8492 56.2891 54.8492 57.5633 56.1189L61.4634 60.0056L72.7197 48.7884C74.1969 47.3163 76.6203 47.4339 77.948 49.0422C79.111 50.451 79.0109 52.5134 77.7169 53.803L64.2174 67.2556Z" fill="#E9482B" />
                                </svg>
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-800">
                                Your Payment Was Successful!
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full py-3 sm:py-3.5 rounded-full bg-[#102a45] hover:bg-[#162844] text-white font-semibold text-xs tracking-wider transition-all"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}