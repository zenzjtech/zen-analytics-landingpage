'use client';
 
import { initMixpanel } from '@/lib/mixpanelClient';
import { useEffect } from 'react';

 
export default function Mixpanel() {
 
  useEffect(() => {
    initMixpanel(); // Initialize Mixpanel
  }, []);
 
  return (
    null
  );
}