import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Card from '../components/ui/Card';

const projects = [
    {
        title: "Gamified Environmental Education System",
        description: "A gamified mobile/web platform or app that teaches students about environmental issues through interactive lessons, challenges, quizzes, and real-world tasks (e.g., tree-planting, waste segregation).",
        tags: ["React", "Node.js", "MongoDB", "Tailwind", "Express.js"],
        github: "https://github.com/Sujal-thool/Gamefied-environmental-education",
        live: "#"
    },
    {
        title: "Beach Explorer",
        description: "A web app that allows users to explore beaches conditions(alerts) and weather.",
        tags: ["React", "Tailwind"],
        github: "https://github.com/Sujal-thool/Beach-explorer",
        live: "#"
    },
    {
        title: "Inventory Management System",
        description: "smart inventory management system for small scale businesses.",
        tags: ["React", "Spring Boot", "Mysql"],
        github: "https://github.com/Sujal-thool/management",
        live: "#"
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <Card className="h-full group hover:border-primary-500/50 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-primary-300 bg-primary-500/10 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <a href={project.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                        <Github size={16} /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                        <ExternalLink size={16} /> Live Demo
                    </a>
                </div>
            </div>
        </Card>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-space-900/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                        <span className="text-secondary-400">03.</span> Featured Works
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
