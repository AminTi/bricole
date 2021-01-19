const CreateUser =
  "https://us-central1-firebae-functions-exjobb.cloudfunctions.net/create";
export default class {
  async registerUsers(
    firstname,
    lastname,
    company,
    email,
    adress,
    mobile,
    postcode,
    password
  ) {
    const payload = {
      firstname,
      lastname,
      company,
      email,
      adress,
      mobile,
      postcode,
      password,
    };
    return fetch(CreateUser, {
      mode: "no-cors",
      method: "POST",
      headers: this.getHeader(),
      body: JSON.stringify(payload),
    });
  }

  getHeader() {
    return {
      "Content-Type": "application/json",
    };
  }
}
