import Link from 'next/link';
import { IPost } from '../../_lib/types';
import Image from '../../components/Image';

const PostReferenceSection = (props: IPost) => {
  const { title, slug, mainImage, _key } = props;

  return (
    <section key={_key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative">
      {mainImage && <Image source={mainImage} width={590} aspect={4 / 1} className="w-full object-cover" alt="" />}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <Link href={`/${slug.current}`}>
          <div className="text-center text-2xl font-bold text-white">
            {title}
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PostReferenceSection;
