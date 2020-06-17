const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");

// POST

router.post('/products', upload.single('photo'), async (req, res) => {

    try {
        console.log(req.file.location);
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        product.photo = req.file.location;
        product.price = req.body.price;
        product.stockQuantity = req.body.stockQuantity;

        await product.save();
        res.json({
            status: true,
            message: "Successfully saved",
        });
    } catch (error) {
        res.json(500,
            {
                success: false,
                message: error.message
            }
        );
    }
});

router.post('/test', upload.single('photo'), async (req, res) => {
    console.log("/test");
    console.log();
    try {
        let product = new Product();
        product.title = "Test";
        product.description = "DTest";
        product.price = 29;
        product.photo = req.file.location;
        product.stockQuantity = 20;
        let item = await product.save();
        res.json({
            status: true,
            message: "Successfully saved",
            data: item,
        });
    } catch (error) {
        res.json(500,
            {
                success: false,
                message: error.message
            }
        );
    }
});

// GET ALL

// GET 

// PUT

// DELETE

module.exports = router;

