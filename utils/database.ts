import mongoose from 'mongoose';

const dbConnection = async () => {

  if (mongoose.connection.readyState === 0) return;

  try {
    await mongoose.connect(process.env.DB_CNN as string);
  } catch (error) {
    console.log(error);
    throw new Error('Database connection error.');
  }
};

export default dbConnection;
