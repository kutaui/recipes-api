const express = require('express');
const routes = require('./recipes/routes');
const app = express();
const port = 3000
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
res.send('Available endpoints: /recipes and /recipes/:id')
})

app.use('/recipes', routes);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

