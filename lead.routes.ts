import { Router } from "express";

import {
  getLeads,
  createLead,
  updateLead,
  deleteLead
} from "../controllers/lead.controller";

import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

router.get("/", authMiddleware, getLeads);
router.post("/", authMiddleware, createLead);
router.put("/:id", authMiddleware, updateLead);
router.delete("/:id", authMiddleware, deleteLead);

export default router;