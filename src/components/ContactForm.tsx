import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { z } from 'zod'
import { Languages, useTranslations } from '../i18n'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export default function ContactForm({
    children,
    lang,
}: {
    children?: React.ReactNode
    lang: string
}) {
    const t = useTranslations(lang as Languages)

    const formSchema = z.object({
        name: z
            .string()
            .min(2, t('contactForm.nameTooShort'))
            .max(50, t('contactForm.nameTooLong')),
        email: z.string().email(t('contactForm.emailInvalid')),
        message: z
            .string()
            .min(10, t('contactForm.messageTooShort'))
            .max(1000, t('contactForm.messageTooLong')),
    })
    const submitButtonRef = useRef<HTMLButtonElement | null>(null)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const sendMessage = new Promise((resolve, reject) => {
            fetch('https://api.mathisengels.fr/contact', {
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then((res) => {
                    if (res.ok) {
                        form.reset()
                        resolve(res)
                    } else {
                        reject()
                    }
                })
                .catch(() => reject())
        })

        await toast.promise(
            sendMessage,
            {
                pending: t('contactForm.toastPending'),
                success: t('contactForm.toastSuccess'),
                error: t('contactForm.toastError'),
            },
            {
                position: 'top-right',
                hideProgressBar: true,
            }
        )
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:w-1/2"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('contactForm.name')}</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="john.doe@email.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t(
                                        'contactForm.messagePlaceholder'
                                    )}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button
                    ref={submitButtonRef}
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="flex items-center gap-2 h-9 rounded-3xl ring-2 ring-neutral-400/75 bg-neutral-400/25 bg-clip-padding backdrop-filter backdrop-blur-md !mt-4 md:!mt-6 px-3 py-1placeholder:text-white/50 focus-visible:outline-none enabled:hover:bg-neutral-400/40 disabled:bg-neutral-400/10 disabled:text-white/50 transition-all"
                >
                    {t('contactForm.send')}
                    <span>{children}</span>
                </button>
            </form>
            <ToastContainer />
        </Form>
    )
}
