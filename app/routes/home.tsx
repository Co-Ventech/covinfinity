import React from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { MainLayout } from "../layouts/MainLayout";
import type { Route } from "./+types/home";
import { ROUTES } from "../constants/routes";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Co-Ventech - Innovative Technology Solutions" },
    {
      name: "description",
      content: "Empowering businesses with cutting-edge technology solutions",
    },
  ];
}

// Features for the features section
const features = [
  {
    id: 1,
    title: "Innovative Solutions",
    description:
      "We develop cutting-edge technology solutions tailored to your business needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Expert Team",
    description:
      "Our team of seasoned professionals brings years of experience to every project.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Customer-Centric",
    description:
      "We put your needs first, ensuring solutions that align with your business goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

// Testimonials for the testimonials section
const testimonials = [
  {
    id: 1,
    content:
      "Co-Ventech transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Jane Smith",
    role: "CEO, TechCorp",
  },
  {
    id: 2,
    content:
      "Working with Co-Ventech was a game-changer for our company. Their expertise helped us streamline operations and increase efficiency by 40%.",
    author: "John Doe",
    role: "CTO, InnovateCo",
  },
  {
    id: 3,
    content:
      "The team at Co-Ventech truly understands business needs. They provided us with custom solutions that perfectly addressed our challenges.",
    author: "Sarah Johnson",
    role: "Operations Director, GrowthInc",
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Innovative Technology Solutions for Your Business
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                We help businesses leverage technology to grow, innovate, and
                succeed in today's digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ROUTES.SERVICES}>
                  <Button variant="primary" size="lg">
                    Our Services
                  </Button>
                </Link>
                <Link to={ROUTES.CONTACT}>
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div className="p-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                  <div className="bg-white dark:bg-gray-800 p-8">
                    <img
                      src="https://via.placeholder.com/600x400?text=Co-Ventech"
                      alt="Co-Ventech"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Co-Ventech?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              solutions that drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature) => (
              <Card key={feature.id} className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-blue-100 dark:bg-gray-800 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's work together to build innovative solutions tailored to your
            specific needs.
          </p>
          <Link to={ROUTES.CONTACT}>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-8">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg
                      className="h-8 w-8 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
