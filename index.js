import express, { json } from 'express';
import { router } from './src/routes/router.js';

const app = express();
const PORT_NUMBER = process.env.PORT || 3000;
app.use(json());
app.use('/', router);

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on port ${PORT_NUMBER}`, `visit http://localhost:${PORT_NUMBER}`);
});
