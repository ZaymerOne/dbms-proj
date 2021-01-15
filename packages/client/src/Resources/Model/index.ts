import { ModelList } from './ModelList';
import { ModelCreate } from './ModelCreate';
import { ModelEdit } from './ModelEdit';

import icon from '@material-ui/icons/VerifiedUser';
import { UserRole } from '../../types';
export const ModelIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const modelResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? ModelList : null,
    create: [...allowedRoles.create].includes(permissions) ? ModelCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? ModelEdit : null,

    icon,
    name: 'model',
});
