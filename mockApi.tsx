export const automations = [
  { id: "send_email", label: "Send Email", params: ["to", "subject"] },
  { id: "generate_doc", label: "Generate Document", params: ["template", "recipient"] },
];

export function simulateWorkflow(workflowJson: any) {
  return {
    steps: workflowJson.nodes.map((n: any, i: number) => ({
      step: i + 1,
      node: n.data.label,
      status: "executed",
    })),
  };
}
