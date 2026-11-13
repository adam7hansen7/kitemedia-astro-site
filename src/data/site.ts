// Shared site-wide content. Edit here and every page updates.

export const contact = {
  phone: '(435) 753-7553',
  phoneHref: 'tel:+14357537553',
  email: 'info@kitemedia.com',
  street: '24 S. Main St.',
  city: 'Logan, UT 84321',
  appleMaps:
    'https://maps.apple.com/?address=24%20S%20Main%20St,%20Logan,%20UT%20%2084321,%20United%20States&auid=14226739725579611337&ll=41.730983,-111.834617&lsp=9902&q=Kite%20Media&t=m',
  googleMaps: 'https://goo.gl/maps/r3PPtvoLVq22jTDA7',
  googlePartner: 'https://www.google.com/partners/agency?id=6485543339',
};

export const social = [
  { name: 'Facebook', href: 'https://www.facebook.com/KiteMedia/' },
  { name: 'Instagram', href: 'https://www.instagram.com/kite_media/' },
  { name: 'X', href: 'https://twitter.com/Kite_Media' },
  { name: 'YouTube', href: 'https://www.youtube.com/@Kite_Media' },
];

export const serviceNav = [
  { label: 'Web Design', href: '/services/website-design/' },
  { label: 'Search Engine Optimization', href: '/services/search-engine-optimization/' },
  { label: 'Pay-Per-Click Advertising', href: '/services/pay-per-click/' },
];

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/', children: serviceNav },
  { label: 'Our Work', href: '/portfolio/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Meet the Team', href: '/our-team/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

export const footerServices = [
  { label: 'Website Design', href: '/services/website-design/' },
  { label: 'Search Engine Optimization', href: '/services/search-engine-optimization/' },
  { label: 'Pay-Per-Click Advertising', href: '/services/pay-per-click/' },
  { label: 'Social Media Advertising' },
  { label: 'Graphic Design' },
  { label: 'Content Creation' },
];

// Where the contact forms send submissions. Set PUBLIC_FORM_ENDPOINT in Cloudflare
// (and PUBLIC_FORM_ACCESS_KEY if your form service needs one). See README.
export const form = {
  endpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  accessKey: import.meta.env.PUBLIC_FORM_ACCESS_KEY ?? '',
};
