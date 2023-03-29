import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./style.css"

export const CustomOpQuillEditor = ({setEditorHtml}) => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };

  const saveEditorContent=()=>{
    setEditorHtml(state.value)
  }
  const handleProcedureContentChange = (content, delta, source, editor) => {
    handleChange(content);
    //   setEditorHtml(editor.getHTML())
      //let has_attribues = delta.ops[1].attributes || "";
      //console.log(has_attribues);
      //const cursorPosition = e.quill.getSelection().index;
      // this.quill.insertText(cursorPosition, "★");
      //this.quill.setSelection(cursorPosition + 1);
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleProcedureContentChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
       <button onClick={saveEditorContent}>Save</button>
       
    </div>
  );
};

export default CustomOpQuillEditor;
