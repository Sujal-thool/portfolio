import { motion } from 'framer-motion';
import Card from '../components/ui/Card';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    
                    Profile Image / Tech Visual
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full bg-space-900 border border-white/10 overflow-hidden flex items-center justify-center">
                            <span className="text-gray-500 text-6xl">?</span>
                          //  {/* Replace with actual image later */}
                           // {/* <img src="/path/to/profile.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                        </div>
                        

                        {/* Orbiting elements decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary-500/20 rounded-full animate-spin-slow pointer-events-none">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full shadow-[0_0_10px_theme('colors.primary.500')]"></div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
                            <span className="text-primary-400">01.</span> About Me
                        </h2>
                        <Card>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Greetings! I'm a passionate web explorer dedicated to building high-performance, aesthetically pleasing digital experiences. My journey in the tech universe began with a curiosity for code and has evolved into a full-blown mission to create the web of tomorrow.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I specialize in the React ecosystem, blending technical precision with artistic flair. Whether it's architecting complex applications or crafting pixel-perfect animations, I approach every project with the mindset of an artisan.
                            </p>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
