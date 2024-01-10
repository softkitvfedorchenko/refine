import { getFieldableKeys } from "../../utilities";
import { FieldInferencer } from '../types';

const idPropertyRegexp = /id$/i;

export const objectInfer: FieldInferencer = (
    key,
    props,
    // record,
    infer,
    // schema,
    // type,
) => {
    return false;
};
