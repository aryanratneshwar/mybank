import Card from "./card";
import Customer from "./customer.png";
import Money from "./banktransfer.jpg";
import History from "./tran.png";
const service = () => {
 
    return (  
        <div>
     <div className="service">
         <h1 >Our services</h1>
     </div>
     <div className ="card">
    <Card className="cardclass cardclass1" title="All Customers" imageUrl={Customer} link="/customerlist"/>
    <Card className="cardclass  cardclass1" title="Transfer Money"  imageUrl={Money} link="/moneytransfer"/>
    <Card className="cardclass cardclass3" title="Transfer History"  imageUrl={History} link="/transferhistory"/>
     </div>
     </div>

    );
    }
 
export default service;