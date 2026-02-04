import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Seo = () => {
  const router = useRouter();

  const titles = [
    { path: '/', title: 'DroMii' },
    { path: '/platform', title: 'DroMii | Platform' },
    { path: '/solutions', title: 'DroMii | Solutions' },
    { path: '/software', title: 'DroMii | Software' },
    { path: '/hardware/sales', title: 'DroMii | Hardware' },
    { path: '/hardware/operational', title: 'DroMii | Hardware' },
    { path: '/hardware/sensors', title: 'DroMii | Hardware' },
    { path: '/about', title: 'DroMii | About' },
    { path: '/contact', title: 'DroMii | Contact' },
    { path: '/esg', title: 'DroMii | ESG' },
    { path: '/application', title: 'DroMii | Application' },
  ];

  return (
    <Head>
      {titles.map(
        ({ path, title }) =>
          router.pathname === path && <title key={path}>{title}</title>
      )}
    </Head>
  );
};

export default Seo;
