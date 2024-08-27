import mongoose from "mongoose";
import TUser from "./user.interface";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema<TUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
            required: false
        },
        lastName: {
            type: String,
            required: true
        },
    },
    email: {
        type:
            String, required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
});

// bcrypt password 
userSchema.pre('save', async function (next) {
    const user = this as TUser;
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        throw new Error("password didn't generate")
    }
});

userSchema.post('save', function(doc, next) {
    doc.password = "";
    next();
  });

const userModel = mongoose.model('user', userSchema);
export default userModel;