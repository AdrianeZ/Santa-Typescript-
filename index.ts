import * as express from "express";
import * as cors from "cors";
import {static as expressStatic} from "express";
import {homeRouter} from "./routers/home";
import {childRouter} from "./routers";
import {giftRouter} from "./routers/gift";
import {handleError} from "./utils/errors";

const app = express();
app.use(cors({origin:"http://localhost:3000"}));
app.use(expressStatic('public'));
app.use(express.json()); // Content-type: application/json


app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3001, '0.0.0.0', (): void => {
    console.log('Listening on http://localhost:3001');
});
