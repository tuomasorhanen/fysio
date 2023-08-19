import React from 'react';

import { IHeadingAndTitle } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';

const HeadingAndTitle = (props: IHeadingAndTitle) => {
  const { blockContent, style } = props;

  switch (style) {
    case 'centered':
      return (
        <div key={props._key} className="py-8 md:py-16 ">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <BlockContentRenderer blockContent={blockContent && blockContent} />
          </div>
        </div>
      );
    case 'left-aligned':
      return (
        <div key={props._key} className="py-8 md:py-16 ">
          <div className="mx-auto max-w-4xl px-4">
            <BlockContentRenderer blockContent={blockContent && blockContent} />
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export default HeadingAndTitle;
