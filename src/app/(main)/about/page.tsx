import * as React from 'react';
import type { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';
import AboutMeSection from '@/components/sections/AboutMeSection';
import { organizationSchema, personSchema } from '@/utils/schemas';


export const metadata: Metadata = {
  title: 'About Us - Zen Virtual Piano',
  description: 'Learn about the Zen Virtual Piano team and our mission to create a zero-latency, ad-free virtual piano experience for everyone.',
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <AboutContent>
        <AboutMeSection />
      </AboutContent>
    </>
  );
}
