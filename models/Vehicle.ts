import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        enum: ['Car', 'Bike', 'Ebike'],
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
    },
    licensePlate: {
        type: String,
    },
    vin: {
        type: String,
    },
    locationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true,
    },
    pricePerDay: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Available', 'Rented', 'Maintenance'],
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Vehicle || mongoose.model('Vehicle', VehicleSchema);
