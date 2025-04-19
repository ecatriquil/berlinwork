import Image from "next/image";

export default function LogoMarquee() {
  // Generamos 20 logos para el carrusel
  const logos = [
    {
      id: 1,
      src: "/logo-abastecedora.png",
      alt: "logo abastecedora patagonica",
    },
    {
      id: 2,
      src: "/logo-boya.jpg",
      alt: "logo boya cars",
    },
    {
      id: 3,
      src: "/logo-cv.png",
      alt: "logo cv",
    },
    {
      id: 4,
      src: "/logo-flamenco.jpg",
      alt: "logo flamenco tours",
    },
    {
      id: 5,
      src: "/logo-loica.jpg",
      alt: "logo loica",
    },
    {
      id: 6,
      src: "/logo-peninsula.png",
      alt: "logo peninsula",
    },
    {
      id: 7,
      src: "/logo-reyhierro.jpg",
      alt: "logo rey del hierro",
    },
    {
      id: 8,
      src: "/logo-rg.jpg",
      alt: "logo rg cars",
    },
    {
      id: 9,
      src: "/logo-riviera.jpg",
      alt: "logo riviera",
    },
    {
      id: 10,
      src: "/logo-yogur.jpg",
      alt: "logo yogur griego",
    },
  ];

  return (
    <div className="relative overflow-hidden py-8 bg-muted/30">
      {/* Gradiente izquierdo para efecto de desvanecimiento */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent"></div>

      {/* Primera fila de logos */}
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="mx-8 flex min-w-[150px] items-center justify-center"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}

        {/* Duplicamos los logos para crear un efecto continuo */}
        {logos.map((logo) => (
          <div
            key={`duplicate-${logo.id}`}
            className="mx-8 flex min-w-[150px] items-center justify-center"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              width={120}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Gradiente derecho para efecto de desvanecimiento */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}
