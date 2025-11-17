import './Navbar.css'
import './Blog.css'

export default function Navbar(){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">Meu Blog</h1>
        <nav className="nav">
          <a href="#home">Início</a>
          <a href="#posts">Posts</a>
          <a href="#about">Sobre</a>
        </nav>
      </div>
    </header>
  )
}
