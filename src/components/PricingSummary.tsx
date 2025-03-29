import React from 'react';
import { Download } from 'lucide-react';
import { ServiceOption, SelectedServices, CustomFeature } from '../types';

interface PricingSummaryProps {
  selectedServices: SelectedServices;
  services: ServiceOption[];
  customFeatures: CustomFeature[];
  onExportPDF: () => void;
}

export const PricingSummary: React.FC<PricingSummaryProps> = ({
  selectedServices,
  services,
  customFeatures,
  onExportPDF,
}) => {
  const selectedServicesList = services.filter((service) => selectedServices[service.id]);
  const servicesTotal = selectedServicesList.reduce((sum, service) => sum + service.price, 0);
  const customFeaturesTotal = customFeatures.reduce((sum, feature) => sum + feature.price, 0);
  const total = servicesTotal + customFeaturesTotal;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Summary</h2>
      <div className="space-y-4">
        {selectedServicesList.map((service) => (
          <div key={service.id} className="flex justify-between text-gray-700">
            <span>{service.label}</span>
            <span>${service.price.toLocaleString()}</span>
          </div>
        ))}
        
        {customFeatures.length > 0 && (
          <>
            <div className="pt-2 border-t border-gray-200">
              <h3 className="font-medium text-gray-800 mb-2">Custom Features</h3>
              {customFeatures.map((feature, index) => (
                <div key={index} className="flex justify-between text-gray-700">
                  <span>{feature.name}</span>
                  <span>${feature.price.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Estimate</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>
        <button
          onClick={onExportPDF}
          className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Export Quote
        </button>
      </div>
    </div>
  );
};