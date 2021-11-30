import React from 'react';


export const GlobalSvgSelector = ({id}) => {
    switch (id) {
        case 'arrow_right':
            return (
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 14L8 7.5L0.999999 1" stroke="#EB5815" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            );
        default:
            return null;
    }
};
