import { useState, useRef } from "react"
import JoditEditor from "jodit-react"
const JoEditor = ({ setEditorContent }) => {

    const editor = useRef(null)

    const [value, setValue] = useState('');

    const contentFieldChanaged = (data) => {
        setValue(data)
    }
    const saveEditorContent = () => {
        setEditorContent(value)
    }

    return (
        <>
            <JoditEditor
                ref={editor}
                value={value}
                onChange={(newContent) => contentFieldChanaged(newContent)}
            />

            <button onClick={saveEditorContent}>Save</button>
        </>
    )
}

export default JoEditor