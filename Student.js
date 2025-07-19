

export class Student {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }

  login() {
    if (this.name && this.password) {
      return `Welcome, ${this.name}!`;
    } else {
      return "Please enter both name and password.";
    }
  }
}
