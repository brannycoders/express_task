const express = require('express');
const app = express();




app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

app.get('/greet/:Nathaniel', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
});

app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, user: 'User 1' },
        { id: 2, user: 'User 2' },
    ];
    res.json(users);
});


app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});






const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
