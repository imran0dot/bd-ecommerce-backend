import app from './application';
import config from '../src/app/config';
import mongoose from 'mongoose';


const server = async () => {
    console.log(config.port);
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
        app.listen(config.port, () => {
            console.log(`your server is running on this port http://localhost:${config.port}`)
        });
    }
    catch (err) {
        console.log(err);
        return err;
    }

};

server();

