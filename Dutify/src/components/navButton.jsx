import "./styles/navButtonStyle.css"

function NavButton(props) {
    return (
        <a className="navButton fs-5">
            {props.texto}
        </a>
    )
}

export default NavButton