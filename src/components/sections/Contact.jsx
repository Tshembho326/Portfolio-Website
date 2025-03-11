import ReviewOnScroll from "../ReviewOnScroll.jsx";
import emailJs from 'emailjs-com';
import React from "react";

const Contact = () => {

    const [formData, setFormData] = React.useState({
        email: "",
        name: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        emailJs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_API_PUBLIC_KEY)
            .then(result => {
                alert("Message Sent Successfully!");
                setFormData({
                    email: "",
                    name: "",
                    message: "",
                });
            }).catch(() => alert("Failed to send email"));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <ReviewOnScroll>
                <div className="w-full max-w-10xl mx-auto px-4 sm:px-6 lg:px-10">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="text" id="name" value={formData.name}
                                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                   name="name" required placeholder="Name..."
                                   className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>

                        <div className="relative">
                            <input type="text" id="email" value={formData.email} name="email" required placeholder="example@gmail.com"
                                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                   className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>

                        <div className="relative">
                            <textarea id="message" name="message" value={formData.message} rows={5} required placeholder="Your Message..."
                                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                      className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"/>
                        </div>

                        <button type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Send Message
                        </button>
                    </form>
                </div>
            </ReviewOnScroll>
        </section>
    );
};

export default Contact;
