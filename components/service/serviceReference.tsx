import Link from 'next/link';
import { IService } from '../../_lib/types';
import Image from 'next/image';
import { blurred } from '_lib/sanity-utils';

const ServiceReferenceSection = (props: IService) => {
  const {title, slug, duration, mainImage, price, _key, specification } = props;

  return (
    <section key={_key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative bg-black">
      {mainImage && 
        <div className="relative w-full" style={{ paddingBottom: '40%' }}>
      {mainImage && <Image src={mainImage.asset.url} fill={true} placeholder='blur' blurDataURL={blurred} priority alt={mainImage.alt} style={{objectFit: 'cover'}} />}

        </div>}
      <div className="absolute top-0 right-0 p-2 font-extrabold flex flex-wrap gap-2">
        {Array.isArray(price) && Array.isArray(duration) && price.map((p, index) => (
          <div key={_key && index} className="p-2 rounded-lg bg-white opacity-70">
            {specification && <div className='text-sm font-light'>{specification[index]}</div>}
            <div>{duration[index]} min</div>
            <div>{p} €</div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4 bg-bg">
        <Link href={`/${slug.current}`}>
          <div className="flex justify-center items-center">
            <div className="text-center text-2xl font-bold">{title}</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServiceReferenceSection;
