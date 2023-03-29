import React from "react";
import "./App.css";
import DraftEditorPage from './pages/DraftEditorPage'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TinymceEditorPage from "./pages/TinymceEditorPage";
import QuillEditorPage from './pages/QuillEditorPage'
import JoditEditorPage from "./pages/JoditEditorPage";
import QuillVariantsEditorPage from "./pages/QuillVariantsEditorPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/editor/draft">React Draft</Link>
            </li>
            <li>
              <Link to="/editor/tinymce">Tinymce</Link>
            </li>
            <li>
              <Link to="/editor/ckeditor">CkEditor</Link>
            </li>
            <li>
              <Link to="/editor/quill">Quill Editor</Link>
            </li>
            <li>
              <Link to="/editor/jodit">Jodit Editor</Link>
            </li>
            <li>
              <Link to="/editor/quill-variant/:variant">Quill Editor Variants</Link>
            </li>
          </ul>
        </nav>
        <div className="main" id="page-body">
          <Routes>
            <Route path="/editor/ckeditor" element={<div> Work in Progress </div>} />
            <Route path="/editor/tinymce" element={<TinymceEditorPage />} />
            <Route path='/editor/draft' element={<DraftEditorPage />} />
            <Route path='/editor/quill' element={<QuillEditorPage />} />
            <Route path='/editor/quill-variant/:variant' element={<QuillVariantsEditorPage />} />
            <Route path='/editor/jodit' element={<JoditEditorPage />} />
            <Route path="/" element={<DraftEditorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}