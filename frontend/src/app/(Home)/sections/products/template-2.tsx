import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { PRODUCTS } from "@/utils/constants";

export function ProductsTemplate2() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-300 px-6 md:px-8 lg:px-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="rounded-full bg-secondary/15 px-4 py-1.5 text-xs font-bold tracking-wide text-secondary uppercase">
            Our Products
          </span>
          <h2 className="mt-4 text-h1 text-foreground">
            Products Built for Real Conversations.
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Two AI assistants, purpose-built for how people actually speak.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <FadeIn
                key={product.name}
                className="flex flex-col overflow-hidden rounded-[2.5rem] border-2 border-foreground/5 bg-white shadow-lg"
              >
                <div className="overflow-hidden rounded-t-[2.5rem]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-start gap-3 p-8 text-left">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-bold tracking-wide text-secondary uppercase">
                    {product.eyebrow}
                  </span>
                  <h3 className="text-h2 text-foreground">
                    {product.headline}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {product.description}
                  </p>
                  <Button className="mt-2 rounded-full bg-secondary px-6 text-secondary-foreground hover:bg-secondary/80">
                    Discover {product.name}
                  </Button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
