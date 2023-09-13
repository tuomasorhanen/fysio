import Link from 'next/link';
import { IPost } from '../../_lib/types';
import Image from 'next/image';
import { blurred } from '_lib/sanity-utils';
const PostReferenceSection = (props: IPost) => {
  const { title, slug, mainImage, _key } = props;

  return (
    <section key={_key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative h-40">
      {mainImage && <Image src={mainImage.asset.url} fill={true} placeholder='blur' blurDataURL={blurred} priority alt={mainImage.alt} style={{objectFit: 'cover'}} />}
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
