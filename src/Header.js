import yahoo from './Images/yahoo.png';
function Header() {
    return (
        <div id='header-div'>
            <div id='child-1'>
                <a href="https://in.yahoo.com/"><img src={yahoo} alt="web-pic"></img></a>
            </div>
            <div  id="child-2">
                <a  href="https://in.yahoo.com/"> Help</a>
            </div>

        </div >
    );
}

export default Header;