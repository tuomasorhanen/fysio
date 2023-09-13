import { PortableText } from "@portabletext/react";
import { blurred } from "_lib/sanity-utils";
import Image from 'next/image';

type ImageBlock = {
  asset: string;
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
              blurDataURL={blurred}
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
    <div className="">
      <PortableText 
        value={content} 
        components={myPortableTextComponents} 
      />
    </div>
  );
};
