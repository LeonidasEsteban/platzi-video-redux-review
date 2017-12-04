import api from '../api.json';

import { normalize, schema } from 'normalizr';

export const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

export const category = new schema.Entity('categories', {
  playlist: new schema.Array(media),
});

// Entity(key, definition = {}, options = {})

export const categories = { categories: new schema.Array(category) }

// const normalizedData = normalize(data, schema);
const normalizedData = normalize(api, categories);
// console.log(normalizedData);
export default normalizedData;
