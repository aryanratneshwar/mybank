import { useHistory } from "react-router";
const Card = ({className,title,imageUrl,link}) => {
    const history =useHistory();
    return (
        <div className={ className }>
            <img  onClick = { ()=> history.push(link)} className="imgour" src={imageUrl} alt="notloaded" />
           <a href={link}>{title}</a>
        </div>
     );
}
 
export default Card;