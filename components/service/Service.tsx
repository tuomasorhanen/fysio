import { Content } from 'components/Content';
import { IService } from '../../_lib/types';
import Image from 'next/image';
import UiElement from 'components/uIElements/UiElements';
import { blurred } from '_lib/sanity-utils';
const Service = (props: IService) => {
  const { title, duration, mainImage, price, _key, specification, content } = props;
  return (
    <>
     <section
          key={props._key}
          className="relative flex aspect-square max-h-screen w-full items-center justify-center sm:h-[700px] bg-black">
            {mainImage && <Image src={mainImage.asset.url} fill={true} placeholder='blur' blurDataURL={blurred}               quality={90}
 priority alt={mainImage.alt} style={{objectFit: 'cover'}} className="opacity-50"  />}
          <div className="z-30 max-w-3xl px-4 pb-2 font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white">{title}
          </div>
        </section>
        <UiElement style='wave' _key={''} _type={'uiElement'} />
    <section className="max-w-4xl mx-auto">
    <div className="pb-4 flex justify-center gap-4 font-extrabold ">
      {Array.isArray(price) && Array.isArray(duration) && price.map((p, index) => (
          <div key={_key && index} className="p-2 rounded-lg bg-white opacity-70">
            {specification && <p className='text-sm font-light'>{specification[index]}</p>}
            <div>{duration[index]} min</div>
            <div>{p} €</div>
          </div>
        ))}
        </div>

      <div className="p-4 pb-16">
      <Content content={content}  />

      </div>
    </section>
    </>
  );
};

export default Service;
