import React from "react";
import Layout from "./src/Component/Layout";
import Theme from "./src/Component/Theme";
import { AnimatePresence } from "framer-motion";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <Theme>{element}</Theme>;
}
