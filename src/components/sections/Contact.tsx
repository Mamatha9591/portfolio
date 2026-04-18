import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { AnimatedSection } from '../ui/AnimatedSection'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    // TODO: wire to Formspree or EmailJS
    await new Promise(resolve => setTimeout(resolve, 800))
    console.log('Form submission:', data)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let's work together"
            subtitle="Open to senior full-stack and backend roles in Singapore. Feel free to reach out."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4">Get in touch</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:mamatha.hpatil96@gmail.com"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                      <Mail size={16} />
                    </div>
                    <span className="text-sm">mamatha.hpatil96@gmail.com</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/mamatha-h094a08176"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                      <LinkedinIcon size={16} />
                    </div>
                    <span className="text-sm">linkedin.com/in/mamatha-h094a08176</span>
                  </a>

                  <a
                    href="https://github.com/Mamatha9591"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                      <GithubIcon size={16} />
                    </div>
                    <span className="text-sm">github.com/Mamatha9591</span>
                  </a>

                  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-500">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <MapPin size={16} />
                    </div>
                    <span className="text-sm">Singapore · Immediate Joiner</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40 rounded-xl p-5">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Immediately available
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
                  Based in Singapore and actively exploring senior full-stack and backend engineering roles — open to any domain where engineering quality, scalability, and reliability are the standard. Available to start immediately.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <CheckCircle size={28} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-2">Message received!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Name
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your name"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
                      })}
                      type="email"
                      placeholder="you@company.com"
                      className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    placeholder="Senior Developer Role — Fintech Company"
                    className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.subject ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                  />
                  {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Minimum 20 characters' } })}
                    rows={5}
                    placeholder="Tell me about the role, company, or what you're looking for..."
                    className={`w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
