import { IPost,} from '../../_lib/types';
import Image from 'next/image';
import { Content } from 'components/Content';
import UiElement from 'components/uIElements/UiElements';
import { blurred } from '_lib/sanity-utils';

const Post = (props: IPost) => {
  const { title, mainImage, content} = props;

  console.log(props)

  return (
    <>
     <div
          key={props._key}
          className="relative flex aspect-square max-h-screen w-full items-center justify-center sm:h-[700px] bg-black">
            {mainImage && <Image src={mainImage.asset.url} fill={true} placeholder='blur' blurDataURL={blurred} priority alt={mainImage.alt} style={{objectFit: 'cover'}} className="opacity-50"  />}
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
