import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { PRODUCTS } from "@/utils/constants";

export function ProductsTemplate3() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-300 px-6 md:px-8 lg:px-12">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Our Products
          </span>
          <h2 className="mt-4 text-h1 font-normal text-foreground">
            Products built for real conversations.
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Two AI assistants, purpose-built for how people actually speak.
          </p>
        </FadeIn>

        <div className="mt-16 flex flex-col divide-y divide-border/60">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <FadeIn
                key={product.name}
                className="flex flex-col items-center gap-10 py-12 first:pt-0 last:pb-0 lg:flex-row lg:gap-16"
              >
                <div className="w-full max-w-xl overflow-hidden rounded-3xl bg-muted/40 lg:flex-1">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col items-start gap-3 text-left">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-foreground">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    {product.eyebrow}
                  </span>
                  <h3 className="text-h2 font-normal text-foreground">
                    {product.headline}
                  </h3>
                  <p className="max-w-sm text-body text-muted-foreground">
                    {product.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-2 rounded-full px-6 hover:bg-muted/60"
                  >
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
