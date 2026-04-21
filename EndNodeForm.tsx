import React from "react";

export default function EndNodeForm({ node, updateNodeData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    updateNodeData(node.id, { [name]: type === "checkbox" ? checked : value });
  };
  return (
    <form>
      <h3>End Node</h3>
      <label>Message</label>
      <input name="message" type="text" value={node.data?.message || ""} onChange={handleChange} />
      <label>Summary Flag</label>
      <input name="summary" type="checkbox" checked={!!node.data?.summary} onChange={handleChange} />
    </form>
  );
}
