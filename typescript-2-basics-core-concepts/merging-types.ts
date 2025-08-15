type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AdminUser = Admin & AppUser;

let adminstrator: AdminUser;

adminstrator = {
  permissions: ["login"],
  userName: "vishal",
};
