import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@/utils/constants';

export function Products() {
  return (
    <section className='border-t border-border bg-white py-16 lg:py-24'>
      <div className='mx-auto max-w-300 px-6 md:px-8 lg:px-12'>
        <FadeIn className='mx-auto max-w-2xl text-center'>
          <span className='text-xs font-semibold tracking-wider text-secondary uppercase'>
            Our Products
          </span>
          <h2 className='mt-3 text-h1 text-foreground'>
            Products Built for Real Conversations.
          </h2>
          <p className='mt-4 text-body-lg text-muted-foreground'>
            Two AI assistants, purpose-built for how people actually speak.
          </p>
        </FadeIn>

        <div className='mt-16 flex flex-col gap-12'>
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <FadeIn
                key={product.name}
                className={cn(
                  'flex flex-col items-center gap-10 lg:flex-row lg:gap-16',
                  product.imageSide === 'right' && 'lg:flex-row-reverse',
                )}
              >
                <div className='group w-full max-w-xl overflow-hidden rounded-3xl lg:flex-1'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className='w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                  />
                </div>

                <div className='flex flex-1 flex-col items-start gap-3 text-left'>
                  <span className='flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
                    <Icon size={20} />
                  </span>
                  <span className='text-xs font-semibold tracking-wider text-secondary uppercase'>
                    {product.eyebrow}
                  </span>
                  <h3 className='text-h2 text-foreground'>
                    {product.headline}
                  </h3>
                  <p className='max-w-sm text-body text-muted-foreground'>
                    {product.description}
                  </p>
                  <Button
                    variant='outline'
                    className='mt-2 rounded-lg bg-white px-6'
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
