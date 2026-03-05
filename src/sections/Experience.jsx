import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Senior Frontend Engineer",
        company: "TechNova Systems",
        period: "2023 - Present",
        description: "Leading the development of next-gen SaaS platforms. Implemented micro-frontend architecture reducing build times by 40%."
    },
    {
        role: "Full Stack Developer",
        company: "Orbital Creative",
        period: "2021 - 2023",
        description: "Developed immersive web experiences for high-profile clients using Three.js and WebGL. Collaborated with design teams to push visual boundaries."
    },
    {
        role: "Junior Web Developer",
        company: "StartUp Inc",
        period: "2019 - 2021",
        description: "Built responsive websites and internal tools. Mastered the fundamentals of React and modern CSS practices."
    }
];

const ExperienceItem = ({ exp, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line (Hidden on mobile, custom placed in grid) */}

        <div className="md:grid md:grid-cols-5 md:gap-8 group">
            {/* Date (Left Side) */}
            <div className="md:col-span-2 md:text-right mb-2 md:mb-0">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-primary-300 text-sm font-medium border border-white/10">
                    <Calendar size={14} /> {exp.period}
                </span>
            </div>

            {/* Timeline Node (Center) */}
            <div className="hidden md:flex flex-col items-center relative">
                <div className="w-px h-full bg-white/10 absolute top-0 left-1/2 -translate-x-1/2 group-last:h-full"></div>
                <div className="w-4 h-4 rounded-full bg-space-950 border-2 border-primary-500 z-10 mt-1.5 group-hover:scale-125 transition-transform shadow-[0_0_10px_theme('colors.primary.500')]"></div>
            </div>

            {/* Content (Right Side) */}
            <div className="md:col-span-2 pb-12 border-l border-white/10 md:border-l-0 pl-6 md:pl-0 ml-[-29px] md:ml-0 relative">
                {/* Mobile Node */}
                <div className="md:hidden absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-space-950"></div>

                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {exp.role}
                </h3>
                <p className="text-secondary-400 font-medium mb-3 flex items-center gap-1">
                    <Briefcase size={14} /> {exp.company}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                </p>
            </div>
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        <span className="text-primary-400">04.</span> Journey
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="space-y-0 relative">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
