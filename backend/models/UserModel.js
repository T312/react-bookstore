import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    phone: {
      type: Number,
      unique: true,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
});
const User = mongoose.model("User", userSchema);

export default User;
