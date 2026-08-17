
import React from "react";

export default function reviewLogo() {
    return (
        <svg width="64" height="70" viewBox="0 0 64 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Blue outline ring behind the flower --> */}
            <circle cx="32" cy="51" r="30" stroke="#1E88E5" stroke-width="2" fill="none" />

            {/* <!-- Orange flower shape --> */}
            <g transform="translate(0, 32)">
                <path d="M22.368 7.22C21.92 6.90333 21.408 6.61833 20.928 6.30167C21.408 6.65 21.92 6.90333 22.368 7.22ZM32 17.2583C25.12 6.87167 13.376 0 0 0C0 16.8467 10.752 31.0967 25.696 36.385C27.712 37.1133 29.824 37.6517 32 38C34.176 37.62 36.256 37.0817 38.304 36.385C53.248 31.0967 64 16.8467 64 0C50.624 0 38.88 6.87167 32 17.2583Z" fill="#E9482B" />
            </g>

            {/* <!-- Blue pin/teardrop shape on top --> */}
            <g transform="translate(20.5, 0)">
                <path d="M22.336 24.416C21.76 15.488 18.144 6.784 11.36 0C4.79457 6.53179 0.767705 15.1867 0 24.416C4.096 26.592 7.872 29.408 11.168 32.832C14.464 29.44 18.24 26.624 22.336 24.416Z" fill="#1E365C" />
            </g>
        </svg>
    );
}
