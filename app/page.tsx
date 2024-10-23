"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import NeuralNetwork from '@/components/neural-network';
import { Brain, Code2, Database, Shield, Sparkles } from 'lucide-react';

const topics = [
  {
    title: 'Machine Learning Fundamentals',
    description: 'Master the core concepts of ML including supervised and unsupervised learning.',
    icon: Brain,
  },
  {
    title: 'Neural Networks and Deep Learning',
    description: 'Dive deep into neural architectures and modern deep learning techniques.',
    icon: Sparkles,
  },
  {
    title: 'AI Ethics and Future of AI',
    description: 'Explore the ethical implications and future possibilities of artificial intelligence.',
    icon: Shield,
  },
  {
    title: 'Practical AI Tools and Frameworks',
    description: 'Get hands-on experience with popular AI development tools and frameworks.',
    icon: Code2,
  },
  {
    title: 'Hands-on AI Projects',
    description: 'Build real-world AI applications through guided practical sessions.',
    icon: Database,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [topicsRef, topicsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <main className="min-h-screen bg-[#030014] overflow-hidden">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-[-20%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl" />
          <div className="absolute top-[20%] right-[-20%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Hero Section */}
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              variants={fadeIn}
            >
              AI & ML Workshop 2024
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
              variants={fadeIn}
            >
              Join us for an exciting AI and ML workshop! Dive into the latest technologies 
              and tools shaping the future of AI.
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4"
              variants={fadeIn}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl transition-all duration-200 hover:scale-105"
              >
                <Link href="/register">Register Now</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Neural Network */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-24"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl animate-pulse"></div>
            <Card className="backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl overflow-hidden">
              <NeuralNetwork />
            </Card>
          </motion.div>

          {/* Event Details */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center mb-24"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Event Details
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.div variants={fadeIn}>
                <Card className="p-8 backdrop-blur-xl bg-black/50 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Date & Time</h3>
                  <p className="text-gray-300">April 15-16, 2024<br />9:00 AM - 5:00 PM</p>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Card className="p-8 backdrop-blur-xl bg-black/50 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Venue</h3>
                  <p className="text-gray-300">Tech Innovation Center<br />Silicon Valley Campus</p>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Workshop Topics */}
          <motion.div
            ref={topicsRef}
            initial="hidden"
            animate={topicsInView ? "visible" : "hidden"}
            variants={stagger}
            className="mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Workshop Topics
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    whileHover={{ scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="p-6 h-full backdrop-blur-xl bg-black/50 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                          <Icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                      </div>
                      <p className="text-gray-300">{topic.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}