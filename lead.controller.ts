import { Request, Response } from "express";
import Lead from "../models/Lead";

export const getLeads = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const filter: any = {};

  if (req.query.status) {
    filter.status = req.query.status;
  }

  if (req.query.source) {
    filter.source = req.query.source;
  }

  if (req.query.search) {
    filter.$or = [
      {
        name: {
          $regex: req.query.search,
          $options: "i"
        }
      },
      {
        email: {
          $regex: req.query.search,
          $options: "i"
        }
      }
    ];
  }

  const sort =
    req.query.sort === "oldest"
      ? { createdAt: 1 }
      : { createdAt: -1 };

  const leads = await Lead.find(filter)
    .sort(sort)
    .skip(skip)
    .limit(limit);

  const total = await Lead.countDocuments(filter);

  res.json({
    data: leads,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  });
};

export const createLead = async (req: Request, res: Response) => {
  const lead = await Lead.create(req.body);
  res.status(201).json(lead);
};

export const updateLead = async (req: Request, res: Response) => {
  const lead = await Lead.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(lead);
};

export const deleteLead = async (req: Request, res: Response) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.json({ message: "Lead deleted" });
};