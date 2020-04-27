const Roles = require('../../security/roles');

//Check the users roles in the database and give them correct permissions in the app
module.exports = class UserRoleChecker {
    static isGuest(currentUser){
        if(!currentUser || !currentUser.roles) {
            return false;
        }

        return !currentUser.roles.some((role) => {
            return [
                Roles.values.manager,
                Roles.values.employee,
            ].includes(role);
        });
    }

    static isManager(currentUser) {
        if(!currentUser || !currentUser.roles){
            return false;
        }

        return currentUser.roles.some((role) => {
            return role === Roles.values.manager;
        });
    }

    static isEmployee(currentUser){
        if(!currentUser || !currentUser.roles){
            return false;
        }

        return (
            !this.isManager(currentUser) && !this.isGuest(currentUser)
        );
    }
}