import './Header.css'

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className="logo">
            <img className="logo-icon" src="..\..\src\assets\Alfa-Romeo-Logo.png" alt="Logo" width="55px" height="30px" />
            <span className="logo-text">Studio Alfa</span>
        </div>
        <nav className="nav">
            <a href="#">Início</a>
            <a href="#">Serviços</a>
            <a href="#">Sobre</a>
            <a href="#" className="btn-contatos">Contato</a>
        </nav>
        </div>
    </header>
  );
}

export default Header