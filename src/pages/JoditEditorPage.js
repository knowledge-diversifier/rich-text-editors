import JoEditor from "../components/JoditEditor";
import { useState } from "react";

const JoditEditorPage = () => {

    const [editorContent, setEditorContent] = useState('')
    return (
        <>
            <JoEditor setEditorContent={setEditorContent} />

            <div>
                {editorContent}
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: editorContent }}
            />
        </>
    );
}

export default JoditEditorPage;
