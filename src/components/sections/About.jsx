import ReviewOnScroll from "../ReviewOnScroll.jsx";


const About = () => {
    const frontendSkills = [
        "JavaScript",
        "React.js",
        "ReactNative",
        "CSS",
        "TailwindCSS"
    ];

    const backendSkills = [
        "SpringBoot",
        "Spring Security",
        "SpringData JPA",
        "Micro Services",
        "Django",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "AWS"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <ReviewOnScroll >
            <div className="max-w-3xl mx-auto px-4">
                <h2
                    className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                >
                    About Me
                </h2>

                <div className="flex justify-center mb-8">
                    <img src="src/assets/IMG_1369.jpeg" alt="Your Name" className="w-60 h-60 rounded-full border-4 border-blue-500 shadow-lg hover:shadow-xl transition-all" />
                </div>

                <div
                    className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"
                >
                    <p className="text-gray-300 mb-6">
                        Results-driven software developer passionate about
                        building high-performance web applications, optimizing backend systems,
                        and delivering seamless user experiences.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div
                        className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.Sc in Computer Science and Applied Statistics</strong> - University of Cape Town (UCT) (2022-2025)
                            </li>
                            <li>
                                <strong>Relevant Coursework:</strong> Data Structures and Algorithms,
                                Database Management,
                                Computer Networks,
                                Advanced Software Development,
                                Machine Learning, Operational Research Techniques
                            </li>
                        </ul>
                    </div>

                    <div
                        className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                    >
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Full Stack Developer at Storage Sprint (June 2024 – Present)</h4>
                                <p>Location: South Africa | Website: <a href="https://storagesprint.co.za/" className="text-blue-400 hover:text-blue-300">storagesprint.co.za</a></p>
                                <h5 className="font-medium mt-4">Duties:</h5>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Backend and frontend Development</li>
                                </ul>
                                <h5 className="font-medium mt-4">Key Contributions:</h5>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Developed and optimized a web application to enhance storage service operations, enabling seamless customer management of stored items, scheduling, and tracking.</li>
                                    <li>Designed and implemented core backend functionalities using Django REST framework, including user authentication and inventory management.</li>
                                    <li>Built a full stack system to handle customer support requests, linked to user accounts and trip data, ensuring data consistency and secure API validation.</li>
                                    <li>Integrated AWS S3 cloud storage solutions for secure data management.</li>
                                    <li>Created an intuitive frontend interface with React.js to enhance user experience and engagement.</li>
                                    <li>Collaborated in an Agile/SCRUM environment to ensure continuous integration and alignment with client requirements.</li>
                                    <li>Utilized GitHub for version control and team collaboration.</li>
                                </ul>
                                <h5 className="font-medium mt-4">Achievements:</h5>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Increased application efficiency by integrating scalable database solutions, reducing response times by approximately 20%.</li>
                                    <li>Enhanced user satisfaction by implementing intuitive UI/UX elements in collaboration with the frontend team.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </ReviewOnScroll >
        </section>
    );
};

export default About;
