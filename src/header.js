import React from 'react';
import Navigation from '@economist/component-navigation';
import navigationLinks from '@economist/component-sections-card/lib/context';

navigationLinks.media.forEach((mediaLink) => {
  mediaLink.icon = {
    useBackground: true,
    color: 'chicago',
    icon: mediaLink.meta,
  };
  return mediaLink;
});

const sharedMenu = {
  topic: {
    title: 'Topics',
    href: '/sections',
  },
  more: {
    title: 'More',
    href: '/digital',
  },
  subscribe: {
    title: 'Subscribe',
    href: 'https://subscriptions.economist.com/',
  },
};
const moreBalloonData = {
  sections: [
    {
      'title': 'Economist on iPhone',
      'href': 'https://itunes.apple.com/us/app/economist-global-business/id951457811?ls=1&mt=8',
      internal: false,
    },
    {
      'title': 'Economist on iPad',
      'href': 'https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?path=apps%2ftheeconomist',
      internal: false,
    },
    {
      'title': 'Espresso',
      'href': '/digital',
    },
    {
      'title': 'Global Business Review',
      'href': '/sections/business-finance',
    },
    {
      'title': 'Work in Figures',
      'href': 'https://worldinfigures.com/',
    },
  ],
  'media': [
    {
      'title': 'Apps',
      'meta': 'apps',
      'href': '/digital',
      'internal': false,
      'icon': {
        'useBackground': true,
        'color': 'chicago',
        'icon': 'apps',
      },
    },
    {
      'title': 'Audio',
      'meta': 'headset',
      'href': '/audio-edition',
      'internal': false,
      'icon': {
        'useBackground': true,
        'color': 'chicago',
        'icon': 'headset',
      },
    },
    {
      'title': 'Video',
      'meta': 'video',
      'href': 'http://www.economist.com/multimedia',
      'internal': false,
      'icon': {
        'useBackground': true,
        'color': 'chicago',
        'icon': 'video',
      },
    },
    {
      'title': 'Radio',
      'meta': 'radio',
      'href': 'http://radio.economist.com/',
      'internal': false,
      'icon': {
        'useBackground': true,
        'color': 'chicago',
        'icon': 'radio',
      },
    },
    {
      'title': 'Films',
      'meta': 'film',
      'href': 'http://films.economist.com/',
      'internal': false,
      'icon': {
        'useBackground': true,
        'color': 'chicago',
        'icon': 'film',
      },
    },
  ],
  'blogs': [
    {
      'title': 'Events',
      'href': '/events-conferences',
    },
    {
      'title': 'Jobs Board',
      'href': 'http://jobs.economist.com/',
    },
    {
      'title': 'Which MBA',
      'href': '/whichmba',
    },
    {
      'title': 'Executive Education Navigator',
      'href': 'https://execed.economist.com/',
    },
    {
      'title': 'GMAT tutor',
      'href': 'https://gmat.economist.com/',
    },
    {
      'title': 'GRE tutor',
      'href': 'https://gre.economist.com/',
    },
    {
      'title': 'Learning.ly',
      'href': 'https://learning.ly',
      internal: false,
    },
    {
      'title': '1843',
      'href': '/help/about-us',
    },
  ],
};
const accordionContext = [
  {
    title: sharedMenu.topic.title,
    href: sharedMenu.topic.href,
    children: navigationLinks.sections,
  },
  {
    title: 'Blogs',
    href: '/blogs',
    children: navigationLinks.blogs,
  },
  {
    title: 'Print Edition',
    href: '/printedition',
  },
  ...navigationLinks.media,
  {
    title: 'Products',
    children: [
      ...moreBalloonData.sections,
      { hr: true }, // eslint-disable-line id-length
      ...moreBalloonData.blogs,
    ],
  },
  {
    title: sharedMenu.more.title,
    href: sharedMenu.more.href,
  },
  {
    title: sharedMenu.subscribe.title,
    href: sharedMenu.subscribe.href,
    target: '_blank',
    hideWhenSubscribed: true,
    unstyled: false,
    i13nModel: { // eslint-disable-line id-match
      action: 'click',
      element: 'subscribe',
    },
  },
];
const subBranding = (
  <img
    src="/assets/logo-world-if.svg"
    className="sub-branding__logo"
    height="64"
    width="192"
  />
);
export default function HeaderWithData() {
  return (
    <Navigation className="navigation navigation--registered navigation--sub-branding navigation--sticked"
      svgUri="assets/icons.svg"
      sectionsCardData={navigationLinks}
      moreBalloonData={moreBalloonData}
      accordionData={accordionContext}
      sharedMenu={sharedMenu}
      subBranding={subBranding}
    />
  );
}
