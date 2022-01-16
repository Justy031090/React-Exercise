
function Header(props) {
    return (
        <div className="headerContainer">
            <h2>{props.text}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Header;