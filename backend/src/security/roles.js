/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      owner: 'owner',
      editor: 'editor',
      viewer: 'viewer',
      auditLogViewer: 'auditLogViewer',
      iamSecurityReviewer: 'iamSecurityReviewer',
      entityEditor: 'entityEditor',
      entityViewer: 'entityViewer',
      guestsEditor: 'guestsEditor',
      guestsViewer: 'guestsViewer',
      bookingEditor: 'bookingEditor',
      bookingViewer: 'bookingViewer',
    };
  }
}

module.exports = Roles;
