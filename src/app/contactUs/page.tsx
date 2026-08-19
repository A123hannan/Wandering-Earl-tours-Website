import React from 'react'
import PastMainComponent from '@/components/PastTours/MainComponent/pastandContactMainComponent'
import ContactPortion from '@/components/PastTours/ContactPortion/contactPortion'

export default function page() {
    return (
        <div className="w-full relative bg-[#1e365c]">
            <PastMainComponent page='/contactUs' />

            {/* Solid dark blue wrapper connecting directly to footer */}
            <div className="w-full bg-[#1e365c] relative top-[-10px] py-[60px] sm:py-[80px] lg:py-[100px]">
                <ContactPortion
                    variant="dark"
                    title="Hello! Have a question?"
                    subtitle="We're here to help. If you have any questions or simply want to chat, let us know below. We'll always reply quickly!"
                />
            </div>
        </div>
    )
}