import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EventsSection: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    // Define the events
    const events = [
        {
            id: 1,
            title: "India CSR & ESG Summit 2024",
            description:
                "A prestigious summit bringing together thought leaders and industry experts to discuss the future of Corporate Social Responsibility (CSR) and Environmental, Social, and Governance (ESG) practices.",
            date: "12th December 2024",
            image: "/images/event2.jpeg", // Update with actual image path
            type: "past", // Past event
        },
        {
            id: 2,
            title: "Human Rights Day Celebration",
            description:
                "An event dedicated to celebrating and advocating for human rights across the globe, promoting awareness and action to ensure justice and equality for all.",
            date: "10th December 2024",
            image: "/images/event1.jpg", // Update with actual image path
            type: "recent", // Recent event
        },
        {
            id: 3,
            title: "Conclave on CSR for Sustainability: Action to Impact",
            description:
                "The two-day summit on CSR for Sustainability aims to explore actionable strategies and real-world success stories that demonstrate the power of CSR in building a resilient and sustainable future.",
            date: "8th & 9th February 2025",
            image: "/images/event4.jpeg", // Update with actual image path
            type: "recent", // Recent event
        },
        {
            id: 4,
            title: "A National Conclave Energy, Semicon, Cybersecurity and AI (ESCA-2025)",
            description:
                "This conclave will unite policymakers, industry experts, and academia to explore how these technologies drive economic growth, societal progress, and environmental sustainability.",
            date: "14th & 15th February 2025",
            image: "/images/event3.jpg", // Update with actual image path
            type: "future", // Future event
        },
       
    ];

    // Define animation variants
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        scale: { opacity: 1, scale: 1.05 },
        fade: { opacity: 1, scale: 0.95 },
        future: { opacity: 1, y: 20 },
        past: { opacity: 0.5, filter: "grayscale(100%)" }, // Add subtle opacity and grayscale for past events
    };

    // Use effect to check screen size after component mounts
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check screen size initially
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 md:px-14 text-center">
                <h2 className="text-3xl font-bold text-green-500 mb-4">Our Events</h2>
                <h3 className="text-2xl text-[#316b9e] mb-8">
                    Engaging Communities for a Sustainable Future
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {events.map((event) => {
                        // Adjust animation based on screen size and event type
                        const animation = isMobile
                            ? ""
                            : event.type === "past"
                            ? "past"
                            : event.type === "recent"
                            ? "scale"
                            : "future";

                        return (
                            <motion.div
                                key={event.id}
                                initial="hidden"
                                animate="visible"
                                whileInView={animation}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                variants={variants}
                                className="bg-white shadow-md rounded-lg overflow-hidden"
                                style={{ transition: "transform 0.3s ease-in-out" }}
                            >
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-50 object-cover"
                                />
                                <div className="p-4 space-y-4">
                                    <h4 className="font-semibold text-gray-700">{event.title}</h4>
                                    <p className="text-gray-600 mt-2">{event.description}</p>
                                    <p className="text-sm text-gray-500 mt-4">Date: {event.date}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
