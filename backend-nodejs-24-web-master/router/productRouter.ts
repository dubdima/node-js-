import express from 'express'
import { ProductActor } from '../actor/ProductActor/ProductActor'

export const productRouter = express.Router()

productRouter.post("/create_product", ProductActor.createProduct)
productRouter.post(
    "/create_product_feature",
    ProductActor.createProductFeature
);
productRouter.post(
    "/create_product_filter",
    ProductActor.createProductFilter
);
productRouter.post(
    "/create_product_filteritem",
    ProductActor.createProductFilterItem
);
productRouter.post(
    "/create_product_image",
    ProductActor.createProductImage
);
productRouter.post(
    "/create_product_type",
    ProductActor.createProductType
);