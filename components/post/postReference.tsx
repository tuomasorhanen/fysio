import Image from 'next/image';
import Link from 'next/link';

import { IPost } from '../../_lib/types';
const PostReferenceSection = (props: IPost) => {
  const { title, slug, mainImage, _key } = props;

  return (
    <section key={_key} className="borderstyle relative h-40 overflow-hidden rounded-lg shadow-lg">
      {mainImage && (
        <Image
          src={mainImage.asset.url}
          width={645}
          height={158}
          sizes="(max-width: 640px) 100vw, 640px"
          placeholder="blur"
          blurDataURL={mainImage.asset.metadata.lqip}
          loading="lazy"
          quality={90}
          alt={mainImage.alt}
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <Link href={`/${slug.current}`}>
          <div className="text-2xl font-bold text-white">{title}</div>
        </Link>
      </div>
    </section>
  );
};

export default PostReferenceSection;
