import React from 'react';

import { IHeadingAndTitle } from '../../_lib/types';
import { Content } from 'components/Content';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { style, content } = props;

  switch (style) {
    case 'centered':
      return (
        <div key={props._key} className="py-8 md:py-16 ">
          <div className="mx-auto max-w-4xl px-4 text-center">
          <Content content={content} />
          </div>
        </div>
      );
    case 'left-aligned':
      return (
        <div key={props._key} className="py-8 md:py-16 ">
          <div className="mx-auto max-w-4xl px-4">
          <Content content={content} />
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default HeadingAndTitle;
