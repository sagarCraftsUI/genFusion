import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Palette, 
  TrendingUp, 
  Lightbulb, 
  Users, 
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  Cpu
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Web Development',
      subtitle: 'Custom Web Solutions',
      description: 'We create powerful, scalable web applications using the latest technologies and frameworks.',
      image: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTIyMDQ0MTh8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Custom CMS Development',
        'API Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'PostgreSQL'],
      deliverables: [
        'Fully functional web application',
        'Mobile-responsive design',
        'SEO-optimized code',
        'Security implementation',
        'Performance monitoring',
        '3 months free support'
      ]
    },
    {
      id: 2,
      icon: Smartphone,
      title: 'Mobile App Development',
      subtitle: 'Native & Cross-Platform Apps',
      description: 'Build engaging mobile experiences that work seamlessly across iOS and Android devices.',
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTIyMDQ0MTh8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'Push Notifications',
        'In-app Purchases',
        'Social Media Integration',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
      deliverables: [
        'Native mobile applications',
        'App store deployment',
        'User analytics setup',
        'Cloud backend integration',
        'Testing documentation',
        'App store optimization'
      ]
    },
    {
      id: 3,
      icon: Palette,
      title: 'UI/UX Design',
      subtitle: 'User-Centered Design',
      description: 'Create intuitive, beautiful interfaces that convert visitors into loyal customers.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Brand Identity Design',
        'Responsive Design',
        'Accessibility Compliance',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'],
      deliverables: [
        'Complete design system',
        'High-fidelity prototypes',
        'User journey mapping',
        'Usability testing reports',
        'Design documentation',
        'Developer handoff assets'
      ]
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      subtitle: 'Growth-Driven Marketing',
      description: 'Boost your online presence and drive qualified traffic with data-driven marketing strategies.',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'SEMrush', 'Mailchimp', 'HubSpot'],
      deliverables: [
        'Comprehensive SEO audit',
        'Monthly performance reports',
        'Content calendar',
        'Social media strategy',
        'Ad campaign management',
        'ROI tracking dashboard'
      ]
    },
    {
      id: 5,
      icon: Lightbulb,
      title: 'Product Development',
      subtitle: 'End-to-End Solutions',
      description: 'Transform your ideas into market-ready products with our comprehensive development approach.',
      image: 'https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTIyMDQ0MTh8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Product Strategy',
        'MVP Development',
        'Market Research',
        'Rapid Prototyping',
        'User Testing',
        'Go-to-Market Strategy'
      ],
      technologies: ['Agile', 'Scrum', 'Lean Startup', 'Design Thinking', 'User Testing', 'Analytics'],
      deliverables: [
        'Product roadmap',
        'MVP development',
        'User feedback analysis',
        'Market validation',
        'Launch strategy',
        'Post-launch optimization'
      ]
    },
    {
      id: 6,
      icon: Users,
      title: 'IT Consulting',
      subtitle: 'Strategic Technology Advisory',
      description: 'Get expert guidance on technology strategy, digital transformation, and infrastructure optimization.',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTIzMjg4MDJ8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Technology Assessment',
        'Digital Transformation',
        'Architecture Design',
        'Cloud Migration',
        'Security Consulting',
        'Process Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'],
      deliverables: [
        'Technology audit report',
        'Strategic roadmap',
        'Implementation plan',
        'Risk assessment',
        'Cost-benefit analysis',
        'Ongoing support'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and technical requirements.',
      icon: Globe
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create detailed designs and interactive prototypes to visualize the final product.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your solution using agile methodologies with continuous testing and feedback.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'Deploy your project and provide ongoing support to ensure optimal performance.',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions designed to transform your business and drive digital success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <service.icon className="h-10 w-10 text-purple-400 mb-2" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-purple-400 text-sm">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-purple-400" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setActiveService(index)}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  {React.createElement(services[activeService].icon, { 
                    className: "h-8 w-8 text-purple-400" 
                  })}
                  <h2 className="text-3xl font-bold text-white">
                    {services[activeService].title}
                  </h2>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {services[activeService].description}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">What We Deliver:</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {services[activeService].deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-purple-400" />
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technologies We Use:</h3>
                    <div className="flex flex-wrap gap-2">
                      {services[activeService].technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Complete Feature Set:</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project's success from conception to launch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can bring your vision to life. Get a personalized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/quote"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 space-x-2"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;