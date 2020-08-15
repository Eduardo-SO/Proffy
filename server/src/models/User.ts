class User {
  name: string;

  email: string;

  password: string;

  avatar: string;

  whatsapp: string;

  bio: string;

  constructor(
    name: string,
    email: string,
    hashedPassword: string,
    avatar: string,
    whatsapp: string,
    bio: string,
  ) {
    this.name = name;
    this.email = email;
    this.password = hashedPassword;
    this.avatar = avatar;
    this.whatsapp = whatsapp;
    this.bio = bio;
  }
}

export default User;