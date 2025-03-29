import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        >
          <Code className="w-24 h-24 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-white">
            Display Promotion (IT & WEB)
          </h1>
          <p className="text-blue-100 text-lg">
            Building the future of software development
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <div className="h-1 bg-blue-400 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
};
