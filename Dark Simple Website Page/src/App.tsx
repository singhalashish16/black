import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Calculate gradient position based on mouse
  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background gradient based on mouse */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, rgba(236, 72, 153, 0.15) 0%, rgba(0, 0, 0, 0) 50%), 
                       radial-gradient(circle at ${100 - gradientX}% ${100 - gradientY}%, rgba(34, 197, 94, 0.12) 0%, rgba(0, 0, 0, 0) 50%),
                       radial-gradient(circle at ${gradientY}% ${gradientX}%, rgba(251, 146, 60, 0.1) 0%, rgba(0, 0, 0, 0) 50%),
                       black`,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
        <motion.div
          className="max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Top decorative line */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />

          {/* Quote */}
          <motion.div className="space-y-6">
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl leading-relaxed tracking-wide text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              सच है विपत्ति जब आती है ,
            </motion.p>
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl leading-relaxed tracking-wide text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              कायर को ही दहलाती है,
            </motion.p>
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl leading-relaxed tracking-wide text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              शूरमा नहीं विचलित होते ,
            </motion.p>
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl leading-relaxed tracking-wide text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              एक क्षण नहीं धीरज खोते
            </motion.p>
          </motion.div>

          {/* Bottom decorative line */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          />
        </motion.div>
      </div>

      {/* Subtle grain effect overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-soft-light z-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>
    </div>
  );
}