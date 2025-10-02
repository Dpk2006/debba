import mongoose from 'mongoose';

const URI = "mongodb+srv://dpksaini:vbvH0FFrekn8mSKF@dataset.1gxqjha.mongodb.net/dibba?retryWrites=true&w=majority&appName=DataSet"

function connectMongo(){
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
}

export {connectMongo}