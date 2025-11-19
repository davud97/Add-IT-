const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    // ***************Dawood profile fields*****************
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    // ***********profile image **********
    profileImage: {
      type: String,
      default: "default.jpg",
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
