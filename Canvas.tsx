
import React, { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

import StartNodeForm from "./NodeForms/StartNodeForm";
import TaskNodeForm from "./NodeForms/TaskNodeForm";
import ApprovalNodeForm from "./NodeForms/ApprovalNodeForm";
import AutomatedNodeForm from "./NodeForms/AutomatedNodeForm";
import EndNodeForm from "./NodeForms/EndNodeForm";
import { simulateWorkflow } from "../api/mockApi";

export default function Canvas() {
  const [nodes, setNodes] = useState([
    { id: "1", type: "input", position: { x: 50, y: 50 }, data: { label: "Start Node" } },
  ]);
  const [edges, setEdges] = useState<any[]>([]);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [simulationResult, setSimulationResult] = useState<any>(null);

  // Update node data by id
  const updateNodeData = useCallback((id: string, newData: any) => {
    setNodes((nds) =>
      nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, ...newData } } : n))
    );
    // Also update selectedNode if it's the one being edited
    setSelectedNode((node: any) =>
      node && node.id === id ? { ...node, data: { ...node.data, ...newData } } : node
    );
  }, []);

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

  const addNode = (type: string) => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      type,
      position: { x: 100 + nodes.length * 50, y: 100 },
      data: { label: `${type} Node` },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const runSimulation = () => {
    const workflowJson = { nodes, edges };
    const result = simulateWorkflow(workflowJson);
    setSimulationResult(result);
  };

  // Custom node types for React Flow
  const nodeTypes = {
    input: (props: any) => (
      <div onClick={() => setSelectedNode(props)} style={{ padding: 8, background: '#e3f7ff', borderRadius: 4 }}>{props.data.label || 'Start Node'}</div>
    ),
    task: (props: any) => (
      <div onClick={() => setSelectedNode(props)} style={{ padding: 8, background: '#f7f3e3', borderRadius: 4 }}>{props.data.title || props.data.label || 'Task Node'}</div>
    ),
    approval: (props: any) => (
      <div onClick={() => setSelectedNode(props)} style={{ padding: 8, background: '#e3ffe7', borderRadius: 4 }}>{props.data.title || props.data.label || 'Approval Node'}</div>
    ),
    automated: (props: any) => (
      <div onClick={() => setSelectedNode(props)} style={{ padding: 8, background: '#f0e3ff', borderRadius: 4 }}>{props.data.title || props.data.label || 'Automated Node'}</div>
    ),
    output: (props: any) => (
      <div onClick={() => setSelectedNode(props)} style={{ padding: 8, background: '#ffe3e3', borderRadius: 4 }}>{props.data.message || props.data.label || 'End Node'}</div>
    ),
  };

  return (
    <div style={{ display: "flex", height: "90vh" }}>
      {/* Sidebar */}
      <div style={{ flex: 1, borderRight: "1px solid #ccc", padding: "10px" }}>
        <h3>Node Types</h3>
        <button onClick={() => addNode("task")}>Add Task Node</button>
        <button onClick={() => addNode("approval")}>Add Approval Node</button>
        <button onClick={() => addNode("automated")}>Add Automated Node</button>
        <button onClick={() => addNode("output")}>Add End Node</button>
        <hr />
        <button onClick={runSimulation}>Test Workflow</button>
        {simulationResult && (
          <div style={{ marginTop: "10px" }}>
            <h4>Execution Log</h4>
            {simulationResult.steps.map((s: any) => (
              <p key={s.step}>{s.step}. {s.node} - {s.status}</p>
            ))}
          </div>
        )}
      </div>

      {/* Canvas */}
      <div style={{ flex: 3 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>

      {/* Node Form Panel */}
      <div style={{ flex: 1, padding: "10px", borderLeft: "1px solid #ccc" }}>
        {selectedNode?.type === "input" && <StartNodeForm node={selectedNode} updateNodeData={updateNodeData} />}
        {selectedNode?.type === "task" && <TaskNodeForm node={selectedNode} updateNodeData={updateNodeData} />}
        {selectedNode?.type === "approval" && <ApprovalNodeForm node={selectedNode} updateNodeData={updateNodeData} />}
        {selectedNode?.type === "automated" && <AutomatedNodeForm node={selectedNode} updateNodeData={updateNodeData} />}
        {selectedNode?.type === "output" && <EndNodeForm node={selectedNode} updateNodeData={updateNodeData} />}
      </div>
    </div>
  );
}
