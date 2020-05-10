import Roles from 'security/roles';
const roles = Roles.values;

class Permissions {
  static get values() {
    return {
      iamEdit: {
        //Editing Permssions
        id: 'iamEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
        allowedStorageFolders: ['user'],
      },
      //Creating Permissions
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
      },
      //Import Permissions
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.manager,
          roles.employee,
        ],
      },
      //Read Permissions
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
      //See Audit Log
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.manager,],
      },
      //See settings page
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
      //Create Guests Permissions
      guestsCreate: {
        id: 'guestsCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['guests'],
      },
      //Edit Guests Permissions
      guestsEdit: {
        id: 'guestsEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['guests'],
      },
      //Delete Guests permissions
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
      //Import Bookings Permissions
      bookingImport: {
        id: 'bookingImport',
        allowedRoles: [
          roles.manager,
        ],
      },
      //Create Booking Permissions
      bookingCreate: {
        id: 'bookingCreate',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['booking'],
      },
      //Edit Booking Permissions
      bookingEdit: {
        id: 'bookingEdit',
        allowedRoles: [
          roles.manager,
          roles.employee,
          roles.guest
        ],
        allowedStorageFolders: ['booking'],
      },
      //Delete Booking Permissions
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
