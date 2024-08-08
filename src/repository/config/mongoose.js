require('dotenv').config();
const mongoose = require('mongoose');

const password = encodeURIComponent(process.env.KEY_SECRET);
const uri = `mongodb+srv://admin:${password}@${process.env.USUARIO_MONGODB}.mqztirw.mongodb.net/${process.env.USUARIO_MONGODB}?retryWrites=true&w=majority&appName=${process.env.USUARIO_MONGODB}`;

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverApi: { version: '1' },
            connectTimeoutMS: 20000, // Aumentar o tempo limite de conexão
            socketTimeoutMS: 45000 // Aumentar o tempo limite do socket
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        throw err;
    }
}

module.exports = connectToDatabase;
