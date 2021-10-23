import React from "react";
import { useState, useEffect } from "react";
import firebaseDb from "./Firebase";
function Transfertable () {

    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('Transactions').on('value', snapshot => {
            if (snapshot.val() != null){
                setUserObjects({
                    
                    ...snapshot.val()
                })
            }
            else
                setUserObjects({})

        })
    }, []) 

    return (  
        <div className="customer">
            <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">From</th>
                           
                            <th scope="col">To</th>
                            
                            <th scope="col">Transfered Balance(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].from}</td>
                                   
                                    <td>{userObjects[id].to}</td>
                                    
                                    <td>{userObjects[id].money}₹</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <a href="/customerlist">View All Customers</a>
        </div>
    );
}
 
export default Transfertable;