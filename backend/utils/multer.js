import multer from "multer";

const storage = multer.diskStorage({
  // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function (req, file, cb) {
    cb(null, "img/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
/// file validation
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file type" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 2048 * 2048 },
  fileFilter: fileFilter,
});

export default upload;
