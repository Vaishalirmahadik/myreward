const Joi = require('joi');
const Product = rootRequire('models').Product;

const { ValidationError } = rootRequire('commons').ERROR;

async function logic({ context, params, query }) {
    try {
        // const pageNo = params.pageNo;
        // const onPageResults = 10;

        // const products = await Product.find().skip(onPageResults * pageNo)
        //     .limit(onPageResults)
        //     .exec();

        console.log(params, query.search);
        if (params._id == "search") {
            const products = await Product.find({ $or: [{ "name": { "$regex": query.search, "$options": "i" } }] }).exec()
            return { products };

        } else if (params._id == "some") {

            const products = await Product.find({ $or: [{ category: { $in: query.category } }, { brand: { $in: query.brand } }] }).exec()
            return { products };


        } else if (params._id == "all") {

            const products = await Product.find().populate('brand').exec()

            const totalResults = await Product.count();
            return { products, totalResults };
        } else {

            const products = await Product.find({ brand: params._id }).populate('brand').exec()

            const totalResults = await Product.count({ brand: params._id });
            return { products, totalResults };

        }



    } catch (e) {
        logger.error(e);
        throw e;
    }
}


function handler(req, res, next) {

    logic(req).then(data => {
            res.json({
                success: true,
                data,
            });
        })
        .catch(err => next(err));



}
module.exports = handler;