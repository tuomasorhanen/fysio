import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import React from 'react';
import YouTube from 'react-youtube';

const projectId = 'dg23ndly';
const dataset = 'production';

const builder = imageUrlBuilder({
  projectId: projectId,
  dataset: dataset,
});

const urlFor = source => builder.image(source);

const BlockContentRenderer = ({ blockContent }) => {
  const serializers = {
    types: {
      block: props => {
        const style = props.node.style || 'normal';

        if (props.children.length === 1 && props.children[0] === '') {
          return <br />;
        }

        switch (style) {
          case 'h1':
            return <h1 className="pb-2 text-3xl sm:text-5xl md:text-6xl">{props.children}</h1>;
          case 'h2':
            return <h2 className="pb-2 text-3xl sm:text-4xl md:text-5xl">{props.children}</h2>;
          case 'h3':
            return <h3 className="pb-2 text-2xl md:text-4xl">{props.children}</h3>;
          case 'h4':
            return <h4 className="pb-2 text-xl sm:text-2xl">{props.children}</h4>;
          case 'h5':
            return <h5 className="pb-2 text-xl">{props.children}</h5>;
          case 'h6':
            return <h6 className="pb-2 text-lg">{props.children}</h6>;
          default:
            return <p className="pb-2">{props.children}</p>;
        }
      },
      youtube: ({ node }) => {
        const { url } = node;
        const videoId = new URL(url).searchParams.get('v') || '';
        return <YouTube videoId={videoId} className="max-w-screen flex aspect-video justify-start py-4" />;
      },
      image: ({ node }) => {
        return <img className='rounded-lg shadow-md shadow-gray-500 w-2/3 h-1/2 my-8' src={urlFor(node).url()} alt={node.alt} style={{ maxWidth: '100%', height: 'auto' }} />;
      },
    },
  };

  const content = Array.isArray(blockContent) ? blockContent.flatMap(contentItem => contentItem.text || []) : [];
  return <BlockContent blocks={content} serializers={serializers} />;
};

export default BlockContentRenderer;
