import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle,
  Heart,
  Zap,
  Shield,
  Lightbulb
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '150+', label: 'Happy Clients' },
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Target, number: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric Approach',
      description: 'We put our clients at the center of everything we do, ensuring their success is our primary goal.'
    },
    {
      icon: Zap,
      title: 'Innovation & Excellence',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that exceed expectations.'
    },
    {
      icon: Shield,
      title: 'Reliability & Trust',
      description: 'Our commitment to transparency, security, and consistent delivery builds lasting partnerships.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and embrace new technologies to provide the best solutions.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      specialty: 'Product Strategy & Leadership',
      description: 'With 10+ years in tech leadership, Alex drives our vision of transforming businesses through technology.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      specialty: 'Full-Stack Development',
      description: 'Sarah leads our technical team with expertise in modern frameworks and scalable architecture.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Creative Director',
      specialty: 'UI/UX Design',
      description: 'Michael creates stunning user experiences that combine beautiful design with optimal functionality.'
    },
    {
      name: 'Emily Thompson',
      role: 'Marketing Director',
      specialty: 'Digital Marketing & SEO',
      description: 'Emily develops data-driven marketing strategies that drive growth and maximize ROI.'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started GenFusion Works with a vision to transform businesses through technology.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, establishing our reputation.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 15+ skilled professionals across development, design, and marketing.'
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received multiple awards for our innovative approach to web development and design.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded our services globally, serving clients across North America and Europe.'
    },
    {
      year: '2024',
      title: '500+ Projects',
      description: 'Celebrated completing over 500 successful projects with 99% client satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTIzMjg4MDJ8MA&ixlib=rb-4.1.0&q=85"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-purple-900/80 to-blue-900/90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're a passionate team of innovators dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                GenFusion Works was born from a simple yet powerful vision: to bridge the gap between innovative technology and business success. Founded in 2019, we started as a small team of passionate developers and designers who believed that every business deserves access to world-class digital solutions.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Over the years, we've grown from a startup into a trusted partner for businesses of all sizes. Our success isn't measured just in projects completed, but in the growth and transformation of our clients' businesses.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Today, we're proud to be at the forefront of digital innovation, helping businesses navigate the ever-evolving technology landscape while staying true to our core values of excellence, innovation, and client satisfaction.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 space-x-2"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NTIzMjg4MDJ8MA&ixlib=rb-4.1.0&q=85"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals who make GenFusion Works a leader in IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-purple-400 font-medium">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.specialty}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones that have shaped our company and defined our growth.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                      <div className="text-2xl font-bold text-purple-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-gray-900"></div>
                </motion.div>
              ))}
            </div>
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
                Ready to Work With Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the 150+ satisfied clients who have transformed their businesses with GenFusion Works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/quote"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-200"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;