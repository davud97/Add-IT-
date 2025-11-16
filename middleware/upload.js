const multer = require("multer")
const path = require("path")

// Storage settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  },
})

// File filter
const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/jpg", "image/png"]
  if (allowed.includes(file.mimetype)) {
    cb(null, true)
  } else {
    cb("Only JPG and PNG images are allowed!")
  }
}

// Final upload middleware, I havent added any limit of what size the image shall be max, user can upload any size of image they have.
const upload = multer({
  storage,
  fileFilter,
})

module.exports = upload
