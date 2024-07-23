const express = require("express");
const app = express();
const dotenv = require("dotenv/config");
const dbConnect = require("./config/dbConnect");
const PORT = process.env.PORT || 4000;
const authRouter = require('./routes/authRoutes');
const productRouter = require('./routes/productRoute');
const blogRouter = require('./routes/blogRoutes');
const categoryRouter = require('./routes/prodcategoryRoutes');
const blogcategoryRouter = require('./routes/blogCatRoute');
const brandRouter = require('./routes/brandRoute');
const colorRouter = require('./routes/colorRoute');
const enqRouter = require('./routes/enqRoute');
const couponRouter = require('./routes/couponRoute');
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
dbConnect();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//Prefixo URL
app.use('/api/user', authRouter);
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogcategory', blogcategoryRouter);
app.use('/api/brand', brandRouter);
app.use('/api/coupon', couponRouter);
app.use('/api/color', colorRouter);
app.use('/api/enquiry', enqRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`Server is running at PORT ${PORT}`);
})