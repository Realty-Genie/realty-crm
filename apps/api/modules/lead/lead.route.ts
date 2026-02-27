import express from "express";
import { createLead, getLeads, updateLead, deleteLead, getLeadDetails } from "./lead.controller";
const router = express.Router();
import requireAuth from "../../shared/middleware/requireAuth";


router.get("/health", (req, res) => {
    res.send("Lead Route running properly");
});


router.post("/create", createLead);
router.get("/", getLeads);
router.put("/:id", updateLead);
router.get("/:id", getLeadDetails);
router.delete("/:id", deleteLead);


export default router;
