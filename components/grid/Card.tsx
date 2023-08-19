import Link from 'next/link';
import { ICard } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';
import Image from '../../components/Image';

const Card = (props: ICard) => {
  const { blockContent, image, layout, buttons } = props;

  const CardContent = () => (
    <>
      {image && <Image source={image} width={112} aspect={1/1} alt="" className="z-50 mx-auto rounded-full object-cover shadow-lg" />}
      <figure className="z-10 -mt-16 flex-grow rounded-lg shadow-lg">
        <div className="mx-auto h-full p-4 pt-20 text-center">
          <BlockContentRenderer blockContent={blockContent && blockContent} />
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
