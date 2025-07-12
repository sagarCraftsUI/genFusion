import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle, 
  ArrowRight, 
  Clock,
  DollarSign,
  Users,
  Zap,
  Shield,
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Lightbulb
} from 'lucide-react';

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    services: [],
    // Step 2: Project Details
    projectType: '',
    timeline: '',
    budget: '',
    features: [],
    // Step 3: Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    {
      id: 'web-development',
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications',
      basePrice: 5000
    },
    {
      id: 'mobile-app',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'iOS and Android applications',
      basePrice: 8000
    },
    {
      id: 'ui-ux',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User interface and experience design',
      basePrice: 3000
    },
    {
      id: 'digital-marketing',
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'SEO, PPC, and social media marketing',
      basePrice: 2000
    },
    {
      id: 'product-development',
      icon: Lightbulb,
      title: 'Product Development',
      description: 'End-to-end product creation',
      basePrice: 12000
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology advisory',
      basePrice: 1500
    }
  ];

  const projectTypes = [
    { id: 'startup', label: 'Startup/New Business', multiplier: 1.0 },
    { id: 'small-business', label: 'Small Business', multiplier: 1.2 },
    { id: 'enterprise', label: 'Enterprise', multiplier: 1.8 },
    { id: 'non-profit', label: 'Non-Profit', multiplier: 0.8 }
  ];

  const timelines = [
    { id: 'asap', label: 'ASAP (Rush)', multiplier: 1.5 },
    { id: '1-month', label: '1 Month', multiplier: 1.3 },
    { id: '2-3-months', label: '2-3 Months', multiplier: 1.0 },
    { id: '3-6-months', label: '3-6 Months', multiplier: 0.9 },
    { id: 'flexible', label: 'Flexible Timeline', multiplier: 0.8 }
  ];

  const budgetRanges = [
    { id: 'under-5k', label: 'Under $5,000', multiplier: 0.7 },
    { id: '5k-15k', label: '$5,000 - $15,000', multiplier: 1.0 },
    { id: '15k-50k', label: '$15,000 - $50,000', multiplier: 1.3 },
    { id: '50k-100k', label: '$50,000 - $100,000', multiplier: 1.6 },
    { id: 'over-100k', label: 'Over $100,000', multiplier: 2.0 }
  ];

  const features = [
    { id: 'responsive', label: 'Responsive Design', price: 500 },
    { id: 'cms', label: 'Content Management System', price: 1500 },
    { id: 'ecommerce', label: 'E-commerce Functionality', price: 3000 },
    { id: 'api', label: 'API Integration', price: 2000 },
    { id: 'analytics', label: 'Analytics & Reporting', price: 1000 },
    { id: 'seo', label: 'SEO Optimization', price: 800 },
    { id: 'security', label: 'Advanced Security', price: 1200 },
    { id: 'hosting', label: 'Hosting & Maintenance', price: 1500 }
  ];

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(id => id !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleFeatureToggle = (featureId) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(id => id !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const calculateEstimate = () => {
    let total = 0;
    
    // Base price from services
    formData.services.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) total += service.basePrice;
    });

    // Apply multipliers
    const projectTypeMultiplier = projectTypes.find(pt => pt.id === formData.projectType)?.multiplier || 1;
    const timelineMultiplier = timelines.find(t => t.id === formData.timeline)?.multiplier || 1;
    const budgetMultiplier = budgetRanges.find(b => b.id === formData.budget)?.multiplier || 1;

    total *= projectTypeMultiplier * timelineMultiplier * budgetMultiplier;

    // Add features
    formData.features.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) total += feature.price;
    });

    return Math.round(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

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
                Get Your Quote
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Get a personalized quote for your project in just 3 simple steps. No hidden fees, no surprises.
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Step {step} of 3</span>
                <span className="text-sm text-gray-400">{Math.round((step / 3) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
          >
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Calculator className="h-8 w-8 text-purple-400" />
                  <span>Select Your Services</span>
                </h2>
                <p className="text-gray-300 mb-8">Choose the services you need for your project.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                        formData.services.includes(service.id)
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <service.icon className={`h-8 w-8 ${
                          formData.services.includes(service.id) ? 'text-purple-400' : 'text-gray-400'
                        }`} />
                        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                        {formData.services.includes(service.id) && (
                          <CheckCircle className="h-5 w-5 text-purple-400" />
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                      <p className="text-purple-400 font-medium">Starting at ${service.basePrice.toLocaleString()}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    disabled={formData.services.length === 0}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Zap className="h-8 w-8 text-purple-400" />
                  <span>Project Details</span>
                </h2>
                <p className="text-gray-300 mb-8">Tell us more about your project requirements.</p>
                
                <div className="space-y-8">
                  {/* Project Type */}
                  <div>
                    <label className="block text-white font-medium mb-4">Project Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <motion.div
                          key={type.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            formData.projectType === type.id
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{type.label}</span>
                            {formData.projectType === type.id && (
                              <CheckCircle className="h-5 w-5 text-purple-400" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-white font-medium mb-4">Timeline</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timelines.map((timeline) => (
                        <motion.div
                          key={timeline.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData(prev => ({ ...prev, timeline: timeline.id }))}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            formData.timeline === timeline.id
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{timeline.label}</span>
                            {formData.timeline === timeline.id && (
                              <CheckCircle className="h-5 w-5 text-purple-400" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-white font-medium mb-4">Budget Range</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {budgetRanges.map((budget) => (
                        <motion.div
                          key={budget.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setFormData(prev => ({ ...prev, budget: budget.id }))}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            formData.budget === budget.id
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium">{budget.label}</span>
                            {formData.budget === budget.id && (
                              <CheckCircle className="h-5 w-5 text-purple-400" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <label className="block text-white font-medium mb-4">Additional Features</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {features.map((feature) => (
                        <motion.div
                          key={feature.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleFeatureToggle(feature.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                            formData.features.includes(feature.id)
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-gray-600 hover:border-gray-500'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-white font-medium">{feature.label}</span>
                              <p className="text-purple-400 text-sm">+${feature.price}</p>
                            </div>
                            {formData.features.includes(feature.id) && (
                              <CheckCircle className="h-5 w-5 text-purple-400" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevStep}
                    className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-200"
                  >
                    Previous
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextStep}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-2">
                  <Users className="h-8 w-8 text-purple-400" />
                  <span>Contact Information</span>
                </h2>
                <p className="text-gray-300 mb-8">Tell us about yourself and your project.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Project Description</label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell us more about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Quote Summary */}
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-purple-500/20">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                      <DollarSign className="h-6 w-6 text-purple-400" />
                      <span>Estimated Project Cost</span>
                    </h3>
                    <div className="text-3xl font-bold text-purple-400 mb-4">
                      ${calculateEstimate().toLocaleString()}
                    </div>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p>• Selected Services: {formData.services.length}</p>
                      <p>• Additional Features: {formData.features.length}</p>
                      <p>• Timeline: {timelines.find(t => t.id === formData.timeline)?.label || 'Not specified'}</p>
                    </div>
                    <div className="mt-4 p-3 bg-purple-500/10 rounded-lg">
                      <p className="text-purple-400 text-sm">
                        <Shield className="h-4 w-4 inline mr-1" />
                        This is an estimate. Final pricing may vary based on specific requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={prevStep}
                      className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-200"
                    >
                      Previous
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Quote</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center"
            >
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Quote Request Submitted!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for your interest in our services. We'll review your requirements and get back to you within 24 hours with a detailed proposal.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>No obligation quote</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Quote;