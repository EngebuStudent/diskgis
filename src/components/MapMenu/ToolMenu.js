import React from 'react';
import './menu.css';

// ToolMenu component
function ToolMenu(props) {
  return (
    <div>
      <BufferTool bufferToolSubmit={props.bufferToolSubmit} layers={props.layers} />
      <UnionTool handleOtherToolSubmit={props.handleOtherToolSubmit} layers={props.layers} />
      <IntersectionTool handleOtherToolSubmit={props.handleOtherToolSubmit} layers={props.layers} />
      <DifferenceTool handleOtherToolSubmit={props.handleOtherToolSubmit} layers={props.layers} />
      <LineLengthTool handleMeasurementSubmit={props.handleMeasurementSubmit} layers={props.layers} />
      <AreaTool handleMeasurementSubmit={props.handleMeasurementSubmit} layers={props.layers} />
    </div>
  );
}

// BufferTool component
function BufferTool(props) {
  return (
    <div className="tool">
      Buffer
      <form onSubmit={props.bufferToolSubmit}>
        <select className="bufferSelect">
          {props.layers.map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select> <br />
        Buffer distance:
        <input type="number" className="bufferDist" /> meter
        <input type="submit" value="→" />
      </form>
    </div>
  );
}

// LineLengthTool component
function LineLengthTool(props) {
  return (
    <div className="tool">
      Line Length
      <form onSubmit={props.handleMeasurementSubmit} className="line-length-form">
        <select className="measurement-select">
          {props.layers.filter(layer => layer.source.data.geometry.type === "LineString").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select>
        <input type="submit" value="→" />
      </form>
    </div>
  );
}

// AreaTool component
function AreaTool(props) {
  return (
    <div className="tool">
      Polygon Area
      <form onSubmit={props.handleMeasurementSubmit} className="area-form">
        <select className="measurement-select">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select>
        <input type="submit" value="→" />
      </form>
    </div>
  );
}

// UnionTool component
function UnionTool(props) {
  return (
    <div className="tool">
      Union
      <form onSubmit={props.handleOtherToolSubmit} className="union-form">
        <select className="select-one">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select> <br />
        <select className="select-two">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select>
        <input type="submit" value="→" />
      </form>
    </div>
  );
}

// IntersectionTool component
function IntersectionTool(props) {
  return (
    <div className="tool">
      Intersection
      <form onSubmit={props.handleOtherToolSubmit} className="intersection-form">
        <select className="select-one">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select><br />
        <select className="select-two">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select>
        <input type="submit" value="→" />
      </form>
    </div>
  );
}

// DifferenceTool component
function DifferenceTool(props) {
  return (
    <div className="tool">
      Difference
      <form onSubmit={props.handleOtherToolSubmit} className="difference-form">
        <select className="select-one">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select>
        <select className="select-two">
          {props.layers.filter(layer => layer.source.data.geometry.type === "Polygon" || layer.source.data.geometry.type === "MultiPolygon").map(layer => <option key={layer.id}>{layer.id}</option>)}
        </select>
        <input type="submit" value="→" />
      </form>
    </div>
  );
}

export default ToolMenu;
