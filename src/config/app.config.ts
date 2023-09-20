interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read tool information',
    'Create rental requests',
    'Read rental request status',
    'Read company information',
  ],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage tools', 'Manage rental requests'],
  getQuoteUrl: 'https://app.roq.ai/proposal/9426c4c4-fc98-4f24-882c-b79ae9c6c301',
};
