export class Contact {
  name: string = "";
  phone: string = "";
  email: string = "";
  address?: string;
  birthday?: Date;

  constructor(name: string, phone: string, email: string) {
    // this.name = name;
    // this.phone = phone;
    // this.email = email;
    Object.assign(this, { name, phone, email });
  }
}
