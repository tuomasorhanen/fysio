import Link from 'next/link';
import { IPost } from '../../_lib/types';
import Image from '../../components/Image';

const PostReferenceSection = (props: IPost) => {
  const {title, slug,  mainImage, _key, } = props;

  return (
    <section key={_key} className="borderstyle rounded-lg shadow-lg overflow-hidden relative">
      <Image {...mainImage} alt="" className="h-48 w-full object-cover" />
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

export default PostReferenceSection;
