import React from "react";

export default function ApprovalNodeForm({ node, updateNodeData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    updateNodeData(node.id, { [name]: type === "number" ? Number(value) : value });
  };
  return (
    <form>
      <h3>Approval Node</h3>
      <label>Title</label>
      <input name="title" type="text" value={node.data?.title || ""} onChange={handleChange} />
      <label>Approver Role</label>
      <input name="role" type="text" value={node.data?.role || ""} onChange={handleChange} />
      <label>Auto-approve Threshold</label>
      <input name="threshold" type="number" value={node.data?.threshold || 0} onChange={handleChange} />
    </form>
  );
}
