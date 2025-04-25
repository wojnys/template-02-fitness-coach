"use client";

import { motion } from "framer-motion";
import { FiActivity, FiTarget, FiUsers, FiCalendar } from "react-icons/fi";

// Website content configuration
const websiteContent = {
    seo: {
        title: "Elite Fitness Coaching | Transform Your Life",
        description: "Professional fitness coaching to help you achieve your health and fitness goals",
    },
    hero: {
        title: "Transform Your Life Through Fitness",
        subtitle: "Expert coaching tailored to your goals and lifestyle",
        cta: "Start Your Fitness Journey",
    },
    about: {
        title: "About Me",
        content:
            "With over 10 years of experience in fitness coaching, I help people transform their lives through personalized training programs and nutrition guidance. My approach combines science-based methods with practical, sustainable habits.",
        stats: [
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Clients Trained" },
            { number: "95%", label: "Success Rate" },
        ],
    },
    services: [
        {
            icon: <FiActivity className="text-lime-500 text-2xl" />,
            title: "Personal Training",
            description: "One-on-one training sessions tailored to your specific goals and fitness level.",
            price: "$75/session",
        },
        {
            icon: <FiTarget className="text-lime-500 text-2xl" />,
            title: "Nutrition Planning",
            description: "Custom meal plans and nutrition guidance to support your fitness goals.",
            price: "$150/month",
        },
        {
            icon: <FiUsers className="text-lime-500 text-2xl" />,
            title: "Group Classes",
            description: "High-energy group workouts that combine strength training and cardio.",
            price: "$25/class",
        },
        {
            icon: <FiCalendar className="text-lime-500 text-2xl" />,
            title: "Online Coaching",
            description: "Remote coaching with workout plans, nutrition guidance, and weekly check-ins.",
            price: "$200/month",
        },
    ],
    testimonials: [
        {
            quote: "Working with this coach completely changed my approach to fitness. I've never felt stronger or more confident!",
            name: "Sarah Johnson",
            role: "Lost 30 lbs in 6 months",
            image: "/testimonial1.jpg",
        },
        {
            quote: "The personalized approach and constant support made all the difference in achieving my fitness goals.",
            name: "Mike Thompson",
            role: "Gained 15 lbs muscle mass",
            image: "/testimonial2.jpg",
        },
    ],
    contact: {
        title: "Ready to Transform Your Life?",
        subtitle: "Get in touch today and let's start your fitness journey together.",
        email: "coach@fitnesscoach.com",
        phone: "+1 (555) 123-4567",
    },
    footer: {
        socials: [
            { name: "Instagram", url: "#", icon: "FiInstagram" },
            { name: "Facebook", url: "#", icon: "FiFacebook" },
            { name: "Twitter", url: "#", icon: "FiTwitter" },
        ],
        links: [
            { text: "Home", url: "#" },
            { text: "Services", url: "#services" },
            { text: "About", url: "#about" },
            { text: "Contact", url: "#contact" },
        ],
    },
};

export default function FitnessCoachTemplate() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="fixed top-0 w-full bg-white shadow-sm z-50">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-2xl font-bold text-lime-600">
                            FitnessCoach
                        </a>
                        <div className="hidden md:flex space-x-8">
                            {websiteContent.footer.links.map((link, index) => (
                                <a key={index} href={link.url} className="text-gray-600 hover:text-lime-600 transition-colors">
                                    {link.text}
                                </a>
                            ))}
                        </div>
                        <button className="bg-lime-600 text-white px-6 py-2 rounded-full hover:bg-lime-700 transition-colors">Book Now</button>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-lime-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Get Fit, Stay <span className="text-lime-600">Strong</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-600 mb-12"
                        >
                            Your journey to a healthier lifestyle starts here. Expert coaching tailored to your goals.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col md:flex-row gap-4 justify-center items-center"
                        >
                            <button className="bg-lime-600 text-white px-8 py-4 rounded-full hover:bg-lime-700 transition-colors text-lg font-semibold w-3/4 md:w-auto">
                                Start Your Journey
                            </button>
                            <button className="bg-white text-lime-600 px-8 py-4 rounded-full hover:bg-lime-50 transition-colors text-lg font-semibold border-2 border-lime-600 w-3/4 md:w-auto">
                                View Programs
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">{websiteContent.about.title}</h2>
                        <p className="text-gray-600 mb-12">{websiteContent.about.content}</p>
                        <div className="grid grid-cols-3 gap-8">
                            {websiteContent.about.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-lime-600 mb-2">{stat.number}</div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {websiteContent.services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-lime-50 rounded-full flex items-center justify-center mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <div className="text-lime-600 font-semibold">{service.price}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {websiteContent.testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-xl"
                            >
                                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-lime-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">{websiteContent.contact.title}</h2>
                        <p className="text-gray-600 mb-8">{websiteContent.contact.subtitle}</p>
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                Email:{" "}
                                <a href={`mailto:${websiteContent.contact.email}`} className="text-lime-600">
                                    {websiteContent.contact.email}
                                </a>
                            </p>
                            <p className="text-gray-600">
                                Phone:{" "}
                                <a href={`tel:${websiteContent.contact.phone}`} className="text-lime-600">
                                    {websiteContent.contact.phone}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">FitnessCoach</h3>
                            <p className="text-gray-400">Transform your life through expert fitness coaching.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                {websiteContent.footer.links.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.url} className="text-gray-400 hover:text-white transition-colors">
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">{websiteContent.contact.email}</li>
                                <li className="text-gray-400">{websiteContent.contact.phone}</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {websiteContent.footer.socials.map((social, index) => (
                                    <a key={index} href={social.url} className="text-gray-400 hover:text-white transition-colors">
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} FitnessCoach. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
