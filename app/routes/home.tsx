import React from "react";
import { Link } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import type { Route } from "./+types/home";
import { ROUTES } from "../constants/routes";
import Navbar from "~/components/Navbar";
import CompanySliderRight from "~/components/CompanySliderRight";
import CompanySliderLeft from "~/components/CompanySliderLeft";

import Hero from '../components/sections/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Co-Ventech - Innovative Technology Solutions' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions',
    },
  ];
}



export default function Home() {
  return (
    <MainLayout>
      <Navbar/>
      <Hero />
      <CompanySliderRight/>
      <CompanySliderLeft/>
    </MainLayout>
  );
}
