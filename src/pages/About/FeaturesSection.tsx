import { motion } from "framer-motion";
import {
  BarChart3,
  CreditCard,
  Users,
  Truck,
  Shield,
  TrendingUp,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "./helper";

const PlatformFeatures = () => {
  const features = [
    {
      icon: CreditCard,
      text: "Secure and flexible payment options (including BNPL)",
    },
    {
      icon: Users,
      text: "Seller dashboards for inventory and order management",
    },
    { icon: Truck, text: "Integrated logistics and delivery support" },
    {
      icon: Shield,
      text: "Ratings and review system to build marketplace trust",
    },
    { icon: TrendingUp, text: "Smart search and discovery tools" },
    {
      icon: BarChart3,
      text: "Data insights to help sellers optimize performance",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Key Platform Features
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Tools and capabilities designed for African commerce
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <p className="text-foreground">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
