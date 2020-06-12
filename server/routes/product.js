const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST

router.post('/products', upload.single('photo'), async (req, res) => {
    console.log("/products" + req.body.title);
    try {
        let product = new Product();
        product.title = req.body.title;
        product.description = req.body.description;
        //product.photo = req.file.location;
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
router.post('/test', (req, res) => {
    console.log("Started ---------");
    console.dir(req.body);
});

// GET ALL

// GET 

// PUT

// DELETE

module.exports = router;

