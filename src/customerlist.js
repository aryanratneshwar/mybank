import React from "react";
import { useState, useEffect } from "react";
import firebaseDb from "./Firebase";
function Customerlist () {

    var [userObjects, setUserObjects] = useState({})
    useEffect(() => {
        firebaseDb.child('User').on('value', snapshot => {
            if (snapshot.val() != null)
                setUserObjects({
                    ...snapshot.val()
                })
            else
                setUserObjects({})

        })
    }, []) 

    return (  
        <div>
            <div className="link">List of Our Customers </div>
            <table >
                    <thead>
                        <tr>
                            {/* <th scope="col">S.No.</th> */}
                            <th scope="col">Name</th>
                           
                            <th scope="col">Email</th>
                            
                            <th scope="col">Balance(₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                            Object.keys(userObjects).map(id => {
                                return <tr key={id}>
                                    {/* <th scope="row"></th> */}
                                    <td>{userObjects[id].Name}</td>
                                   
                                    <td>{userObjects[id].Email}</td>
                                    
                                    <td>{userObjects[id].Balance}₹</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
    );
}
 
export default Customerlist;