import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema(
  {
    quantity: { type: Number, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);
orderItemSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

orderItemSchema.set("toJSON", {
  virtuals: true,
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);

export default OrderItem;
