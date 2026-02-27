import type { Request, Response } from "express";

// POST
export async function createLead(req: Request, res: Response) {
    
    const {name, email, phone, source, status, realtorId, workspaceId} = req.body;
    
    res.send("create lead");
}

// GET
export async function getLeads(req: Request, res: Response) {
    res.send("get leads");
}

// GET
export async function getLeadDetails(req: Request, res: Response) {
    const leadId = req.params.id;
    res.send("get lead");
}

// PUT
export async function updateLead(req: Request, res: Response) {
    const leadId = req.params.id;
    res.send("update lead");
}

// DELETE
export async function deleteLead(req: Request, res: Response) {
    const leadId = req.params.id;
    res.send("delete lead");
}


