import React, { useState } from 'react'
import useSWR from 'swr';

export default function CreatePost() {


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState(false);
    const [authorId, setAuthorId] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              title,
              content,
              published,
              authorId,
            }),
          });
    
          if (!response.ok) {
            throw new Error('Error creating post');
          }
    
          const data = await response.json();
          console.log('Post created:', data);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };



    return (
        <div>
            <input type='text' />
            <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />

        <label>Published:</label>
        <input type="checkbox" checked={published} onChange={() => setPublished(!published)} />

        <label>Author ID:</label>
        <input type="text" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
            {/* <button onClick={handleSubmit}> submit </button> */}
        </div>
    )
}
