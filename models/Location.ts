import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String },
    country: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Location ||
mongoose.model('Location', LocationSchema);
