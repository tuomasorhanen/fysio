import Link from 'next/link';
import { IPost } from '../../_lib/types';
import Image from 'next/image';
const PostReferenceSection = (props: IPost) => {
  const { title, slug, mainImage, _key } = props;

  return (
    <section key={_key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative h-40">
      {mainImage && <Image src={mainImage.asset.url} fill={true} quality={90} placeholder='blur' loading='lazy' blurDataURL={mainImage.asset.url} className="w-full object-cover" alt={mainImage.alt} />}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <Link href={`/${slug.current}`}>
          <div className="text-2xl font-bold text-white">
            {title}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PostReferenceSection;
