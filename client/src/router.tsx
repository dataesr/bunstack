import { Routes, Route } from "react-router-dom";
import Home from '@/routes';
import About from '@/routes/about';
import Layout from "@/layouts/main";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
