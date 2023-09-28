import React from 'react';

import { ICustomButton } from '../../_lib/types';
import ButtonRenderer from '../../components/ButtonRenderer';

const CustomButton = (props: ICustomButton) => {
  const { buttons, layout } = props;

  switch (layout) {
    case 'center':
      return (
        <nav key={props._key} className={`flex h-full items-center pb-12`}>
          {buttons && buttons.map(btn => <ButtonRenderer key={btn.callToAction} {...btn} />)}
        </nav>
      );
    case 'left':
      return (
        <nav key={props._key} className={`mx-auto -mt-12 h-full max-w-4xl items-center px-2 pb-12`}>
          {buttons && buttons.map(btn => <ButtonRenderer key={btn.callToAction} {...btn} />)}
        </nav>
      );
    default:
      <></>;
  }
};

export default CustomButton;
