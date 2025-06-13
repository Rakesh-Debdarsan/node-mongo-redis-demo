import { UserModel } from '../models/user.model';
import redisClient from '../utils/redisClient';

const USER_CACHE_PREFIX = 'user:';

export const createUser = async (data: any) => {
  const user = await UserModel.create(data);
  return user;
};

export const getUserById = async (id: string) => {
  const cached = await redisClient.get(USER_CACHE_PREFIX + id);
  if (cached) return JSON.parse(cached);

  const user = await UserModel.findById(id);
  if (user) {
    await redisClient.set(USER_CACHE_PREFIX + id, JSON.stringify(user), { EX: 3600 });
  }
  return user;
};

export const updateUser = async (id: string, data: any) => {
  const user = await UserModel.findByIdAndUpdate(id, data, { new: true });
  if (user) {
    await redisClient.set(USER_CACHE_PREFIX + id, JSON.stringify(user), { EX: 3600 });
  }
  return user;
};

export const deleteUser = async (id: string) => {
  await redisClient.del(USER_CACHE_PREFIX + id);
  return UserModel.findByIdAndDelete(id);
};
