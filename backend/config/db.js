import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`mongo DB connected:${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    //exit tghe whole process with failure
    process.exit(1);
  }
};
export default connectDB;
