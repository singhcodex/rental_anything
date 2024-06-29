import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    rentalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Rental', // Assuming you have a Rental model
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    paymentDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ['CreditCard', 'DebitCard', 'PayPal', 'BankTransfer'],
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        required: true,
    },
});

export default mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);
