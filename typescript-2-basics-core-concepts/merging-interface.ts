interface Admins {
  permissions: string[];
}

interface AppUsers {
  userName: string;
}

interface AppAdmins extends Admins, AppUsers {}

let adminUser: AppAdmins;

adminUser = {
  permissions: ["login"],
  userName: "vishal",
};
