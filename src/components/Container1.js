import React from "react";
import ManSitting from "../assets/man-sitting.svg";

export default function Container1() {
    return (
        <div className="content-1-container">
                <div className="content-1-main">
                    <h1>Keep learning in the moments that matter</h1>
                    <form>
                    <p>By clicking Agree & join, you agree to the LinkedIn <a href="$">User Agreement</a>, <a href="$">Privacy Policy</a>, and <a href="$">Cookie Policy</a>
                        </p>

                        <br></br>
                        <button className="button agree-btn">Agree and Join</button>
                        <div className="hr-div">
                            <hr></hr>
                            <p>or</p>
                            <hr></hr>
                        </div>
                        <button className="button already-btn">Already on LinkedIn? <a href="$">Sign in</a></button>
                    </form>
                </div>
                <img src={ManSitting} alt="Man sitting and working" width="700" height="700" 
                
                style={{marginLeft:"50px"}}
                />
            </div>
    )
}