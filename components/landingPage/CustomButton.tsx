import React from 'react';
import { ICustomButton } from '../../_lib/types';
import ButtonRenderer from '../../components/ButtonRenderer';

const CustomButton = (props: ICustomButton) => {
  const { buttons, layout } = props;

  let alignment;

  switch (layout) {
    case 'center':
      return (
        <nav key={props._key} className={`flex h-full items-center pb-12`}>
          {buttons && buttons.map(btn => <ButtonRenderer key={btn.callToAction} {...btn} />)}
        </nav>
      );
    case 'left':
      return (
        <nav key={props._key} className={`px-2 max-w-4xl mx-auto h-full items-center -mt-12 pb-12`}>
          {buttons && buttons.map(btn => <ButtonRenderer key={btn.callToAction} {...btn} />)}
        </nav>
      );
    default:
      <></>  }


};

export default CustomButton;
