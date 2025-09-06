import { PropsWithChildren } from 'react';

export const HeroOrbit = ({ children,
     size, 
     rotation,
    spin }
     : PropsWithChildren<{ size: number; rotation: number; spin: number }>) => {
    return (
      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20'>
        <div className={` animate-spin`} style={{ animationDuration: `${spin}s` }}>
        <div
            className='flex items-start justify-start '
            style={{
                transform: `rotate(${rotation}deg)`,
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
          <div className='inline-flex animate-spin' 
          style={{
            transform: `rotate(${rotation - 1}deg)`,
            animationDuration: '20s',
          }}>
            {children}
          </div>
        </div>
        </div>
      </div>
    );
};
