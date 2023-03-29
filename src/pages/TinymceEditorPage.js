import "../App.css";
import TinymceEditor from "../components/TinymceEditor";
import { useState } from "react";

const TinymceEditorPage = () => {

    const [editorContent, setEditorContent] = useState('')


    return (
        <div className="App">
            <div className="editor">
                <TinymceEditor setEditorContent={setEditorContent} />
            </div>

            <div
                dangerouslySetInnerHTML={{ __html: editorContent }}
            />
        </div>
    );
}

export default TinymceEditorPage;
