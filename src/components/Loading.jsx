import { motion } from "framer-motion";

export default function Loading({ message = "Carregando..." }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full mb-4"
      />
      <p className="text-purple-700 font-medium">{message}</p>
    </div>
  );
}