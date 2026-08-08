import mongoose from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.types.ObjectId, //one who is subscribing
      ref: "USer",
    },
    channel: {
      type: Schema.types.ObjectId, // one to whom 'subscriber' is subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const subscription = mongoose.model("Subscription", subscriptionSchema);
