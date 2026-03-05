import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 px-4">
            <div className="text-center z-10 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-primary-400 font-medium mb-4 tracking-wider uppercase text-sm"
                >
                    Welcome to my universe
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 text-glow"
                >
                    Building the Future <br /> of <span className="text-primary-400">Web Development</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    I'm a Frontend Developer & UI Designer capable of crafting immersive web experiences with modern technologies and futuristic interfaces.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 bg-primary-500/10 border border-primary-500/50 rounded-full text-primary-300 font-medium overflow-hidden hover:bg-primary-500/20 transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 border border-white/10 rounded-full text-white font-medium hover:bg-white/5 transition-all hover:border-white/30 flex items-center gap-2"
                    >
                        <Mail size={18} /> Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Decorative gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] -z-10 opacity-30 animate-pulse-glow" />
        </section>
    );
};

export default Hero;
