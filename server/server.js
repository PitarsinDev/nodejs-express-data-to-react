const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json(
        {
            message: 'Hello from Express'
        }
    );
})

app.listen(port, () => {
    console.log('Server is running')
});