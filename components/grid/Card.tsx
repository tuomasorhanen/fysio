import Link from 'next/link';
import { ICard } from '../../_lib/types';
import Image from 'next/image';
import { Content } from 'components/Content';

const Card = (props: ICard) => {
  const { image, layout, buttons, content } = props;

  const CardContent = () => (
    <>
      {image && <Image src={image.asset.url} width={112} height={112} quality={90} placeholder='blur' loading='lazy' blurDataURL={image.asset.url} alt="" className="z-50 mx-auto rounded-full object-cover shadow-lg" />}
      <figure className="z-10 -mt-16 flex-grow rounded-lg shadow-lg">
        <div className="mx-auto h-full p-4 pt-20 text-center">
        <Content content={content} />
        </div>
      </figure>
    </>
  );

  switch (layout) {
    case 'image-top-rounded-full':
      return buttons && buttons.length > 0 ? (
        <Link key={props._key} href={buttons[0].navigateToPage || '/etusivu'} 
          className="flex flex-col py-4 md:py-0 hover:scale-105" style={{ minHeight: '100%' }}>
          <CardContent />
        </Link>
      ) : (
        <div className="flex flex-col py-4 md:py-0" style={{ minHeight: '100%' }}>
          <CardContent />
        </div>
      );

    default:
      return <></>;
  }
};

export default Card;
