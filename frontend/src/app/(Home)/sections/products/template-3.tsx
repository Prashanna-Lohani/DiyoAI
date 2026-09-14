import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { PRODUCTS } from "@/utils/constants";

export function ProductsTemplate3() {
  return (
    <section className="border-b-2 border-foreground bg-background">
      <div className="mx-auto max-w-300 border-x-2 border-foreground px-6 py-16 md:px-8 lg:px-12 lg:py-24">
        <FadeIn className="mx-auto max-w-2xl border-2 border-foreground p-6 text-center">
          <span className="text-xs font-bold tracking-widest text-foreground uppercase">
            Our Products
          </span>
          <h2 className="mt-3 text-h1 text-foreground">
            Products Built for Real Conversations.
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Two AI assistants, purpose-built for how people actually speak.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 divide-y-2 divide-foreground border-2 border-t-0 border-foreground md:grid-cols-2 md:divide-x-2 md:divide-y-0">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <FadeIn
                key={product.name}
                className="flex flex-col items-start gap-3 p-8 text-left"
              >
                <div className="mb-2 w-full overflow-hidden border-2 border-foreground">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="aspect-4/3 w-full object-cover grayscale"
                  />
                </div>
                <span className="flex h-11 w-11 items-center justify-center border-2 border-foreground text-foreground">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-bold tracking-widest text-foreground uppercase">
                  {product.eyebrow}
                </span>
                <h3 className="text-h2 text-foreground">{product.headline}</h3>
                <p className="text-body text-muted-foreground">
                  {product.description}
                </p>
                <Button
                  variant="ghost"
                  className="mt-2 rounded-none border-2 border-foreground px-6"
                >
                  Discover {product.name}
                </Button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
