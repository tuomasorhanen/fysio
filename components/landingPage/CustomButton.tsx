import React from 'react';

import { ICustomButton } from '../../_lib/types';
import ButtonRenderer from '../../components/ButtonRenderer';

const CustomButton = (props: ICustomButton) => {
  const { buttons } = props;

  return (
    <div key={props._key} className="flex h-full items-center justify-center pb-12">
      {buttons && buttons.map(btn => <ButtonRenderer key={btn.callToAction} {...btn} />)}
    </div>
  );
};

export default CustomButton;
