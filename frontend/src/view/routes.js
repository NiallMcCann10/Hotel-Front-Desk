import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'user-add',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'file-search',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: 'setting',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },

  {
    path: '/guests',
    loader: () => import('view/guests/list/GuestsListPage'),
    permissionRequired: permissions.guestsRead,
    exact: true,
    icon: 'user',
    label: i18n('entities.guests.menu'),
    menu: true,
  },
  {
    path: '/guests/new',
    loader: () => import('view/guests/form/GuestsFormPage'),
    menu: false,
    permissionRequired: permissions.guestsCreate,
    exact: true,
  },
  {
    path: '/guests/importer',
    loader: () =>
      import('view/guests/importer/GuestsImporterPage'),
    menu: false,
    permissionRequired: permissions.guestsImport,
    exact: true,
  },
  {
    path: '/guests/:id/edit',
    loader: () => import('view/guests/form/GuestsFormPage'),
    menu: false,
    permissionRequired: permissions.guestsEdit,
    exact: true,
  },
  {
    path: '/guests/:id',
    loader: () => import('view/guests/view/GuestsViewPage'),
    menu: false,
    permissionRequired: permissions.guestsRead,
    exact: true,
  },

  {
    path: '/booking',
    loader: () => import('view/booking/list/BookingListPage'),
    permissionRequired: permissions.bookingRead,
    exact: true,
    icon: 'book',
    label: i18n('entities.booking.menu'),
    menu: true,
  },
  {
    path: '/booking/new',
    loader: () => import('view/booking/form/BookingFormPage'),
    menu: false,
    permissionRequired: permissions.bookingCreate,
    exact: true,
  },
  {
    path: '/booking/importer',
    loader: () =>
      import('view/booking/importer/BookingImporterPage'),
    menu: false,
    permissionRequired: permissions.bookingImport,
    exact: true,
  },
  {
    path: '/booking/:id/edit',
    loader: () => import('view/booking/form/BookingFormPage'),
    menu: false,
    permissionRequired: permissions.bookingEdit,
    exact: true,
  },
  {
    path: '/booking/:id',
    loader: () => import('view/booking/view/BookingViewPage'),
    menu: false,
    permissionRequired: permissions.bookingRead,
    exact: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
