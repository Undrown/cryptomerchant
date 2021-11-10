import logoFront from './logo-front.png'
import './Logo.css'

const Logo = () => {
    return (<a href={'/'}><div className="Logo">
        <img src={logoFront} alt='logo'/>
    </div></a>);
}

export default Logo