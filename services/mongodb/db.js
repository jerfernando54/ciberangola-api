const mongoose  =require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: false
        });
        console.log(`[db] connected successfully`);
    } catch (error) {
        console.log(`connection [db] failed, ${error}`);
    }
}

// Using promises

// mongoose.promise = global.Promise;

// async function connect(url) {
//     await mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: false
//     }).then(() => {
//         console.log(`database connected successfully`)
//     }).catch((err) => {
//         console.log(`connection failed, ${err}`)
//     })
// }

module.exports = connectDB;