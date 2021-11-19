const mongoose = require('mongoose');

export const dbConnection = async () => {

  try {
    await mongoose.connect(process.env.DB_CNN);
  } catch (error) {
    console.log(error);
    throw new Error('Database connection error.');
  }
};

export const dbDisconn = async () => {
  
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
    throw new Error('Database disconnection error.');
  }
};
