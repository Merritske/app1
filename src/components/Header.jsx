import logo from "../images/logoVO.png"
function Header(){
    return (
        <div className="header">
            
        <img className="logo" src={logo} alt="logo" />
        <h1 className="header-title">Girls just wanna have fun! </h1>
<nav>
    <ul className="nav--list">
        <li>Going on holliday</li>
        <li>Quotes</li>
        <li>Jokes</li>
    </ul>
</nav>


   </div> )
}
export default Header