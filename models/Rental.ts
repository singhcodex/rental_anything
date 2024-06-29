import mongoose from 'mongoose';

const RentalSchema = new mongoose.Schema({
    vehicleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: true,
    },
    renterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    totalCost: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Active', 'Completed', 'Cancelled'],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Rental || mongoose.model('Rental', RentalSchema);
