import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Outlet />
    </AnimatePresence>
  );
}
