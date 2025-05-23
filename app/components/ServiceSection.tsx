import type { FC, ReactNode } from 'react';
import Box from './ui/Box';
import Heading from './ui/Heading';
import Section from './ui/Section';
import clsx from 'clsx';

interface ServiceSectionProps {
    imageUrl: string;
    imagePosition: 'left' | 'right';
    className?: string;
    children: ReactNode;
    boxClassName?: string;
    globeClassName?: string;
}

export const ServiceSection: FC<ServiceSectionProps> = ({
    imageUrl,
    imagePosition,
    className,
    children,
    boxClassName,
    globeClassName
}) => {
    return (
        <Section className={clsx('xl:!max-w-[110.75rem]', className)}>
            <Box className={clsx('relative overflow-hidden 2xl:max-w-[85.75rem] z-[2] py-12 grid grid-cols-2', boxClassName)}>
                <div className={clsx(
                    "relative w-full flex items-center justify-center",
                    imagePosition === 'right' && 'order-last'
                )}>
                    <img
                        src={imageUrl}
                        alt="case-study-preview"
                        className={clsx(
                            imagePosition === 'left' ? 'ml-auto mr-[9%]' : ''
                        )}
                    />
                </div>
                <div className="content">
                    {children}
                </div>

                {/* Globe */}
                <img
                    src="/case-study-globe.png"
                    alt="globe"
                    className={clsx(
                        "absolute -bottom-60 -z-[1]",
                        globeClassName
                    )}
                />
            </Box>
        </Section>
    );
}; 