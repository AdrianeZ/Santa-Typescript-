import {Request, Response} from "express";
import {GiftEntity} from "../types/EntityTypes";

const {Router} = require("express");
const {GiftRecord} = require("../records/gift.record");
const {ValidationError} = require("../utils/errors");

const giftRouter = Router();

giftRouter

    .get('/', async (req: Request, res: Response): Promise<void> => {
        const giftsList = await GiftRecord.listAll();
        res.render('gift/list', {
            giftsList,
        });
    })

    .post('/', async (req: Request, res: Response): Promise<void> => {
        const data: GiftEntity = {
            ...req.body,
            count: Number(req.body.count),
        };

        const newGift = new GiftRecord(data);
        await newGift.insert();

        res.redirect('/gift');
    });

export {giftRouter}
