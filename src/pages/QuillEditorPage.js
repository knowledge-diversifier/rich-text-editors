import QuillEditor from "../components/QuillEditor";
import { useState } from "react";

const QuillEditorPage = () => {

    const [editorContent, setEditorContent] = useState('')
    return (
        <>
            <QuillEditor setEditorContent={setEditorContent} />

            <div>
                {editorContent}
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: editorContent }}
            />
        </>
    );
}

export default QuillEditorPage;
