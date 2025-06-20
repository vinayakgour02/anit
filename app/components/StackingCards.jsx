import Image from 'next/image';
import './stacking.css';

export default function StackedCardsScroll() {
    const projects = [
        {
            id: "card1",
            title: "Fast Eat",
            description: "Transforming the fast food and online food delivery ecosystem with innovative solutions that redefine convenience and quality. By integrating cutting-edge technology and user-friendly features, we're creating a seamless experience for customers and businesses alike.",
            image: "/Portfolio/portweb1.png"
        },
        {
            id: "card2",
            title: "Crypto Trading",
            description: "A comprehensive cryptocurrency trading platform that provides real-time market data, advanced trading tools, and secure transactions. Built with cutting-edge blockchain technology to ensure reliability and transparency.",
            image: "/Portfolio/portweb2.png"
        },
        {
            id: "card3",
            title: "Smart Home",
            description: "An innovative smart home automation system that connects and controls all your home devices through a single, intuitive interface. Featuring AI-powered automation and energy management solutions.",
            image: "/Portfolio/portweb3.png"
        },
        {
            id: "card4",
            title: "Health Tech",
            description: "A revolutionary healthcare platform that connects patients with healthcare providers, manages medical records, and provides telemedicine services. Empowering better healthcare access and management.",
            image: "/Portfolio/portweb4.png"
        },
        {
            id: "card5",
            title: "EduTech Platform",
            description: "A modern e-learning platform that transforms traditional education through interactive content, personalized learning paths, and real-time progress tracking. Making quality education accessible to everyone.",
            image: "/Portfolio/portweb5.png"
        }
    ];

    return (
        <div className='w-full bg-black'>
            <div className='w-[40%] pl-40 py-20'>
                <div className='text-white text-6xl font-bold'>
                    OUR WORK
                </div>
                <div className='text-white text-sm'>
                    We work for the world's most influential brands to create, design and execute innovative social and influencer strategies that deliver next level results.
                </div>
            </div>

            <div className="container2">
                <ul id="cards">
                    {projects.map((project) => (
                        <li key={project.id} className="card" id={project.id}>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="flex justify-between items-start mb-8">
                                        <h2 className="text-3xl font-semibold text-white">{project.title}</h2>
                                        <button className="border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-black transition-all">
                                            SEE PROJECT
                                        </button>
                                    </div>
                                    <p className="text-gray-400 text-lg mb-8">{project.description}</p>
                                </div>
                                <div className="card-image-container">
                                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}