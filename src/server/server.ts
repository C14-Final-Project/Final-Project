import * as express from 'express';
import apiRouter from "./routes";

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRouter);

app.listen(3000, () => console.log('App listening on port 3000'));