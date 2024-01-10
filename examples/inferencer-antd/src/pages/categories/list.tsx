// import { IResourceComponentsProps } from "@refinedev/core";
// // import { AntdListInferencer } from "@refinedev/inferencer/antd";
// import { AntdListInferencer } from "../../../../../packages/inferencer/src/inferencers/antd";
//
//
// const omitFields = ['id', 'createdAt', 'updatedAt', 'deletedAt', 'version', 'tenantId'];
//
// export const CategoryList: React.FC<IResourceComponentsProps> = (props) => {
//
//     return (
//         <AntdListInferencer
//             // fieldTransformer={(field) => {
//             //     if (omitFields.includes(field.key)) {
//             //         return null;
//             //     }
//             //
//             //     return field;
//             // }}
//         />
//     );
// };
import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useTranslate,
} from "@refinedev/core";
import {
    useTable,
    List,
    EditButton,
    ShowButton,
    DeleteButton,
    DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const CategoryList: React.FC<IResourceComponentsProps> = () => {
    const translate = useTranslate();
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column
                    dataIndex="id"
                    title={translate("roles.fields.id")}
                />
                <Table.Column
                    dataIndex={["createdAt"]}
                    title={translate("roles.fields.createdAt")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["updatedAt"]}
                    title={translate("roles.fields.updatedAt")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex={["deletedAt"]}
                    title={translate("roles.fields.deletedAt")}
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    dataIndex="version"
                    title={translate("roles.fields.version")}
                />
                <Table.Column
                    dataIndex="name"
                    title={translate("roles.fields.name")}
                />
                <Table.Column
                    dataIndex="description"
                    title={translate("roles.fields.description")}
                />
                <Table.Column
                    dataIndex="roleType"
                    title={translate("roles.fields.roleType")}
                />
                <Table.Column
                    dataIndex="tenantId"
                    title={translate("roles.fields.tenantId")}
                />
                <Table.Column
                    title={translate("table.actions")}
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
