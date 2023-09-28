import { IPrice, IService } from '_lib/types';
import React from 'react';

const Pricing = (props: IPrice) => {
  const { service } = props;

  return (
    <section className="mx-auto mt-8 max-w-5xl">
      {service.map((service: IService) => (
        <div key={service._key} className="flex items-center justify-between border-b border-gray-300 px-4 py-2">
          <div>
            <div>
              {service.title} | {service.duration.length > 1 ? service.duration.join(' - ') : service.duration[0]} min
            </div>
          </div>
          <div className="flex items-center">
            <span className="px-4 text-lg font-bold">
              {service.price.length > 1 ? service.price.join(' - ') : service.price[0]}€
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Pricing;
