import { blurred } from '_lib/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

import { IService } from '../../_lib/types';

const ServiceReferenceSection = (props: IService) => {
  const { title, slug, duration, mainImage, price, _key, specification } = props;

  return (
    <section key={_key} className="borderstyle relative overflow-hidden rounded-lg bg-black shadow-lg">
      {mainImage && (
        <div className="relative w-full" style={{ paddingBottom: '40%' }}>
          {mainImage && (
            <Image
              src={mainImage.asset.url}
              fill={true}
              placeholder="blur"
              blurDataURL={blurred}
              quality={90}
              priority
              alt={mainImage.alt}
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
      )}
      <div className="absolute right-0 top-0 flex flex-wrap gap-2 p-2 font-extrabold">
        {Array.isArray(price) &&
          Array.isArray(duration) &&
          price.map((p, index) => (
            <div key={_key && index} className="rounded-lg bg-white p-2 opacity-70">
              {specification && <div className="text-sm font-light">{specification[index]}</div>}
              <div>{duration[index]} min</div>
              <div>{p} €</div>
            </div>
          ))}
      </div>
      <div className="bg-bg px-6 py-4">
        <Link href={`/${slug.current}`}>
          <div className="flex items-center justify-center">
            <div className="text-center text-2xl font-bold">{title}</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServiceReferenceSection;
