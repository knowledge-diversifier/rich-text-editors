import QuillEditor from "../components/QuillEditor";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import QuillEmojisEditor2 from "../components/Quill/QuillEmojisEditor";
import QuillEmojiEditor from "../components/Quill/QuillEmojiEditor";
import CustomOpQuillEditor from "../components/Quill/CustomOpQuillEditor";

const QuillVariantsEditorPage = () => {

    const { variant } = useParams();
    const [editorContent, setEditorContent] = useState('')

    const selectVariant = (variant) => {
        switch (variant) {
            case 'emoji-limited':
                return <QuillEditor setEditorContent={setEditorContent} />
            case 'emojis2':
                return <QuillEmojisEditor2 setEditorHtml={setEditorContent} />
            case 'emojis':
                return <QuillEmojiEditor setEditorHtml={setEditorContent} />
            case 'custom':
                return <CustomOpQuillEditor setEditorHtml={setEditorContent} />
            default:
                return <QuillEditor setEditorContent={setEditorContent} />
        }
    }

   
    return (
        <>
            {selectVariant(variant)}

            <div>
                {editorContent}
            </div>
            <div
                dangerouslySetInnerHTML={{ __html: editorContent }}
            />
        </>
    );
}

export default QuillVariantsEditorPage;
