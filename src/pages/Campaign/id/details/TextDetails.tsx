import { useState, useEffect } from 'react'
import MarkdownEditor from '@uiw/react-markdown-editor'

interface TextDetailsProps {
    content: string;
}

export default function TextDetails({ content }: TextDetailsProps) {
    const [markdownVal, setMarkdownVal] = useState(content)

    useEffect(() => {
        setMarkdownVal(content)
    }, [content])


    return (
        <MarkdownEditor
            value={markdownVal}
            onChange={(value) => { console.log(value); setMarkdownVal(value) }}
            className='markdown-editor'
        />
    )
}
