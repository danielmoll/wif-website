import React from 'react';
import AdvertisementPanel from '@economist/component-ad-panel';
import ArticleTemplateBody from '@economist/component-articletemplate/lib/body';
import ImageCaption from '@economist/component-imagecaption';
import Video from '@economist/component-video';

export default function ArticleBody(rest) {
  const props = {
    components: {
      AdvertisementPanel,
      ImageCaption,
      Video,
    },
    ...rest,
  };
  return (
    <ArticleTemplateBody {...props} />
  );
}
