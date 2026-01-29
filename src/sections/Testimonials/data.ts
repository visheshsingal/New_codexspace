export interface Testimonial {
    id: number;
    text: string;
    name: string;
    role: string;
    company: string;
    color: string;
    textColor: string;
    icon: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "We are extremely pleased with the website design and functionality delivered by the team. It's user-friendly, professional, and perfectly showcases our services. The entire process was efficient and stress-free.",
        name: "Mohit Bazzad",
        role: "Founder",
        company: "Kings Pet Hospital",
        color: "bg-emerald-200",
        textColor: "text-emerald-900",
        icon: "https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-19.svg"
    },
    {
        id: 2,
        text: "The team delivered exactly what we needed — a clean, professional, and easy-to-manage website. The entire process was smooth, timely, and well-communicated. We're very satisfied with both the quality and support.",
        name: "Abhishek Parashar",
        role: "Founder",
        company: "Trainingandplacementcell",
        color: "bg-pink-300",
        textColor: "text-fuchsia-900",
        icon: "https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-18.svg"
    },
    {
        id: 3,
        text: "I've worked with this team for many years, and they never fail to deliver… they jump head first into all challenges and over-deliver every time. What I especially like about them is that they often enhance the creative, as well as being solutions orientated…",
        name: "Aman Sharma",
        role: "CEO",
        company: "Hi Tech Luxury Homes",
        color: "bg-slate-900",
        textColor: "text-blue-300",
        icon: "https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-20.svg"
    }
];

export const partners = [
    { name: "XL Recordings", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae206c33299da66dd2d0c0_XL_Recordings_Logo 1.svg" },
    { name: "Glasto", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae205f6285ccbb37258ab3_Glasto.png" },
    { name: "Xbox", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae20485e0e99ea60ad6979_Xbox-Logo.wine 1.svg" },
    { name: "Meta", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527eaac850562caf155695_Meta.svg" },
    { name: "Playstation", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae203520041ac6c98ae204_Playstation.svg" },
    { name: "Lionsgate", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527e485856c6ca4c6c1154_Lionsgate.svg" },
    { name: "CALM", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae2018c8b2598c2914fa35_CALM.svg" },
    { name: "Channel 4", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae200aec24e0d6827da37e_Channel 4.svg" },
    { name: "WhatsApp", src: "https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae1ffdb46c151813897eac_Whatts App.svg" }
];
