
import mongoose from "mongoose";


const ReviewSchema = new mongoose.Schema({
    rentalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental',
        required: true,
    },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Review ||
mongoose.model('Review', ReviewSchema);
