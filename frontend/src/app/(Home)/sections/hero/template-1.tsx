import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

export function HeroTemplate1() {
  return (
    <section
      id='hero'
      className='relative flex min-h-140 items-center overflow-hidden sm:min-h-155 lg:min-h-180'
    >
      <video
        className='absolute inset-0 h-full w-full object-cover'
        src='/videos/Hero-section.mp4'
        autoPlay
        muted
        loop
        playsInline
      />
      <div className='absolute inset-0 bg-black/45' />

      <div className='relative z-10 mx-auto w-full max-w-360 px-6 md:px-8 lg:px-12'>
        <FadeIn className='flex max-w-2xl flex-col items-start gap-6 text-left'>
          <h1 className='text-display text-white'>
            AI That Speaks Your Language.
          </h1>
          <p className='text-body-lg text-white/85'>
            Diyo.ai builds speech and language AI technologies designed for
            multilingual and low-resource language environments.
          </p>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Button size='lg' className='rounded-lg px-8'>
              Request a Demo
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='rounded-lg bg-white px-8'
            >
              Explore Products
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
