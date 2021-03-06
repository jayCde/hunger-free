import axios from 'axios';
import Head from 'next/head';
import Link from 'next/Link';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import { Redirect } from "react-router-dom";
import styles from '../../styles/login.module.css';
import { API_BASE_URL, API_PORT} from '../../../config';
import isAlphanumeric from 'validator/lib/isAlphanumeric';



export default function Login(){

    //Using react hooks

    const { 
        register, errors, watch,
          handleSubmit = async (e) => {
            {e.preventDefault}
          }  
        } = useForm ();

    //Endpoint(s) and url(s)

    const endpoint = 'admin';
    const adminurl = `${API_BASE_URL}:${API_PORT}/${endpoint}`;

    //Handle form data for login
    const onSubmit = ( data = {username, password}) =>{
        console.log('data is', data)
        axios.get(adminurl, {
            username: data.username,
            password: data.password
        }).then (resp =>{

            //If user credentials are correct and login successful
            if (resp.status == 200){
                window.location="admindashboard";
                alert("Login Successful")
                console.log(resp.data)
                localStorage.setItem('admin', JSON.stringify(resp.data))
            }else{
                //if user credentials are inccorect and login unsuccessful
                window.location.href="login";
                console.log(resp.data);
            }
        }).catch(err =>{
            console.log("An error occurred while logging in", err)
            alert("Kindly enter valid credentials")
        })
        console.log(data)
    }

    //watch errors in form fields
    console.log(watch('username', 'password'));
    console.log(errors.username, errors.password)
 

    return(

        <div className={styles.container}>
            <Head>
                <title>Hunger-Free kids :: Admin Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className={styles.main}>
            <img src="/Picture1.png" alt="logo" style={{position:"absolute", top:"5%", width:"50px", height:"50px"}}/>
        

                <div className={styles.card}>
                    <h3>
                        Enter administrator credentials below to login
                    </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input  type="text" 
                                className={styles.InputField}
                                placeholder="Administrator Username"
                                name="username"
                                id="username"
                                ref={register({required: true, minLength: 8,
                                    validate: (input) => isAlphanumeric (input)
                                })}
                        />
                        {errors.username && <span className={styles.errors}>Kindly enter a valid username</span> } <br/>
                        <br></br>

                        <br></br>

                        <input type="password" 
                                className={styles.InputField}
                                placeholder="Administrator Password"
                                name="password"
                                id="password"
                                ref={register({required: true, minLength: 8,
                                    validate: (input) => isAlphanumeric (input)
                                })}
                        />
                        {errors.password && <span className={styles.errors}>Kindly enter a valid password</span> } <br/>
                        <br></br>
                        
                        <center>
                            <button type="submit" value="submit" className={styles.loginbtn}>Login</button>
                        </center>

                    </form>

                    <br></br>

                    <a href="/" className={styles.homelnk}>Home</a>
                </div>
            </main>

            <footer className={styles.footer}>
                &#169; The Healthy, Hunger-Free kids - 2021.
            </footer>
        </div>
    )
}