import { Button } from '@/components/ui/button';
import React from 'react';

const features = [
  { title: "Fast Setup", description: "Get your application running in minutes with easy integration." },
  { title: "Scalable", description: "Handle growing users without worrying about infrastructure." },
  { title: "Secure", description: "Top-notch security to protect your data at every layer." },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full">
      <section className=" flex flex-col items-center justify-center text-center p-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Product!</h1>
        <p className="text-lg md:text-2xl mb-6">Build better, faster, and smarter with our SaaS solution.</p>
        <Button className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-md">Get Started</Button>
      </section>

      <section className="py-12 px-0 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-screen-lg mx-auto w-full relative">
  {features.map((feature, index) => (
    <div key={index} className="p-6 shadow-lg rounded-lg border bg-white flex flex-col items-start">
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-700">{feature.description}</p>
    </div>
  ))}
</section>
<section className="py-6 px-0 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-screen-lg mx-auto w-full relative">
  {features.map((feature, index) => (
    <div key={index} className="p-6 shadow-lg rounded-lg border bg-white flex flex-col items-start">
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-700">{feature.description}</p>
    </div>
  ))}
</section>

      <footer className="text-center py-4 bg-gray-100 text-gray-600">
        Powered by GoGetWell | © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Home;
