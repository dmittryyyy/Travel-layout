'use client';

import React from 'react';

import icons from '../public/sprites.svg';

interface IconPros {
    className?: string;
    name: string;
}

export const Icon: React.FC <IconPros> = ({ className, name }) => {
    return (
        <svg
            role="img"
            className={`${className || ''} w-6 h-6`}
        >
            <use xlinkHref={`${icons.src}#${name}`} />
        </svg>
    );
};