'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const fadeInUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut' as const },
  viewport: { once: true, amount: 0.2 },
};

const principles = [
  {
    title: 'Nature Based',
    description:
      'Our compositions begin with thoughtfully selected botanicals and a pure sandalwood-led foundation, shaped for a refined and fabric-safe experience.',
  },
  {
    title: 'Heritage Craftsmanship',
    description:
      'We carry forward the patience and precision of traditional Kannauj perfumery, where fragrance is matured with care rather than rushed.',
  },
  {
    title: 'Globally Inspired',
    description:
      'Our profiles look outward to the world while remaining grounded in India&apos;s aromatic heritage and the quiet elegance of Kannauj.',
  },
];

const craftSteps = [
  {
    step: '01',
    title: 'Handpicked Botanicals',
    description:
      'Flowers, herbs, roots, and aromatic materials are selected with care from trusted fields and traditional growers.',
  },
  {
    step: '02',
    title: 'In-House Extraction',
    description:
      'We stay close to the extraction process so purity, consistency, and authenticity remain present in every drop.',
  },
  {
    step: '03',
    title: 'Patient Formulation',
    description:
      'Each fragrance is composed slowly and refined in measured stages, allowing its character to become deeper and more harmonious.',
  },
  {
    step: '04',
    title: 'Timeless Elegance',
    description:
      'The result is a fragrance designed to evolve gently on fabric and leave a memorable, understated impression.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Header />

      <section className="overflow-hidden border-b border-brand-text/10">
        <div className="container-luxury grid lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-20 items-center py-14 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="relative min-h-[520px] md:min-h-[720px] overflow-hidden rounded-sm bg-brand-text/5 shadow-xl"
          >
            <Image
              src="/images/kannauj-distillation.jpeg"
              alt="Traditional Kannauj perfume distillation with flowers and copper vessels"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover transition-transform duration-1000 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <p className="text-xs uppercase tracking-[0.24em] text-white/80 mb-2">
                Kannauj, Uttar Pradesh
              </p>
              <p className="font-serif text-2xl md:text-3xl">
                A tradition shaped by patience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary mb-5">
              About Us
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[0.98] mb-7">
              Rooted in Nature.
              <span className="block mt-2 text-brand-primary">
                Inspired by the World.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-brand-text/75 mb-5">
              Swavik Fabric Perfumes is a heritage fragrance house from Kannauj,
              carrying forward generations of traditional perfumery wisdom. We
              create fragrances with a contemporary point of view while staying
              close to the natural aromatic legacy that shaped our home.
            </p>
            <p className="text-lg leading-relaxed text-brand-text/75 mb-5">
              Each composition is built with patience, purpose, and an enduring
              respect for the craft. Our approach is measured and hands-on, from
              carefully chosen raw materials to the final balance of every note.
            </p>
            <p className="text-lg leading-relaxed text-brand-text/75">
              For us, luxury is not excess. It is the quiet confidence of a
              fragrance that has been given the time to become itself.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white/55 border-b border-brand-text/10">
        <motion.div
          {...fadeInUp}
          className="container-luxury max-w-4xl text-center"
        >
          <p className="text-5xl font-serif text-brand-secondary leading-none mb-2">
            &ldquo;
          </p>
          <p className="text-2xl md:text-4xl font-serif leading-snug text-brand-text">
            Fragrance is composed through patience, nature, and memory.
          </p>
          <p className="text-5xl font-serif text-brand-secondary leading-none mt-2">
            &rdquo;
          </p>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="container-luxury">
          <motion.div {...fadeInUp} className="max-w-2xl mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary mb-3">
              Why Swavik
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">
              Heritage, made relevant.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.25 }}
                className="border border-brand-text/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-brand-secondary text-2xl mb-5">+</p>
                <h3 className="text-2xl font-serif font-bold mb-3 text-brand-primary">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-text/70">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-primary text-white">
        <div className="container-luxury grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
          <motion.div {...fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-secondary mb-3">
              Our Craft
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5">
              Slow-crafted luxury in every drop.
            </h2>
            <p className="text-white/75 leading-relaxed">
              In a world driven by speed, we choose a slower rhythm. Our
              fragrances are shaped by hand, refined with precision, and allowed
              to mature into compositions with depth and character.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {craftSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.25 }}
                className="border-t border-white/25 pt-5"
              >
                <p className="text-sm font-semibold tracking-widest text-brand-secondary mb-3">
                  {item.step}
                </p>
                <h3 className="text-xl font-serif font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
