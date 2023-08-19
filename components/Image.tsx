import { useState } from 'react';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import DynamicImage, { defaultAspect } from './DynamicImage';

type ImageProps = {
  source: SanityImageSource;
  width: number;
  alt: string;
  className?: string;
  aspect?: number;
  dark?: boolean;
  opacity?: number;
};

const Image = ({ source, width, alt, className = '', aspect = defaultAspect, dark = false, opacity = 1 }: ImageProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false);
  const lowResSrc = new DynamicImage(source, width, aspect).GetUrl(true); // Low-res
  const [src, setSrc] = useState(lowResSrc);
  const highResSrc = new DynamicImage(source, width, aspect).GetUrl(); // High-res
  const height: number = parseInt((width / aspect).toFixed(0));

  const handleLoad = () => {
    setLoaded(true);
    setSrc(highResSrc); // Switch to high-res once loaded
  };

  if (!src) {
    return <></>;
  }

  return (
    <>
      {<img className={className} src={src} width={width} height={height} alt={alt} onLoad={handleLoad} style={!loaded ? { opacity } : { opacity }} loading="lazy" />}
    </>
  );
};

export default Image;
