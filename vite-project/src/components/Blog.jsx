import React from 'react'
import posts from '../data/posts'
import PostCard from './PostCard'
import './Blog.css'

export default function Blog(){
  return (
    <main className="container blog-root" id="posts">
      <section className="hero">
        <h2 className="hero-title">Power Food</h2>
        <p className="hero-sub">Comer saudável é o segredo para ter mais energia, 
            mais sabor e um estilo de vida que transforma resultados.</p>
      </section>

      <section className="posts-grid">
        {posts.map(p => (
          <PostCard key={p.id} post={p} />
        ))}
      </section>
    </main>
  )
}
