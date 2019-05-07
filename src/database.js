import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
        useNewUrlParser: true
        })
        console.log('>>> db connected')
    } catch {
        console.log('something went wrong')
    }
}
