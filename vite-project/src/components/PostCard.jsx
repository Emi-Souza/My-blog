import React from 'react'

export default function PostCard({post}){
  return (
    <article className="post-card">
      <img src={post.image} alt="" className="post-image" />
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">{post.date} • {post.readTime} min leitura</div>
      </div>
    </article>
  )
}
