import {Request, Response, Router} from "express";

const homeRouter = Router();

homeRouter

    .get('/', (req: Request, res: Response): void => {
        res.redirect('/child');
    });

export {homeRouter};
