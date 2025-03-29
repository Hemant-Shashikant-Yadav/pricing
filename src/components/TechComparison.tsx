import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Plus } from "lucide-react";
import { services } from "../data/services";

interface ComparisonItem {
  stack: string[];
  total: number;
}

export const TechComparison: React.FC = () => {
  const [comparisons, setComparisons] = useState<ComparisonItem[]>([
    { stack: [], total: 0 },
    { stack: [], total: 0 },
  ]);

  const categories = ["frontend", "backend", "database"];

  const handleSelectTech = (tech: string, index: number) => {
    setComparisons((prev) => {
      const newComparisons = [...prev];
      const stack = newComparisons[index].stack;

      if (stack.includes(tech)) {
        newComparisons[index] = {
          stack: stack.filter((t) => t !== tech),
          total: calculateTotal(stack.filter((t) => t !== tech)),
        };
      } else {
        // Only allow one tech per category
        const techService = services.find((s) => s.id === tech);
        if (techService) {
          const category = techService.category;
          const filteredStack = stack.filter((t) => {
            const service = services.find((s) => s.id === t);
            return service?.category !== category;
          });
          newComparisons[index] = {
            stack: [...filteredStack, tech],
            total: calculateTotal([...filteredStack, tech]),
          };
        }
      }

      return newComparisons;
    });
  };

  const calculateTotal = (stack: string[]): number => {
    return stack.reduce((total, tech) => {
      const service = services.find((s) => s.id === tech);
      return total + (service?.price || 0);
    }, 0);
  };

  const getServicesByCategory = (category: string) => {
    return services.filter((service) => service.category === category);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
        Tech Stack Comparison
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {comparisons.map((comparison, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="text-center bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-700 mb-2">
                Stack {index + 1}
              </h3>
              <div className="text-2xl font-bold text-blue-600">
                ₹{comparison.total.toLocaleString()}
              </div>
            </div>

            {categories.map((category) => (
              <div key={category} className="space-y-2">
                <h4 className="font-medium text-gray-700 capitalize bg-gray-50 p-2 rounded-md">
                  {category}
                </h4>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                  {getServicesByCategory(category).map((service) => (
                    <motion.button
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelectTech(service.id, index)}
                      className={`p-3 sm:p-2 rounded-md text-sm flex items-center justify-between ${
                        comparison.stack.includes(service.id)
                          ? "bg-blue-100 text-blue-700 border-blue-200"
                          : "bg-gray-50 text-gray-700 border-gray-200"
                      } border transition-colors duration-200`}
                    >
                      <span className="mr-2">{service.label}</span>
                      {comparison.stack.includes(service.id) ? (
                        <Check className="w-4 h-4 flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 flex-shrink-0" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="text-base sm:text-lg font-medium text-center sm:text-left">
            Difference: ₹
            {Math.abs(
              comparisons[0].total - comparisons[1].total
            ).toLocaleString()}
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 hidden sm:block" />
        </div>
      </motion.div>
    </div>
  );
};
