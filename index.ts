import * as express from "express";
import * as methodOverride from "method-override";
require('express-async-errors');
import {engine} from "express-handlebars";
import {handleError} from "./utils/errors";
import {homeRouter} from "./routers/home";
import {childRouter} from "./routers";
import {giftRouter} from "./routers/gift";
import {handlebarsHelpers} from "./utils/handlebars-helpers";
import {urlencoded,static as expressStatic} from "express";

const app = express();

app.use(methodOverride('_method'));
app.use(urlencoded({
    extended: true,
}));
app.use(expressStatic('public'));
// app.use(express.json()); // Content-type: application/json
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);

app.use(handleError);

app.listen(3000, '0.0.0.0', (): void => {
    console.log('Listening on http://localhost:3000');
});
