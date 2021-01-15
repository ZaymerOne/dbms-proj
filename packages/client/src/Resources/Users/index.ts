import { UsersList } from './UsersList';
import { UsersCreate } from './UsersCreate';
import { UsersEdit } from './UsersEdit';

import icon from '@material-ui/icons/VerifiedUser';
import { UserRole } from '../../types';
export const UsersIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const usersResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? UsersList : null,
    create: [...allowedRoles.create].includes(permissions) ? UsersCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? UsersEdit : null,

    icon,
    name: 'users',
});
