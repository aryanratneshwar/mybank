import Service from "./ourservices";
const home = () => {
    return ( 
        <div>
        <div className=" home">
        <h1 className="homeh1">Welcome to the Homepage of the Spark Bank <p></p></h1>
        <img className="homeicon"src="https://onlinedigitalsevakendra.in/Content/HomePage/images/moneyTransfer%20Home.png" alt="" />
        
        </div>
        <div>
        <Service></Service>
        </div>
        </div>
        

     );
}
 
export default home;