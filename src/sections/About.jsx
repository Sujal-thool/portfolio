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
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display text-white text-center">
                        <span className="text-primary-400">01.</span> About Me
                    </h2>
                    <Card>
                        <p className="text-gray-300 leading-relaxed mb-4 text-center md:text-left">
                            Greetings! I'm a passionate web explorer dedicated to building high-performance, aesthetically pleasing digital experiences. My journey in the tech universe began with a curiosity for code and has evolved into a full-blown mission to create the web of tomorrow.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-center md:text-left">
                            I specialize in the React ecosystem, blending technical precision with artistic flair. Whether it's architecting complex applications or crafting pixel-perfect animations, I approach every project with the mindset of an artisan.
                        </p>
                    </Card>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
