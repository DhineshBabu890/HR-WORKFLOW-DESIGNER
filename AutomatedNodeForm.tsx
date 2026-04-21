import React from "react";

export default function AutomatedNodeForm({ node, updateNodeData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    updateNodeData(node.id, { [name]: value });
  };
  return (
    <form>
      <h3>Automated Step Node</h3>
      <label>Title</label>
      <input name="title" type="text" value={node.data?.title || ""} onChange={handleChange} />
      <label>Action</label>
      <select name="action" value={node.data?.action || ""} onChange={handleChange}>
        <option value="">Select Action</option>
        <option value="send_email">Send Email</option>
        <option value="generate_doc">Generate Document</option>
      </select>
    </form>
  );
}
