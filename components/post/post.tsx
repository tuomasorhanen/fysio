import { IPost,} from '../../_lib/types';
import Image from 'next/image';
import { Content } from 'components/Content';
import UiElement from 'components/uIElements/UiElements';

const Post = (props: IPost) => {
  const { title, mainImage, content} = props;

  console.log(props)

  return (
    <>
     <div
          key={props._key}
          className="relative flex aspect-square max-h-screen w-full items-center justify-center sm:h-[700px] bg-black">
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {mainImage && <Image src={mainImage.asset.url} fill={true} quality={90} loading='lazy' placeholder='blur' blurDataURL={mainImage.asset.url} className="h-full w-full object-cover opacity-50" alt={mainImage.alt} />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div className="z-30 max-w-3xl px-4 pb-2 font-bold text-3xl sm:text-4xl md:text-5xl text-center text-white">{title}
          </div>
        </div>
        <UiElement style='wave' _key={''} _type={'uiElement'} />
    <div className="max-w-4xl mx-auto">

      <div className="p-4 pb-16">
      <Content content={content} />
      </div>
    </div>
    </>
  );
};

export default Post;
