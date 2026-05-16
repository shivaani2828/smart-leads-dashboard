import mongoose from "mongoose";

export interface ILead {
  name: string;
  email: string;
  status: "New" | "Contacted" | "Qualified" | "Lost";
  source: "Website" | "Instagram" | "Referral";
}

const LeadSchema = new mongoose.Schema<ILead>({
  name: String,
  email: String,
  status: String,
  source: String
}, { timestamps: true });

export default mongoose.model("Lead", LeadSchema);