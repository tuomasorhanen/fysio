import { Content } from 'components/Content';
import UiElement from 'components/uIElements/UiElements';
import Image from 'next/image';

import { IService } from '../../_lib/types';
const Service = (props: IService) => {
  const { title, duration, mainImage, price, _key, specification, content } = props;
  return (
    <>
      <section
        key={props._key}
        className="relative flex aspect-square max-h-screen w-full items-center justify-center bg-black sm:h-[700px]">
        {mainImage && (
          <Image
            src={mainImage.asset.url}
            fill={true}
            placeholder="blur"
            blurDataURL={mainImage.asset.metadata.lqip}
            quality={90}
            priority
            alt={mainImage.alt}
            style={{ objectFit: 'cover' }}
            className="opacity-50"
          />
        )}
        <div className="z-30 max-w-3xl px-4 pb-2 text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {title}
        </div>
      </section>
      <UiElement style="wave" _key={''} _type={'uiElement'} />
      <section className="mx-auto max-w-4xl">
        <div className="flex justify-center gap-4 pb-4 font-extrabold ">
          {Array.isArray(price) &&
            Array.isArray(duration) &&
            price.map((p, index) => (
              <div key={_key && index} className="rounded-lg bg-white p-2 opacity-70">
                {specification && <p className="text-sm font-light">{specification[index]}</p>}
                <div>{duration[index]} min</div>
                <div>{p} €</div>
              </div>
            ))}
        </div>

        <div className="p-4 pb-16">
          <Content content={content} />
        </div>
      </section>
    </>
  );
};

export default Service;
