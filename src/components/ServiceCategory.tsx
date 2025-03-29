import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  LayoutGrid as Browser,
  Smartphone,
  Database,
  Server,
  Layout,
} from "lucide-react";
import { Category, SelectedServices, ServiceOption } from "../types";

interface ServiceCategoryProps {
  category: Category;
  services: ServiceOption[];
  selectedServices: SelectedServices;
  onServiceToggle: (serviceId: string) => void;
}

const iconMap = {
  Globe,
  Browser,
  Smartphone,
  Database,
  Server,
  Layout,
};

export const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  category,
  services,
  selectedServices,
  onServiceToggle,
}) => {
  const Icon = iconMap[category.icon as keyof typeof iconMap];
  const categoryServices = services.filter(
    (service) => service.category === category.id
  );

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mb-6"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center mb-4">
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Icon className="w-6 h-6 text-blue-600 mr-2" />
        </motion.div>
        <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
      </div>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="space-y-3">
        {categoryServices.map((service) => (
          <motion.div
            key={service.id}
            className="flex items-center justify-between"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <label className="flex items-center cursor-pointer flex-1">
              <input
                type="checkbox"
                checked={selectedServices[service.id] || false}
                onChange={() => onServiceToggle(service.id)}
                className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">{service.label}</span>
            </label>
            <span className="text-gray-600 font-medium">
              ₹{service.price.toLocaleString()}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
