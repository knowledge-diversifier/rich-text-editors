import "../App.css";
import DraftEditor from "../components/DraftEditor";
import { useState } from "react";

const DraftEditorPage = () => {

    const [editorContent, setEditorContent] = useState('')


    return (
        <div className="App">
            <div className="editor">
                <DraftEditor setEditorContent={setEditorContent} />
            </div>
            <div>{ editorContent }</div>

            <div
                dangerouslySetInnerHTML={{ __html: editorContent }}
            />
        </div>
    );
}

export default DraftEditorPage;
