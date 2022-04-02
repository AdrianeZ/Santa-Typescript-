import {Request, Response} from "express";
import {GiftEntity} from "../types";
import {Router} from "express";
import {ValidationError} from "../utils/errors";

const {GiftRecord} = require("../records/gift.record");


const giftRouter = Router();

giftRouter

    .get('/', async (req: Request, res: Response): Promise<void> => {
        const giftsList = await GiftRecord.listAll();
        res.json(giftsList);
    })

    .post('/', async (req: Request, res: Response): Promise<void> => {
        const data: GiftEntity = {
            ...req.body,
            count: Number(req.body.count),
        };

        const newGift = new GiftRecord(data);
        await newGift.insert();

        res.redirect('/gift');
    })

    .delete("/:id", async (req: Request, res: Response): Promise<void> => {
        const {id} = req.params;
        const giftToDelete = await GiftRecord.getOne(id);
        if (!giftToDelete) throw new ValidationError("There's no such gift");
        await giftToDelete.delete();
        res.status(204).end();
    });


export {giftRouter}
