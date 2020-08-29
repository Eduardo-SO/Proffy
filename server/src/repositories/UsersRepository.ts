import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async createUser({
    name,
    email,
    password,
    avatar,
    whatsapp,
    bio,
  }: CreateUserRequest): Promise<User> {
    const exsitentUser = await this.findOne({
      where: {
        email,
      },
    });

    if (exsitentUser) {
      throw new Error('This user already exist');
    }

    const user = this.create({
      name,
      email,
      password,
      avatar,
      whatsapp,
      bio,
    });

    await this.save(user);

    return user;
  }
}

export default UsersRepository;
