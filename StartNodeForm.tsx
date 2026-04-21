import React from "react";

export default function StartNodeForm({ node, updateNodeData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNodeData(node.id, { label: e.target.value });
  };
  return (
    <form>
      <h3>Start Node</h3>
      <label>Title</label>
      <input name="label" type="text" value={node.data?.label || ""} onChange={handleChange} />
    </form>
  );
}
