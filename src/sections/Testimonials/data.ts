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
        text: "Collaborating with CodeXSpace has been an absolute pleasure. Their attention to detail, timely delivery, and strategic mindset helped us strengthen our digital presence significantly.",
        name: "Shreya Garg",
        role: "Founder",
        company: "Co-Founder, GrabanIdea",
        color: "bg-emerald-200",
        textColor: "text-emerald-900",
        icon: "https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-19.svg"
    },
    {
        id: 2,
        text: "CodeXSpace has shown exceptional professionalism, technical expertise, and commitment to delivering quality digital solutions.",
        name: "Tilak Raj Jain",
        role: "Director, Vishesh Academy",
        company: "Director, Vishesh Academy",
        color: "bg-pink-300",
        textColor: "text-fuchsia-900",
        icon: "https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-18.svg"
    },
    {
        id: 3,
        text: "CodeXSpace stands out for its innovation-driven approach and strong technical foundation. Their ability to execute complex digital projects with precision and creativity makes them a reliable partner for any organization looking to scale digitally.",
        name: "Antonis Sypropoulos",
        role: "CEO",
        company: "Founder, CodeSoftLabs",
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
