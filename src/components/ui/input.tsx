import * as React from 'react'

import cn from '../../utils/cn'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    'h-9 w-full rounded-3xl ring-2 ring-neutral-400/75 bg-neutral-400/25 bg-clip-padding backdrop-filter backdrop-blur-md px-3 py-1 text-sm outline-none placeholder:text-white/50 hover:bg-neutral-400/40 transition-all autofill:!bg-neutral-400/25',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = 'Input'

export { Input }
