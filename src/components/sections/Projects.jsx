import ReviewOnScroll from "../ReviewOnScroll.jsx";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <ReviewOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Automatic Reading Tutor App</h3>
                            <p className="text-gray-400 mb-4">
                                Developed an AI-powered reading tutor application aimed at helping learners improve their reading skills through interactive exercises and real-time feedback using Django and React.js. Integrated the wav2vec 2.0 model for speech recognition and phoneme conversion, enabling personalized feedback on pronunciation and fluency. Also incorporated OpenAI Whisper for enhanced speech recognition accuracy.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React.js", "Django", "MySQLite", "wav2vec 2.0", "OpenAI Whisper"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/Tshembho326/READ-backend.git"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">Ecom Backend</h3>
                            <p className="text-gray-400 mb-4">
                                Built a robust backend for an e-commerce store using Spring Boot, Spring Data JPA, and PostgreSQL. Implemented RESTful APIs for product management, user authentication, and order processing. Focused on secure data storage, efficient database queries, and seamless integration with the frontend.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Spring Boot", "Spring Data JPA", "PostgreSQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/Tshembho326/ecom-backend"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div
                            className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
                        >
                            <h3 className="text-xl font-bold mb-2">School Management System</h3>
                            <p className="text-gray-400 mb-4">
                                Designed and implemented a School Management System using Spring Boot, Spring Data JPA, and PostgreSQL. Developed core entities like Section, Course, Lecture, Author, and Resources, with inheritance relationships for Files, Videos, and Text resources. Integrated Spring Security for user authentication and access control.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Spring Boot", "Spring Security", "Spring Data JPA", "PostgreSQL"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a
                                    href="https://github.com/Tshembho326/Springboot-Implementation.git"
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </ReviewOnScroll>
        </section>
    );
};

export default Projects;
