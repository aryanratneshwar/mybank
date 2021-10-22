const Card = ({className,title,imageUrl,link}) => {
    return (
        <div className={ className }>
            <img className="imgour" src={imageUrl} alt="notloaded" />
           <a href={link}>{title}</a>
        </div>
     );
}
 
export default Card;