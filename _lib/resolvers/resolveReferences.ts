import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { IPage } from '_lib/types';

const resolveReferences = async (page: IPage) => {
  const { content } = page;

  if (!content) {
    return page;
  }

  const resolvedContent = await Promise.all(
    content.map(async (item: any) => {
      const { _type } = item;

      switch (_type) {
        case 'pricing':
          if (item.service && Array.isArray(item.service)) {
            item.service = await Promise.all(
              item.service.map(async (service: any) => {
                if (service._ref) {
                  const serviceQry = groq`*[_id == '${service._ref}']{
                    _id,
                    title,
                    description,
                    price,
                    duration,
                    mainImage,
                    slug,
                    ...
                  }[0]`;
                  const serviceData = await client.fetch(serviceQry);
                  return { ...serviceData };
                }
                return service;
              })
            );
          }
          break;
        case 'grid':
          item.items = await Promise.all(
            item.items.map(async (gridItem: any) => {
              const { _ref, _type } = gridItem;
              if (_type === 'service' && _ref) {
                const serviceQry = groq`*[_id == '${_ref}']{
          _id,
          title,
          description,
          price,
          duration,
          mainImage,
          slug,
          _type,
          ...
        }[0]`;
                const serviceData = await client.fetch(serviceQry);

                return serviceData;
              }
              else if (_type === 'post' && _ref) {
                const postQry = groq`*[_id == '${_ref}']{
          _id,
          title,
                  
          description,
          mainImage,
          slug,
          _type,
          ...
        }[0]`;
                const postData = await client.fetch(postQry);

                return postData;
              }
              else {
                return gridItem;
              }
            })
          );
          break;
          case 'post' :
            if (item._ref && item._type === 'post') {
              const postQry = groq`*[_id == '${item._ref}']{
                _id,
                title,
                description,
                mainImage,
                slug,
                _type,
                ...
              }[0]`;
              const postData = await client.fetch(postQry);
              return postData;
            }

            case 'service' :
              if (item._ref && item._type === 'service') {
                const serviceQry = groq`*[_id == '${item._ref}']{
                  _id,
                  title,
                  description,
                  price,
                  duration,
                  mainImage,
                  slug,
                  _type,
                  ...
                }[0]`;
                const serviceData = await client.fetch(serviceQry);
                return serviceData;
              }

        default:
          break;
      }

      return item;
    })
  );

  page.content = resolvedContent;
  return page;
};

export default resolveReferences;
