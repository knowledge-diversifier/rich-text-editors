import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'react-quill-emoji';

const QuillEmojiEditor = ({ setEditorHtml }) => {

    const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;

    Quill.register({
        'formats/emoji': EmojiBlot,
        'modules/emoji-shortname': ShortNameEmoji,
        'modules/emoji-toolbar': ToolbarEmoji,
        'modules/emoji-textarea': TextAreaEmoji
    }, true);

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ size: [] }],
            [{ font: [] }],
            [{ align: ["right", "center", "justify"] }],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            [{ color: ["red", "#785412"] }],
            [{ background: ["red", "#785412"] }],
            ['emoji', ,
                "code-block"]
        ],
        'emoji-toolbar': true,
        'emoji-textarea': true,
        'emoji-shortname': true,
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align",
        "size",
        "font",
        "emoji",
        "code-block"
    ];

    const saveEditorContent = () => {
        setEditorHtml(code)
    }

    const [code, setCode] = useState("hellllo");
    const handleProcedureContentChange = (content, delta, source, editor) => {
        setCode(content);

        //let has_attribues = delta.ops[1].attributes || "";
        //console.log(has_attribues);
        //const cursorPosition = e.quill.getSelection().index;
        // this.quill.insertText(cursorPosition, "★");
        //this.quill.setSelection(cursorPosition + 1);
    };

    return (
        <>
            {console.log(code)}
            <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={code}
                onChange={handleProcedureContentChange}
            />
            <button onClick={saveEditorContent}>Save</button>
        </>
    );
}

export default QuillEmojiEditor;