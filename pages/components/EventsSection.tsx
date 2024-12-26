import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EventsSection: React.FC = () => {
    const events = [
        {
            id: 1,
            title: "Women Empowerment Drive",
            description:
                "A health checkup program in collaboration with Trident College and ASHWINE group of hospitals.",
            date: "12th December 2024",
            image: "/images/event1.jpg", // Update with actual image path
            type: "past", // Past event
        },
        {
            id: 2,
            title: "Plastic-Free Campus Initiative",
            description:
                "Promoting microplastics awareness through community participation.",
            date: "5th January 2025",
            image: "/images/event2.jpeg", // Update with actual image path
            type: "recent", // Recent event
        },
        {
            id: 3,
            title: "Carbon Accounting Workshop",
            description:
                "Learn about carbon footprint calculations and eco-friendly practices.",
            date: "20th February 2025",
            image: "/images/event3.jpg", // Update with actual image path
            type: "future", // Future event
        },
        {
            id: 4,
            title: "Sustainable Energy Talk",
            description:
                "A session on renewable energy solutions and their impact on climate change.",
            date: "15th March 2025",
            image: "/images/event4.png", // Update with actual image path
            type: "recent", // Recent event
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

    return (
        <section className="bg-white py-16">
            <div className="container mx-14 text-center">
                <h2 className="text-3xl font-bold text-green-500 mb-4">Our Events</h2>
                <h3 className="text-2xl text-[#316b9e] mb-8">
                    Engaging Communities for a Sustainable Future
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-28">
                    {events.map((event) => {
                        // Modify the animation assignment
                        const animation =
                            event.type === "past"
                                ? "past"
                                : event.type === "recent"
                                    ? "scale"
                                    : "future";

                        return (
                            <motion.div
                                key={event.id}
                                initial="hidden"
                                whileInView={animation}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                variants={variants}
                                className="bg-white shadow-md rounded-lg overflow-hidden"
                            >
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
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
