function CardImage(props) {
    return (
        <div className="img-container">
            <img src={props.source} alt="No images left to display" width='100%' height={500}></img>
        </div>
    );
}

export default CardImage;