import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type ImageBlock = {
  asset: any;
  alt: string;
};

type ContentProps = {
  content: any;
};

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: ImageBlock }) => {
      return (
        <div className="pb-4">
          <Image
            src={value.asset}
            width={500}
            height={248.43}
            placeholder="blur"
            blurDataURL={value.asset.metadata.lqip}
            quality={90}
            priority
            alt={value.alt}
            style={{ objectFit: 'cover' }}
          />
        </div>
      );
    },
  },
};

export const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className="my-content">
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  );
};
