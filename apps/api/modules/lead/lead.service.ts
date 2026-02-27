import { Lead } from "./lead.model";
import type { ILeadCreate } from "./lead.types";


export class LeadService {

    async createLead(leadData: ILeadCreate) {
        const lead = new Lead(leadData);
        return await lead.save();
    }

    async getLeads(workspaceId: string, realtorId: string) {
        const leadDetails = await Lead.find({ workspaceId, realtorId }).select("name email phone _id");
        return leadDetails;
    }

    async getLeadDetails(leadId: string) {
        return await Lead.findById(leadId);
    }

    async updateLead(leadId: string, leadData: ILeadCreate) {
        return await Lead.findByIdAndUpdate(leadId, leadData, { new: true });
    }

    async deleteLead(leadId: string) {
        return await Lead.findByIdAndDelete(leadId);
    }

}