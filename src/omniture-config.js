/* eslint-env browser */
/* eslint-disable id-match */
import slugger from 'slugger';
import OmnitureUtils from '@economist/react-i13n-omniture/lib/OmnitureUtils';
function slug(stringToConvert) {
  return slugger(String(stringToConvert || ''), { replacement: '_' });
}

const OmnitureConfig = {
  account: process.env.NODE_ENV === 'production' ? 'economistcomprod' : 'economistcomdev',
  initialProps: {
    visitorNamespace: 'economist',
    trackingServer: 'stats.economist.com',
    trackingServerSecure: 'sstats.economist.com',
    dc: '122', // eslint-disable-line id-length
    linkTrackVars: [
      'pageName',
      'channel',
      'events',
      'prop1',
      'prop3',
      'prop4',
      'prop5',
      'prop11',
      'prop13',
      'prop14',
      'prop31',
      'prop34',
      'prop40',
      'prop41',
      'prop42',
      'prop46',
      'contextData.subsection',
    ].join(''),
    server: (typeof document === 'undefined') ? '' : document.location.hostname,
    // web or print, They depend by the source of the articles.
    prop3: 'print',
    eVar3: 'print',
  },
  /* eslint-disable arrow-body-style */
  externalScript: '/assets/omniture_h254.min.js',
  eventHandlers: {
    click: (nodeProps) => ({
      linkType: nodeProps.product,
      linkName: nodeProps.element,
    }),
    pageview: (nodeProps) => {
      let articleSource = {};
      if (nodeProps.articleSource) {
        articleSource = {
          prop3: nodeProps.articleSource,
          eVar3: nodeProps.articleSource,
        };
      }
      nodeProps = {
        product: '',
        topic: '',
        title: '',
        template: '',
        ...nodeProps,
      };
      let pageName = '';
      if (nodeProps.template === 'channel') {
        pageName = `${ slug(nodeProps.product) }|home`;
      } else {
        pageName = [
          slug(nodeProps.product),
          slug(nodeProps.template),
          slug((nodeProps.topic === '') ? nodeProps.product : nodeProps.topic),
          slug(nodeProps.title) ].join('|');
      }

      return {
        channel: slug(nodeProps.product),
        pageName,
        pageURL: location.href,
        contextData: {
          subsection: (nodeProps.topic) ? slug(nodeProps.topic) : '',
        },
        prop1: slug(nodeProps.product),
        prop4: slug(nodeProps.template),
        prop5: nodeProps.title,
        prop6: OmnitureUtils.graphShot(),
        prop8: OmnitureUtils.hourOfTheDay(),
        prop10: OmnitureUtils.fullDate(),
        prop11: '',
        prop13: OmnitureUtils.userType(),
        prop31: OmnitureUtils.articlePublishDate(nodeProps.publishDate),
        prop32: location.href,
        prop34: OmnitureUtils.deviceDetection(),
        prop40: '',
        prop46: OmnitureUtils.mulIP(),
        prop53: OmnitureUtils.subscriptionRemaningMonths(),
        prop54: OmnitureUtils.subscriptionInfo(),
        eVar1: slug(nodeProps.product),
        eVar4: slug(nodeProps.template),
        eVar5: nodeProps.title,
        eVar6: OmnitureUtils.graphShot(),
        eVar34: OmnitureUtils.deviceDetection(),
        eVar8: OmnitureUtils.hourOfTheDay(),
        eVar10: OmnitureUtils.fullDate(),
        eVar11: '',
        eVar13: OmnitureUtils.userType(),
        eVar31: OmnitureUtils.articlePublishDate(nodeProps.publishDate),
        eVar32: location.href,
        eVar40: '',
        events: 'event2',
        ...articleSource,
      };
    },
  },
};
export default OmnitureConfig;
