import mongoose from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "Admin" | "Sales";
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["Admin", "Sales"],
    default: "Sales"
  }
});

export default mongoose.model("User", UserSchema);