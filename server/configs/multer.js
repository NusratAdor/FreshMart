import multer from 'multer';


export const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
    fileFilter: (req, file, cb) => {
        const allowed = ['image/jpeg', 'image/png', 'image/webp'];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);  // accept
        } else {
            cb(new Error('Only JPEG, PNG, and WebP images are allowed'));
        }
    }
});




// 1. Seller picks "apple.jpg" in the browser form
// 2. Browser sends multipart/form-data request to /api/product/add
// 3. Multer middleware intercepts it BEFORE the controller runs
// 4. Multer saves it to: /tmp/a3f8c2b1d9e4  (temporary file)
// 5. Multer attaches to req.file:
//    {
//      fieldname: 'image',
//      originalname: 'apple.jpg',
//      encoding: '7bit',
//      mimetype: 'image/jpeg',
//      destination: '/tmp',
//      filename: 'a3f8c2b1d9e4',
//      path: '/tmp/a3f8c2b1d9e4',
//      size: 204800   // bytes (200KB)
//    }
// 6. productController.js reads req.file.path
// 7. Uploads that temp file to Cloudinary
// 8. Temp file remains on disk forever ← Bug #4