import { IResourceComponentsProps } from "@refinedev/core";
import { AntdCreateInferencer } from "../../../../../packages/inferencer/src/inferencers/antd";

export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
    return <AntdCreateInferencer />;
};

// import React from "react";
// import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
// import { Create, useForm } from "@refinedev/antd";
// import { Form, Input, DatePicker } from "antd";
// import dayjs from "dayjs";
//
// export const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
//     const translate = useTranslate();
//     const { formProps, saveButtonProps, queryResult } = useForm();
//
//     return (
//       <Create saveButtonProps={saveButtonProps}>
//           <Form {...formProps} layout="vertical">
//               <Form.Item
//                 label={translate("roles.fields.createdAt")}
//                 name={["createdAt"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//                 getValueProps={(value) => ({
//                     value: value ? dayjs(value) : undefined,
//                 })}
//               >
//                   <DatePicker />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.updatedAt")}
//                 name={["updatedAt"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//                 getValueProps={(value) => ({
//                     value: value ? dayjs(value) : undefined,
//                 })}
//               >
//                   <DatePicker />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.deletedAt")}
//                 name={["deletedAt"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//                 getValueProps={(value) => ({
//                     value: value ? dayjs(value) : undefined,
//                 })}
//               >
//                   <DatePicker />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.version")}
//                 name={["version"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//               >
//                   <Input />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.name")}
//                 name={["name"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//               >
//                   <Input />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.description")}
//                 name={["description"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//               >
//                   <Input />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.roleType")}
//                 name={["roleType"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//               >
//                   <Input />
//               </Form.Item>
//               <Form.Item
//                 label={translate("roles.fields.tenantId")}
//                 name={["tenantId"]}
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//               >
//                   <Input />
//               </Form.Item>
//           </Form>
//       </Create>
//     );
// };
