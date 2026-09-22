function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <img className="logo-icon" src="#" alt="Logo" />
            <span className="logo-text">Studio Alfa</span>
        </div>
        <nav className="nav">
            <a href="#">Início</a>
            <a href="#">Serviços</a>
            <a href="#">Sobre</a>
            <a href="#" className="btn-contatos">Contato</a>
        </nav>
    </header>
  );
}

export default Header