import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.manager,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.manager,],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.manager],
      },
      guestsImport: {
        id: 'guestsImport',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
      },
      guestsCreate: {
        id: 'guestsCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['guests'],
      },
      guestsEdit: {
        id: 'guestsEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['guests'],
      },
      guestsDestroy: {
        id: 'guestsDestroy',
        allowedRoles: [
          roles.manager,
        ],
        allowedStorageFolders: ['guests'],
      },
      guestsRead: {
        id: 'guestsRead',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
      },
      guestsAutocomplete: {
        id: 'guestsAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
      },

      bookingImport: {
        id: 'bookingImport',
        allowedRoles: [
          roles.manager,
        ],
      },
      bookingCreate: {
        id: 'bookingCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingEdit: {
        id: 'bookingEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingDestroy: {
        id: 'bookingDestroy',
        allowedRoles: [
          roles.manager,
        ],
        allowedStorageFolders: ['booking'],
      },
      bookingRead: {
        id: 'bookingRead',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
      },
      bookingAutocomplete: {
        id: 'bookingAutocomplete',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
