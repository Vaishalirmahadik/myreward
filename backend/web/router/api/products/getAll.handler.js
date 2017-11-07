const Joi = require('joi');
const Product = rootRequire('models').Product;

const { ValidationError } = rootRequire('commons').ERROR;

async function logic({ context, params }) {
    try {
        // const pageNo = params.pageNo;
        // const onPageResults = 10;

        // const products = await Product.find().skip(onPageResults * pageNo)
        //     .limit(onPageResults)
        //     .exec();
        if (params._id == "all") {

            const products = await Product.find()

            const totalResults = await Product.count();
            return { products, totalResults };
        } else {

            const products = await Product.find({ brand: params._id })

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