const express = require('express');
const app = express();

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*", "always");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");

    next();
});

app.get('/api/memories', (req, res, next) => {
    
    memories = [
        {
            _id: null,
            caption: 'cshdbca',
            imagePath: null,
            date: null,
            addedBy: null
        },
        {
            _id: null,
            caption: 'fdsgs',
            imagePath: null,
            date: null,
            addedBy: null
        },
        {
            _id: null,
            caption: 'hegsrsdfvd',
            imagePath: null,
            date: null,
            addedBy: null
        },
        {
            _id: null,
            caption: 'njkrenjgw',
            imagePath: null,
            date: null,
            addedBy: null
        }
    ];

    res.status(200).json({
        message: 'Memories fetched successfully',
        memories: memories
    });
});

module.exports = app;