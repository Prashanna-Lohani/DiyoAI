import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { NEWS_ARTICLES } from '@/utils/constants';

export function News() {
  return (
    <section className='border-t border-border bg-white py-16 lg:py-24'>
      <FadeIn className='mx-auto max-w-300 px-6 md:px-8 lg:px-12'>
        <div className='flex flex-col gap-12 lg:flex-row lg:gap-16'>
          <div className='flex flex-col items-start gap-4 text-left lg:w-1/3'>
            <h2 className='text-h1 text-foreground'>
              Localizing AI: Diyo.ai in the News
            </h2>
            <p className='text-body-lg text-muted-foreground'>
              Breaking barriers, making AI work in local languages and
              contexts — explore how our solutions are tailored for local
              communities and businesses.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3'>
            {NEWS_ARTICLES.map((article, index) => (
              <div
                key={`${article.href}-${index}`}
                className='flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md'
              >
                <div className='flex h-28 items-center justify-center bg-muted p-6'>
                  <Image
                    src={article.logo}
                    alt={article.outlet}
                    className='h-full w-full object-contain'
                  />
                </div>
                <div className='flex flex-1 flex-col gap-4 p-5'>
                  <p className='line-clamp-2 text-sm font-semibold text-foreground'>
                    {article.title}
                  </p>
                  <Button
                    variant='outline'
                    size='sm'
                    className='mt-auto w-fit gap-1 rounded-lg bg-white px-4'
                    render={
                      <Link
                        href={article.href}
                        target='_blank'
                        rel='noopener noreferrer'
                      />
                    }
                  >
                    Read more
                    <FiArrowRight size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
