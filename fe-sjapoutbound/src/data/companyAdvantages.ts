export interface CompanyAdvantage {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const companyAdvantages: CompanyAdvantage[] = [
  {
    id: 'quality-control',
    title: 'Quality Control',
    description: 'Rigorous quality control processes ensure that every product meets the highest international standards.',
    icon: '🔍',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'sustainable-farming',
    title: 'Sustainable Farming',
    description: 'We are committed to sustainable farming practices that protect the environment and support local communities.',
    icon: '🌱',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'global-shipping',
    title: 'Global Shipping',
    description: 'We ship worldwide with FOB CIF CNF shipping terms and flexible payment options.',
    icon: '🌍',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'certified-products',
    title: 'Certified Products',
    description: 'All our products are certified organic, HACCP, and ISO 22000 compliant.',
    icon: '✅',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'direct-sourcing',
    title: 'Direct Sourcing',
    description: 'We work directly with farmers to ensure fair trade and the highest quality products.',
    icon: '🤝',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'expert-guidance',
    title: 'Expert Guidance',
    description: 'Our team of experts provides guidance on cultivation, processing, and market access.',
    icon: '👨‍🌾',
    color: 'from-orange-500 to-orange-600'
  }
];
