import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'react-admin';

export const StatusList = (props) => {
    return (
        <List exporter={false} perPage={25} {...props}>
            <Datagrid optimized rowClick="edit">
                <TextField source="id" />
                <TextField source="status_done" />
                <EditButton />
            </Datagrid>
        </List>
    );
};
