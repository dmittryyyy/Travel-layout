import React from 'react';

import { Icon } from './Icon';

interface ButtonPros {
    className?: string;
    type: 'button' | 'submit';
    text: string;
    icon?: string;
    variant: string;
    full?: boolean;
}

export const Button: React.FC <ButtonPros> = ({ className, type, text, variant, icon, full }) => {
  return (
    <button
      className={`${className || ''}flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}

    >
        {icon && (
          <Icon
            name={icon}
          />
        )}
        <label className='bold-16 whitespace-nowrap pointer-events-none'>{text}</label>
    </button>
  )
}
