import React, { useRef, useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy, Check } from 'lucide-react';

interface PROPS {
  aiOutput: string | undefined;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef?.current?.getInstance();
    if (editorInstance) {
      editorInstance.setMarkdown(aiOutput || '');
    }
  }, [aiOutput]);

  // Copy to Clipboard Function
  const handleCopy = () => {
    if (!aiOutput) return;
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 sec
  };

  return (
    <div className="col-span-2 mt-8 flex flex-col px-2 h-full ">
      {/* Header Section */}
      <section className="flex justify-between px-6 py-3 shadow-md items-center bg-white rounded-lg border border-gray-200">
        <h1 className="font-semibold text-lg text-gray-800">Result</h1>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-{#9775fa} hover:bg-[#555e2e] text-white font-semibold transition-all"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </section>

      {/* Editor Section */}
      <Editor
        ref={editorRef}
        initialValue="The result will appear here!!"
        previewStyle="vertical"
        height="550px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        className="mt-4 border border-gray-300 shadow-md rounded-lg"
      />
    </div>
  );
}

export default OutputSection;
