import React from "react";

export default function TaskNodeForm({ node, updateNodeData }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateNodeData(node.id, { [name]: value });
  };
  return (
    <form>
      <h3>Task Node</h3>
      <label>Title</label>
      <input name="title" type="text" value={node.data?.title || ""} onChange={handleChange} />
      <label>Description</label>
      <textarea name="description" value={node.data?.description || ""} onChange={handleChange}></textarea>
      <label>Assignee</label>
      <input name="assignee" type="text" value={node.data?.assignee || ""} onChange={handleChange} />
      <label>Due Date</label>
      <input name="dueDate" type="date" value={node.data?.dueDate || ""} onChange={handleChange} />
    </form>
  );
}
