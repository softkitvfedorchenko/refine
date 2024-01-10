import has from 'lodash/has';
import { FieldInferencer } from '../types';

export const relationRegexp = /(-id|-ids|_id|_ids|Id|Ids|ID|IDs)(\[\])?$/;

export const relationInfer: FieldInferencer = (key, props) => {
    const isRelation = has(props, '$ref');

    if (isRelation) {
        return {
            key,
            relation: true,
            multiple: false,
            type: 'relation',
            priority: 1,
        };
    }

    return false;
};
