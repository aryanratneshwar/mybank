import { useState } from "react";
import React from 'react'
import { useHistory } from "react-router-dom";
import firebaseDb from './Firebase'
//import { Redirect } from 'react-router-dom'
const Moneytransfer = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({
        from: "",
        to: "",
        money: ""



    });
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;

        value = event.target.value;

        setUserData({ ...userData, [name]: value });


    };
    // const submitButton = async (event) => {
    //     event.preventDefault();
    //     const { from,
    //         to,
    //         money } = userData;
    //         if(money<1)
    //         {                setUserData({

    //             money: ""
    //         });
    //         alert("Fill the Valid Value")
    //     }



    //     else if (from &&
    //         to &&
    //         money) {




    //            firebaseDb.child('User').orderByChild('Name').equalTo(from).once("value",snapshot => {
    //             if (snapshot.exists()){
    //                 firebaseDb.child('User').orderByChild('Name').equalTo(to).once("value",snapshot => {
    //                     if (snapshot.exists()){



    //     const res = fetch(
    //             "https://spark-bank-a9c51-default-rtdb.firebaseio.com/Transactions.json",
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     from,
    //                     to,
    //                     money
    //                 })
    //             }
    //         );

    //         if (res) {
    //             setUserData({
    //                 from: "",
    //                 to: "",
    //                 money: ""
    //             });

    //             // alert("Money Transfer");

    //                 history.push('/transferhistory');
    //         }
    //         else {
    //             setUserData({
    //                 from: "",
    //                 to: "",
    //                 money: ""
    //             });
    //             alert("Fill the correct Data")
    //         }
    //     }
    //         else{
    //             setUserData({

    //                 to: ""

    //             });
    //             alert("The Reciver Doesn,t Exist");
    //         }
    //     });






    //     }
    //     else{
    //         setUserData({
    //             from: ""
    //         });
    //         alert("The Sender Doesn't Exist");
    //     }
    // });








    //     }









    //     else{
    //         setUserData({
    //             from: "",
    //             to: "",
    //             money: ""
    //         });
    //         alert("Fill the Data completely")
    //     }
    // }
    const submitButton = async (event) => {
        event.preventDefault();
        const { from,
            to,
            money } = userData;
        if (money < 1) {
            setUserData({
                money: ""
            });
            alert("Fill the Valid Value")
        }



        else if (from &&
            to &&
            money) {
            firebaseDb.child('User').orderByChild('Name').equalTo(from).once("value", snapshot => {
                if (snapshot.exists()) {
                    firebaseDb.child('User').orderByChild('Name').equalTo(to).once("value", snapshot => {
                        if (snapshot.exists()) {

                            firebaseDb.child('User').child(from).child('Balance').once("value").then(data => {
                                if (data.val() !== null) {
                                    if (data.val() >= money) {
                                        const res = fetch(
                                            "https://spark-bank-a9c51-default-rtdb.firebaseio.com/Transactions.json",
                                            {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify({
                                                    from,
                                                    to,
                                                    money
                                                })
                                            }
                                        );
                                        if (res) {
                                            setUserData({
                                                from: "",
                                                to: "",
                                                money: ""
                                            });
                                            firebaseDb.child('User').child(to).child('Balance').once("value").then(data1 => {
                                                if(data1.val() !== null){
                                            let from_money = data.val() - money;
                                            let to_money = +(data1.val()) + +(money);
                                            alert("Money Transfer");
                                            firebaseDb.child('User').child(from).update({'Balance': from_money});
                                            firebaseDb.child('User').child(to).update({'Balance': to_money});
                                                }
                                        });
                                            history.push('/transferhistory');
                                        }
                                        else {
                                            setUserData({
                                                from: "",
                                                to: "",
                                                money: ""
                                            });
                                            alert("Fill the correct Data");
                                        }
                                    }
                                    else {
                                        
                                        alert("Sende's Balance is less ");
                                    }
                                }
                            });

                        }
                        else {
                            setUserData({
                                from: "",
                                to: "",
                                money: ""
                            });
                            alert("The Receiver Doesn't Exist ");
                        }
                    });
                }
                else {
                    setUserData({
                        from: "",
                        to: "",
                        money: ""
                    });
                    alert("The Sender Doesn't Exist");
                }

            });
        }
        else {
            setUserData({
                from: "",
                to: "",
                money: ""
            });
            alert("Fill the Data completely")
        }
    }

    return (

        <div className="forms">
            <h1> Transfer money to your family and friends</h1>
            <form method="POST">
                <label className="lable">
                    <h2>From:</h2>
                    <input type="text" name="from" id="name1" placeholder="Enter The Sender Name" value={userData.from} onChange={postUserData} />
                </label>

                <label className="lable">
                    <h2>To:</h2>
                    <input type="text" name="to" id="name2" placeholder="Enter The Reciever Name" value={userData.to} onChange={postUserData} />
                </label>

                <label className="lable">
                    <h2>Transfered Amount:</h2>
                    <input type="number" name="money" id="email" placeholder="Enter the amount" value={userData.money} onChange={postUserData} />
                </label>



                <button className="submit" onClick={submitButton}>Submit</button>
            </form>
        </div>
    );
}

export default Moneytransfer;