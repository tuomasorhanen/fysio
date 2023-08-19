import { IHero } from '../../_lib/types';
import BlockContentRenderer from '../../components/BlockContentRenderer';
import ButtonRenderer from '../../components/ButtonRenderer';
import Image from '../../components/Image';

const HeroSection = (props: IHero) => {
  const { blockContent, image, buttons, layout, opacity, heroBgColor, heroTextColor } = props;

  const textColorStyle = heroTextColor ? { color: heroTextColor.hex } : {};
  const bgColorStyle = heroBgColor ? { backgroundColor: heroBgColor.hex } : {};
  const imageOpacity = opacity ? opacity / 100 : 1;

  switch (layout) {
    case 'image-bg-center':
      return (
        <div
          key={`${props._key}-image-bg-center`}
          className="relative flex aspect-square max-h-screen w-full items-center justify-center sm:h-[700px]"
          style={bgColorStyle}>
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {image && <Image source={image} width={1425} aspect={16/9} className="h-full w-full object-cover" alt="" opacity={imageOpacity}  />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div className="z-30 max-w-3xl px-4 text-center" style={textColorStyle}>
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-6 flex h-full flex-wrap items-center justify-center">
              {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
            </div>
          </div>
        </div>
      );
    case 'slim-simple':
      return (
        <div
          key={`${props._key}-image-bg-center`}
          className="relative flex w-full items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] bg-accent"
          style={bgColorStyle}>
          <div className="absolute left-0 top-0 z-10 h-full w-full">
            {image && <Image source={image} width={0} className="h-full w-full object-cover" alt="" opacity={imageOpacity}  />}
          </div>
          <div className="absolute left-0 top-0 z-20 h-full w-full "></div>
          <div className="z-30 max-w-3xl px-4 text-center sm:-mt-20" style={textColorStyle}>
            <BlockContentRenderer blockContent={blockContent && blockContent} />
            <div className="mb-2 mt-4 flex h-full flex-wrap items-center justify-center">
              {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
            </div>
          </div>
        </div>
      );
    case 'simple-image-right':
      return (
        <section className="relative md:py-16" style={bgColorStyle}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 lg:py-16">
            <div
              className="flex flex-col items-center justify-center text-center md:items-start md:text-left"
              style={textColorStyle}>
              <BlockContentRenderer blockContent={blockContent && blockContent} />
              <div className="mt-6 flex flex-shrink items-center justify-center space-x-4 md:-ml-2 md:justify-start">
                {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              {image && <Image source={image} width={450} className="h-2/3 rounded-lg shadow-gray-500 shadow-md object-cover" alt=""  />}
            </div>
          </div>
        </section>
      );
    case 'circle-left':
      return (
        <section className="relative md:pb-8" style={bgColorStyle}>
          <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 gap-8 md:grid-cols-3 lg:py-16">
          <div className="hidden md:block aspect-square">
              {image && <Image source={image} width={384} aspect={1/1} className="border-2 border-black shadow-lg rounded-full object-cover" alt="alt" opacity={imageOpacity}  />}
            </div>
            <div
              className="flex col-span-2 flex-col items-center justify-center text-center md:items-start md:text-left"
              style={textColorStyle}>
              <BlockContentRenderer blockContent={blockContent && blockContent} />
              <div className="mt-6 flex flex-shrink items-center justify-center space-x-4 md:-ml-2 md:justify-start">
                {buttons && buttons.map(btn => <ButtonRenderer key={`${layout}-${btn.callToAction}`} {...btn} />)}
              </div>
            </div>

          </div>
        </section>
      );

    default:
      return <></>;
  }
};

export default HeroSection;
