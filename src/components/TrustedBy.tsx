"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";


const companies = [
  {
    id: "google",
    description: "Google",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='40' font-family='Arial, sans-serif' font-size='28' font-weight='600' text-anchor='middle' fill='%236d4c41'%3EGoogle%3C/text%3E%3C/svg%3E",
    className: "h-12 w-auto opacity-60"
  },
  {
    id: "microsoft",
    description: "Microsoft",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='40' font-family='Arial, sans-serif' font-size='26' font-weight='600' text-anchor='middle' fill='%236d4c41'%3EMicrosoft%3C/text%3E%3C/svg%3E",
    className: "h-12 w-auto opacity-60"
  },
  {
    id: "nvidia",
    description: "Nvidia",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='40' font-family='Arial, sans-serif' font-size='28' font-weight='600' text-anchor='middle' fill='%236d4c41'%3ENvidia%3C/text%3E%3C/svg%3E",
    className: "h-12 w-auto opacity-60"
  },
  {
    id: "spotify",
    description: "Spotify",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='40' font-family='Arial, sans-serif' font-size='28' font-weight='600' text-anchor='middle' fill='%236d4c41'%3ESpotify%3C/text%3E%3C/svg%3E",
    className: "h-12 w-auto opacity-60"
  },
  {
    id: "meta",
    description: "Meta",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='40' font-family='Arial, sans-serif' font-size='30' font-weight='600' text-anchor='middle' fill='%236d4c41'%3EMeta%3C/text%3E%3C/svg%3E",
    className: "h-12 w-auto opacity-60"
  },
  {
    id: "airbnb",
    description: "Airbnb",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='100' y='40' font-family='Arial, sans-serif' font-size='28' font-weight='600' text-anchor='middle' fill='%236d4c41'%3EAirbnb%3C/text%3E%3C/svg%3E",
    className: "h-12 w-auto opacity-60"
  }
];

export function TrustedBy() {
  return (
    <section className="mb-12 md:mb-16">
      <div className="container flex flex-col items-center text-center">
        <div className="text-sm font-medium mb-4 text-[#6d4c41] uppercase tracking-wide">
          Chosen by professionals from
        </div>
      </div>
      <div className="pt-3 overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl px-4 sm:px-6 lg:px-0">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
              skipSnaps: false,
              dragFree: true
            }}
            plugins={[AutoScroll({ 
              playOnInit: true, 
              speed: 0.8,
              stopOnInteraction: false,
              stopOnMouseEnter: false
            })]}
          >
            <CarouselContent className="ml-0">
              {/* Duplicate the companies array for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <CarouselItem
                  key={`${company.id}-${index}`}
                  className="flex basis-1/2 justify-center pl-0 xs:basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={company.image}
                        alt={company.description}
                        className={company.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#f8f5f0] to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f8f5f0] to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}