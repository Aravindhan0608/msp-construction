import {
  Building2, HardHat, Trophy, Building, Hammer, Ruler, PenTool,
  Paintbrush, Wrench, Truck, ShieldCheck, Zap, Globe, Shield, Target, Award,
} from 'lucide-react';

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About Us' },
];

export const HERO_STATS = [
  { icon: Building2, value: '250+', label: 'Projects Completed' },
  { icon: HardHat, value: '15+', label: 'Years Experience' },
  { icon: Trophy, value: '100%', label: 'Client Satisfaction' },
];

export const ABOUT_FEATURES = [
  { icon: Shield, title: 'Uncompromising Safety Standards' },
  { icon: Target, title: 'Precision Engineering & Design' },
  { icon: Award, title: 'Award-Winning Architecture' },
];

export const SERVICES = [
  {
    icon: Building,
    title: 'Commercial Construction',
    description: 'High-end corporate offices, retail spaces, and luxury hospitality venues built with precision and scale in mind.',
  },
  {
    icon: Hammer,
    title: 'Custom Residential',
    description: 'Bespoke luxury homes and modern villas tailored to your lifestyle, utilizing premium materials and smart home integration.',
  },
  {
    icon: PenTool,
    title: 'Architectural Design',
    description: 'Award-winning architectural planning and 3D visualization that bridges the gap between imagination and structural reality.',
  },
  {
    icon: Ruler,
    title: 'Project Management',
    description: 'End-to-end oversight ensuring your luxury build is delivered on time, strictly within budget, and to the highest standards.',
  },
  {
    icon: Paintbrush,
    title: 'Premium Interior Finishing',
    description: 'Custom cabinetry, luxury material installation, and bespoke interior detailing to elevate your living spaces.',
  },
  {
    icon: Wrench,
    title: 'Structural Renovations',
    description: 'High-end structural remodeling, additions, and historic building restorations handled with extreme care.',
  },
  {
    icon: Truck,
    title: 'Site Preparation & Earthwork',
    description: 'Comprehensive lot clearing, excavation, and foundational site prep utilizing advanced heavy machinery.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineering Audits',
    description: 'Detailed structural inspections, safety compliance checks, and reinforcement planning for existing builds.',
  },
];

export const FEATURED_PROJECTS = [
  {
    id: 1,
    title: 'The Vertex Tower',
    category: 'Commercial',
    location: 'Downtown Metropolis',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    title: 'Lumina Residences',
    category: 'Custom Residential',
    location: 'Westside Hills',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    title: 'Aura Tech Park',
    category: 'Infrastructure',
    location: 'Silicon Valley',
    image: 'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=1974&auto=format&fit=crop',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 4,
    title: 'Zenith Pavilion',
    category: 'Hospitality',
    location: 'Coastal Bay',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
    span: 'md:col-span-2 md:row-span-1',
  },
];

export const PORTFOLIO_CATEGORIES = ['All', 'Villa', 'Apartment', 'Interior', 'Commercial'];

export const ALL_PORTFOLIO_PROJECTS = [
  { id: 1, title: 'The Onyx Villa', category: 'Villa', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop' },
  { id: 2, title: 'Lumina Tech Hub', category: 'Commercial', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop' },
  { id: 3, title: 'Zenith Interiors', category: 'Interior', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop' },
  { id: 4, title: 'Skyline Apartments', category: 'Apartment', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop' },
  { id: 5, title: 'Aura Boutique', category: 'Commercial', img: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=1000&auto=format&fit=crop' },
  { id: 6, title: 'Royal Estate', category: 'Villa', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop' },
];

export const COMPANY_MILESTONES = [
  { year: '2010', title: 'The Foundation', desc: "MSP Builder's was established with a small team of visionary engineers and a single goal: quality over quantity." },
  { year: '2015', title: 'Global Recognition', desc: 'Won the International Excellence in Architecture award for our first high-rise commercial project.' },
  { year: '2024', title: 'Future-Proofing', desc: 'Pioneered the use of carbon-neutral materials and AI-driven structural testing in all luxury builds.' },
];

export const CLIENT_REVIEWS = [
  {
    name: 'Alexander Rossi',
    role: 'Director at Rossi Developments',
    text: "MSP Builder's doesn't just meet expectations; they redefine them. Their commitment to structural integrity and high-end aesthetics is rare in today's market.",
    rating: 5,
  },
  {
    name: 'Helena Vance',
    role: 'Luxury Estate Owner',
    text: 'The architectural planning for our private villa was flawless. They managed to blend modern smart-technology with a timeless design that feels like a work of art.',
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    role: 'Infrastructure Consultant',
    text: 'I have worked with many firms, but the project management at MSP is in a league of its own. They delivered our tech-park 4 months ahead of schedule.',
    rating: 5,
  },
];

export const COMPANY_PILLARS = [
  { icon: ShieldCheck, title: '100% Safety', label: 'Incident Free' },
  { icon: Zap, title: '4D Planning', label: 'Time Efficiency' },
  { icon: Globe, title: 'Eco-Grade', label: 'Sustainable' },
  { icon: Trophy, title: 'Elite Tier', label: 'Awarded Firm' },
];

export const CONTACT_INFO = {
  phone: '+91 7558135958',
  email: 'poornadevi@gmail.com',
  address: 'P97R+QX5, Vickramasingapuram, Tamil Nadu 627425',
};
