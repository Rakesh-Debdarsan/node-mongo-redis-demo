import { User, IUser } from '../models/userModel';
import { redisClient } from '../config/redis';

const USER_CACHE_PREFIX = 'user:';

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  const cacheKey = USER_CACHE_PREFIX + id;
  const cached = await redisClient.get(cacheKey);

  if (cached) return JSON.parse(cached);

  const user = await User.findById(id);
  if (user) await redisClient.set(cacheKey, JSON.stringify(user), 'EX', 60); // 1 min
  return user;
};

export const createUser = async (data: Partial<IUser>): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};

export const updateUser = async (id: string, data: Partial<IUser>): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(id, data, { new: true });
  if (user) {
    await redisClient.set(USER_CACHE_PREFIX + id, JSON.stringify(user), 'EX', 60);
  }
  return user;
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  const user = await User.findByIdAndDelete(id);
  await redisClient.del(USER_CACHE_PREFIX + id);
  return user;
};

export const getUserStats = async () => {
  return User.aggregate([
    { $group: { _id: '$age', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
  ]);
};
