import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children, location }) {
  return (
    <AnimatePresence key={location.pathname}>
      <Header />
      <motion.main
        initial={{ opacity: 0 , scale: .8 }}
        animate={{ opacity: 1 , scale : 1  }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 2,
          
        }}
      >
        {children}
      </motion.main>

      <Footer />
    </AnimatePresence>
  );
}
