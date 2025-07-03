// Conference data store
import { writable } from 'svelte/store';

export const conferenceData = writable({
    name: "CodeVibe 2025",
    tagline: "Where Tech Meets Innovation 🚀",
    date: "July 21-23, 2025",
    location: "KTPO Center Whitefield,Whitefield, Bangalore,Karnataka 560066, India",
    eventDate: new Date('2025-07-21T09:00:00'),
    
    keynote_speakers: [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            title: "Chief AI Researcher at TechCore Labs",
            topic: "The Next Frontier of Artificial Intelligence",
            bio: "Leading expert in machine learning with 15+ years of experience in AI research and development.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&facepad=2"
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            title: "CEO of InnovateTech",
            topic: "Building Sustainable Tech Solutions",
            bio: "Visionary entrepreneur focused on green technology and sustainable development in the tech industry.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&facepad=2"
        },
        {
            id: 3,
            name: "Prof. Aisha Patel",
            title: "Director of Quantum Computing Research, MIT",
            topic: "Quantum Computing: Revolutionizing Data Processing",
            bio: "Pioneering researcher in quantum algorithms and computing systems with groundbreaking contributions.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces&facepad=2"
        }
    ],

    schedule: [
        {
            day: "Day 1 - July 21, 2025",
            sessions: [
                { time: "9:00 AM", title: "Registration & Welcome Coffee", speaker: "", type: "registration" },
                { time: "10:00 AM", title: "Opening Keynote", speaker: "Dr. Sarah Chen", type: "keynote" },
                { time: "11:30 AM", title: "AI in Healthcare", speaker: "Panel Discussion", type: "panel" },
                { time: "1:00 PM", title: "Lunch Break", speaker: "", type: "break" },
                { time: "2:30 PM", title: "Getting Started with Machine Learning", speaker: "Workshop", type: "workshop" },
                { time: "4:00 PM", title: "Tech Expo & Networking", speaker: "", type: "networking" },
                { time: "6:00 PM", title: "Welcome Reception", speaker: "", type: "reception" }
            ]
        },
        {
            day: "Day 2 - July 22, 2025",
            sessions: [
                { time: "9:00 AM", title: "Building Sustainable Tech Solutions", speaker: "Marcus Rodriguez", type: "keynote" },
                { time: "10:30 AM", title: "Sustainable Technology Trends", speaker: "Panel Discussion", type: "panel" },
                { time: "12:00 PM", title: "Lunch & Networking", speaker: "", type: "break" },
                { time: "1:30 PM", title: "Building Green Applications", speaker: "Workshop", type: "workshop" },
                { time: "3:00 PM", title: "Startup Pitch Session", speaker: "Various", type: "presentation" },
                { time: "4:30 PM", title: "Industry Roundtables", speaker: "", type: "networking" },
                { time: "6:00 PM", title: "Networking Dinner", speaker: "", type: "dinner" }
            ]
        },
        {
            day: "Day 3 - July 23, 2025",
            sessions: [
                { time: "9:00 AM", title: "Quantum Computing Revolution", speaker: "Prof. Aisha Patel", type: "keynote" },
                { time: "10:30 AM", title: "The Future of Computing", speaker: "Panel Discussion", type: "panel" },
                { time: "12:00 PM", title: "Lunch Break", speaker: "", type: "break" },
                { time: "1:30 PM", title: "Quantum Programming Basics", speaker: "Workshop", type: "workshop" },
                { time: "3:00 PM", title: "Career Fair", speaker: "", type: "networking" },
                { time: "4:30 PM", title: "Closing Ceremony", speaker: "", type: "ceremony" },
                { time: "5:30 PM", title: "After Party", speaker: "", type: "party" }
            ]
        }
    ],

    sponsors: {
        gold: [
            { name: "TechCore Labs", logo: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&h=100&fit=crop", website: "https://techcorelabs.com", description: "Leading technology innovation company" },
            { name: "InnovateTech", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop", website: "https://innovatetech.com", description: "AI and machine learning solutions" },
            { name: "CloudVision", logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&h=100&fit=crop", website: "https://cloudvision.com", description: "Enterprise cloud computing platform" }
        ],
        silver: [
            { name: "DataFlow Systems", logo: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=150&h=75&fit=crop", website: "https://dataflow.com", description: "Big data analytics solutions" },
            { name: "CyberGuard", logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=150&h=75&fit=crop", website: "https://cyberguard.com", description: "Cybersecurity and protection services" },
            { name: "DevTools Pro", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150&h=75&fit=crop", website: "https://devtools.com", description: "Developer productivity tools" },
            { name: "MobileFirst", logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=75&fit=crop", website: "https://mobilefirst.com", description: "Mobile app development platform" }
        ],
        bronze: [
            { name: "StartupHub", logo: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=120&h=60&fit=crop", website: "https://startuphub.com", description: "Startup accelerator and incubator" },
            { name: "CodeAcademy Plus", logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&h=60&fit=crop", website: "https://codeacademy.com", description: "Online coding education platform" },
            { name: "TechRecruiters", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=120&h=60&fit=crop", website: "https://techrecruiters.com", description: "Tech talent recruitment agency" },
            { name: "OpenSource Foundation", logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop", website: "https://opensource.org", description: "Supporting open source projects" },
            { name: "GreenTech Solutions", logo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=120&h=60&fit=crop", website: "https://greentech.com", description: "Sustainable technology solutions" }
        ]
    }
});

export const darkMode = writable(false);
