import * as React from 'react'

import cn from '../../utils/cn'

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[200px] h-full w-full rounded-3xl ring-2 ring-neutral-400/75 bg-neutral-400/25 bg-clip-padding backdrop-filter backdrop-blur-md px-3 py-2 text-sm shadow-sm outline-none placeholder:text-white/50 hover:bg-neutral-400/40 transition-all resize-none',
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Textarea.displayName = 'Textarea'

export { Textarea }
