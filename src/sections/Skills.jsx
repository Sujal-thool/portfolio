import { motion } from 'framer-motion';
import { Server, Wrench, Layout } from 'lucide-react';

const SkillCategory = ({ title, icon: Icon, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-space-800/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary-500/30 transition-colors"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary-500/10 rounded-lg text-primary-400">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold font-display">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-gray-300 transition-all cursor-default"
                >
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            icon: Layout,
            skills: ["React", "HTML" ,"Tailwindcss"],
            delay: 0.1
        },
        {
            title: "Backend",
            icon: Server,
            skills: ["Node.js", "Express"],
            delay: 0.2
        },
        {
            title: "Tools & DevOps",
            icon: Wrench,
            skills: ["Git","Github", "Vite"],
            delay: 0.3
        },
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        <span className="text-secondary-400">02.</span> Tech Stack
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <SkillCategory key={cat.title} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
