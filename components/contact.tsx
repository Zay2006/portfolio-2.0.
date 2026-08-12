"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "@/components/section-header"

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <SectionHeader
          label="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full glass-card border-none">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-display font-bold">Contact Information</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  Feel free to reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 sm:space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-2xl shadow-md shadow-purple-500/20">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                    <a
                      href="mailto:iwright4706@gmail.com"
                      className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors break-all"
                    >
                      iwright4706@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-cyan-500 p-3 rounded-2xl shadow-md shadow-indigo-500/20">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h3>
                    <a
                      href="tel:215-251-7167"
                      className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      (215) 251-7167
                    </a>
                  </div>
                </div>

                <div className="mt-4 p-5 sm:p-6 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-2xl border border-purple-200/30 dark:border-purple-800/30">
                  <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed">
                    "Bridging storytelling, innovation, and artistry, I'm constantly learning and growing in these
                    fields."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full glass-card border-none">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-display font-bold">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-gray-300/80 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="border-gray-300/80 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="border-gray-300/80 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] border-gray-300/80 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-5 sm:py-6 rounded-xl shadow-lg shadow-purple-500/25"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
