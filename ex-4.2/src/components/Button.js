
function Button(props) {
  return (
    <a href={props.site}><button style={props.style}>{props.text}</button></a>
  );
}

export default Button;