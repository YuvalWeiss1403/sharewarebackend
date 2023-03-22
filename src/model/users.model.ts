import { Schema, model } from "mongoose";
import mongoose from "mongoose";
export interface IUser {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	token?: string;
	connect?: boolean;
}

export const userSchema = new Schema<IUser>({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	userName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	connect: { type: Boolean, required: false },
});

export const UsersModal = mongoose.model<IUser>("users", userSchema);
