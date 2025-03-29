import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ServiceCategory } from './components/ServiceCategory';
import { ClientForm } from './components/ClientForm';
import { PricingSummary } from './components/PricingSummary';
import { CustomFeatureForm } from './components/CustomFeatureForm';
import { TechComparison } from './components/TechComparison';
import { categories, services } from './data/services';
import { SelectedServices, ClientInfo, CustomFeature } from './types';
import { Code, ArrowDown } from 'lucide-react';

function App() {
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({});
  const [customFeatures, setCustomFeatures] = useState<CustomFeature[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    email: '',
    company: '',
    requirements: '',
  });

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  const handleAddCustomFeature = (feature: CustomFeature) => {
    setCustomFeatures((prev) => [...prev, feature]);
  };

  const handleExportPDF = () => {
    // TODO: Implement PDF export functionality
    console.log('Exporting PDF...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Code className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">DevQuote Calculator</h1>
          </div>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.button
          onClick={() => setShowComparison(!showComparison)}
          className="w-full mb-8 bg-blue-50 text-blue-600 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <span className="font-medium">
            {showComparison ? 'Hide Tech Stack Comparison' : 'Compare Tech Stacks'}
          </span>
          <motion.div
            animate={{ rotate: showComparison ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>

        {showComparison && <TechComparison />}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ClientForm clientInfo={clientInfo} onClientInfoChange={setClientInfo} />
            </motion.div>
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCategory
                  category={category}
                  services={services}
                  selectedServices={selectedServices}
                  onServiceToggle={handleServiceToggle}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categories.length * 0.1 }}
            >
              <CustomFeatureForm onAddFeature={handleAddCustomFeature} />
            </motion.div>
          </div>
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <PricingSummary
              selectedServices={selectedServices}
              services={services}
              customFeatures={customFeatures}
              onExportPDF={handleExportPDF}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;