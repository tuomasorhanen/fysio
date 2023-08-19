import Link from 'next/link';
import { IService } from '../../_lib/types';
import Image from '../../components/Image';

const ServiceReferenceSection = (props: IService) => {
  const {title, slug, duration, mainImage, price, _key } = props;

  return (
    <section key={_key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative">
      {mainImage && <Image source={mainImage} width={590} aspect={5 / 2} className="w-full object-cover" alt="" />}
      <div className="absolute top-0 right-0 p-2 font-extrabold flex flex-col gap-2">
        {Array.isArray(price) && Array.isArray(duration) && price.map((p, index) => (
          <div key={_key && index} className="p-2 rounded-lg bg-white opacity-70">
                        <p>{duration[index]} min</p>

            <p>{p} €</p>
          </div>
        ))}
      </div>
      <div className="px-6 py-4">
        <Link href={`/${slug.current}`}>
          <div className="flex justify-center items-center">
            <h2 className="text-center text-2xl font-bold">{title}</h2>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServiceReferenceSection;
