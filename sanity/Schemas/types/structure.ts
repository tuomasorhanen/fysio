import { builderStructure } from '../Page Builder/structure';
import { postStructure } from '../Post/structure';
import { serviceStructure } from '../Service/structure';
import { settingsStructure } from '../Site Settings/structure';

export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([settingsStructure(S), builderStructure(S), serviceStructure(S), postStructure(S)]);
