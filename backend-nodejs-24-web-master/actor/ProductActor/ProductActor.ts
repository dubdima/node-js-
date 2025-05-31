import { Request, Response } from "express";
import { Responder } from "../middleware/Responder";
import { Pool } from "../middleware/Pool";

export class ProductActor {
    static async createProduct(req: Request, res: Response) {
        try {
            const {title, price, description} = req.body
            const product = await Pool.conn.product.create({
                data: {
                    title, price, description
                }
            })
            res.json(Responder.ok(product))
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createProductFeature(req: Request, res: Response) {
        try {
            const {product_id, icon, title, value} = req.body
            console.log(product_id, icon, title, value);
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createProductFilter(req: Request, res: Response) {
        try {
            const {title, type_id} = req.body
            console.log(title, type_id);
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createProductFilterItem(req: Request, res: Response) {
        try {
            const {title, filter_id} = req.body
            console.log(title, filter_id);
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createProductImage(req: Request, res: Response) {
        try {
            const {src, product_id} = req.body
            console.log(src, product_id);
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
    static async createProductType(req: Request, res: Response) {
        try {
            const {title, product_id} = req.body
            console.log(title, product_id);
        } catch (e) {
            console.log(e)
            res.json(Responder.internal())
        }
    }
}

