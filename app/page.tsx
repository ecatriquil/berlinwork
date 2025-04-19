"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Menu, X } from "lucide-react";
import LogoMarquee from "@/components/logo-marquee";
import FeatureCard from "@/components/feature-card";
import { useState } from "react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center bg-black border-white">
      <main className="flex flex-col justify-center items-center">
        <Image
          src="/logo-berlinwork.png"
          alt="Logo"
          width={256}
          height={256}
          className="rounded"
        />
        <h2 className="text-white text-lg font-bold">
          Próximamente, una forma más dinámica de vestir a tu empresa.
        </h2>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-berlinwork.png"
            alt="Logo"
            width={64}
            height={64}
            className="rounded"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary"
          >
            Características
          </Link>
          <Link
            href="#clients"
            className="text-sm font-medium hover:text-primary"
          >
            Clientes
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Productos
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Sobre Nosotros
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Solicitar Presupuesto</Link>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">EmpresaStyle</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="container grid gap-6 py-6">
            <Link
              href="#features"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Características
            </Link>
            <Link
              href="#clients"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Clientes
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
            <Button asChild className="mt-4">
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                Solicitar Presupuesto
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-0 items-center">
          <div className="space-y-6 lg:pr-12 relative z-10">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Indumentaria empresarial que refleja tu identidad
            </h1>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
              Diseñamos y fabricamos ropa corporativa personalizada que destaca
              la imagen de tu empresa y fortalece tu marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact">
                  Solicitar Presupuesto
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Ver Catálogo</Link>
              </Button>
            </div>
          </div>

          {/* Contenedor de la imagen con efecto de desvanecido */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            {/* Gradiente de desvanecido desde la izquierda */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent z-10"></div>

            <Image
              src="/portada.jpg"
              alt="Indumentaria empresarial personalizada"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Diseño Personalizado",
      description:
        "Creamos diseños exclusivos adaptados a la identidad visual de tu empresa, con atención a cada detalle.",
      icon: "Palette",
    },
    {
      title: "Materiales Premium",
      description:
        "Utilizamos telas de alta calidad que garantizan durabilidad, comodidad y una apariencia profesional.",
      icon: "Shirt",
    },
    {
      title: "Bordado de Precisión",
      description:
        "Aplicamos técnicas avanzadas de bordado para lograr acabados perfectos en logos y elementos gráficos.",
      icon: "Scissors",
    },
    {
      title: "Entrega Rápida",
      description:
        "Cumplimos con los plazos establecidos para que tengas tu indumentaria cuando la necesitas.",
      icon: "Truck",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[700px] mx-auto">
            Ofrecemos soluciones completas de indumentaria corporativa con los
            más altos estándares de calidad
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section id="clients" className="py-16 md:py-20">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Empresas que confían en nosotros
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-[700px] mx-auto">
            Nos enorgullece trabajar con empresas líderes en diversos sectores
          </p>
        </div>

        <LogoMarquee />
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Potencia la imagen de tu empresa
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-[600px]">
              Contáctanos hoy mismo para recibir asesoramiento personalizado y
              un presupuesto adaptado a tus necesidades.
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Cuéntanos sobre tu proyecto"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">EmpresaStyle</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Indumentaria empresarial personalizada de alta calidad para
              potenciar la imagen de tu empresa.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Uniformes Corporativos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Camisas Personalizadas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Chaquetas y Abrigos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Accesorios Corporativos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                info@empresastyle.com
              </li>
              <li className="text-sm text-muted-foreground">
                +54 11 1234-5678
              </li>
              <li className="text-sm text-muted-foreground">
                Av. Corrientes 1234, CABA, Argentina
              </li>
              <li className="flex gap-4 mt-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EmpresaStyle. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
