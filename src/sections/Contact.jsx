import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        <span className="text-secondary-400">04.</span> Initialize Contact
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Ready to explore smooth user experiences? My sensors are open for new opportunities and collaborations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white">Transmissions Channel</h3>
                        <p className="text-gray-300">
                            Feel free to reach out. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-gray-300 hover:text-primary-400 transition-colors p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary-500/30">
                                <div className="bg-primary-500/20 p-3 rounded-full text-primary-400">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email Me</p>
                                    <p className="font-medium">sujalthool01@gmail.com</p>
                                </div>
                            </a>

                            <div className="flex gap-4">
                                <a href="#" className="flex-1 flex items-center justify-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:text-white text-gray-400 transition-all">
                                    <Github size={20} /> GitHub
                                </a>
                                <a href="#" className="flex-1 flex items-center justify-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:text-white text-gray-400 transition-all">
                                    <Linkedin size={20} /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input type="text" id="name" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" placeholder="Enter your name" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input type="email" id="email" className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" placeholder="Enter your email" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" placeholder="Your message..."></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20">
                                Send Transmission <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
