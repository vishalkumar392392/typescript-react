interface Credentials {
  email: string;
  password: string;
}

let creds: Credentials = {
  email: "vishal@test.com",
  password: "rtyujhgfg",
};
class Authentication implements Credentials {
  email: string;
  password: string;
  name: string;
}

function login(creds: Credentials) {}

// login(creds);
login(new Authentication());
