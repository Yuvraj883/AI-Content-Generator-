import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/react-editor'
import { Copy } from 'lucide-react';

function OutputSection() {
  const editorRef = useRef(null);
  return (
    <div className='col-span-2 mt-8 flex flex-col px-2 '>
      <section className='flex justify-between px-4 py-2 shadow-md items-center bg-white rounded-sm '>
        <h1 className='font-medium text-lg '>Result</h1>
        <button className='flex items-center px-3 rounded-md py-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold'><Copy/> Copy </button>
      </section>
      <Editor
        ref= {editorRef}
        initialValue='The result will appear here!!'
        previewStyle='vertical'
        height='540px'
        initialEditType='wysiwyg'
        useCommandShortcut={true}

      />
    </div>
  )
}

export default OutputSection
