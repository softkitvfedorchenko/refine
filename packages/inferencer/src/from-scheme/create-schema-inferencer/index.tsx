import { getSchemaByType } from '../find';
import React, { useContext } from "react";
import { useResource, TranslationContext } from "@refinedev/core";

import {
    CreateSchemaInferencer,
    InferencerComponentProps,
    SchemaInferencerResultComponent,
    InferField,
    InferType,
} from '../types';

import { composeInferencers } from "../compose-schema-inferencers";
import { composeTransformers } from "../compose-transformers";

import { defaultElements } from "../field-from-schema-inferencers";
import { defaultTransformers } from "../field-transformers";
import { LiveComponent } from "../../components";
import { useInferFetch } from "../../use-infer-fetch";
import { useRelationFetch } from "../../use-relation-fetch";

import scheme from "../scheme";

import { prepareLiveCode, componentName, removeHiddenCode } from "../../utilities";

/**
 * CreateInferencer is a function that creates a Inferencer component.
 *
 * Inferencer will handle the data fetching and the infering parts,
 * then it will invoke the `renderer` function to generate the code.
 * The generated code will be used to render the component by `react-live`.
 * Its required to havee`additionalScope` prop when using packages other than `react` and `@refinedev/core`.
 *
 * @param config - Inferencer configuration.
 * @param config.type - Infering type.
 * @param config.additionalScope - Additional scope for live code.
 * @param config.renderer - String renderer for Inferencer.
 * @param config.fieldTransformers - Field transformers.
 * @param config.customElements - Field inferencers.
 * @param config.codeViewerComponent - Code viewer component.
 * @param config.errorComponent - Error component.
 * @param config.loadingComponent - Loading component.
 */
export const createSchemaInferencer: CreateSchemaInferencer = ({
    type,
    additionalScope = [],
    customElements = [],
    fieldTransformers = [],
    renderer,
    loadingComponent: LoadingComponent,
    errorComponent: ErrorComponent,
    codeViewerComponent: CodeViewerComponent,
}) => {
    const infer = composeInferencers([...defaultElements, ...customElements]);
    const transform = composeTransformers([
        ...defaultTransformers,
        ...fieldTransformers,
    ]);

    const Inferencer = ({
        resourceName,
        fieldTransformer,
        meta,
        id,
    }: {
        resourceName?: string;
        fieldTransformer?: InferencerComponentProps["fieldTransformer"];
        meta?: InferencerComponentProps["meta"];
        id?: string | number;
    }) => {
        console.log('resourceName: ', resourceName);
        const { resource, resources } = useResource(resourceName);
        console.log('resource: ', resource);
        const { resource: resourceFromURL } = useResource();
        console.log('resourceFromURL: ', resourceFromURL);
        const { i18nProvider } = useContext(TranslationContext);

        const inferSingleField = (
            key: string,
            props: any,
        ) => {
            const inferResult = infer(key, props, infer, type);

            if (inferResult) {
                if (resource) {
                    const transformed = transform(
                        [inferResult] as InferField[],
                        resources,
                        resource,
                        {},
                        infer,
                        type,
                    );

                    const customTransformedFields = fieldTransformer
                        ? transformed.flatMap((field) => {
                              const result = fieldTransformer(field);

                              return result ? [result] : [];
                          })
                        : transformed;

                    return customTransformedFields?.[0];
                }
            }

            return undefined;
        };

        const inferSchema = (schemaObject: any): InferField[] => {
            return Object.entries(schemaObject.properties)
                .reduce((acc, [key, props]) => {
                    const inferResult = inferSingleField(key, props);
                    if (inferResult) {
                        acc.push(inferResult);
                    }

                    return acc;
                }, [] as InferField[]);
        };

        const clearedFields = inferSchema(scheme);
        // const clearedFields = [];

        const code = React.useMemo(() => {
            if (resource) {
                return renderer({
                    resource,
                    resources,
                    fields: clearedFields,
                    infer,
                    meta,
                    isCustomPage: resource.name !== resourceFromURL?.name,
                    id,
                    i18n: !!i18nProvider,
                });
            }
            return "";
        }, [
            resource,
            resources,
            clearedFields,
        ]);

        return (
            <CodeViewerComponent
                code={removeHiddenCode(code)}
            />
        );
    };

    const InferencerComponent: SchemaInferencerResultComponent = ({
        name,
        resource,
        fieldTransformer,
        meta,
        id,
    }) => {
        const { resource: resourceItem } = useResource(resource ?? name);
        console.log('resourceItem: ', resourceItem);

        getSchemaByType(resourceItem!.name, type);

        const key = `${
            resourceItem?.identifier ?? resourceItem?.name
        }-${type}-${id}`;

        return (
            <Inferencer
                fieldTransformer={fieldTransformer}
                resourceName={resource ?? name}
                meta={meta ?? {}}
                key={key}
                id={id}
            />
        );
    };

    return InferencerComponent;
};
