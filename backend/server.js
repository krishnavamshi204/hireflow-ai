const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('HireFlow AI Backend Running');
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'UP',
        service: 'backend',
        timestamp: new Date()
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});