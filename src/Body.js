import yahoo from './Images/yahoo.png';
import Image from './Images/sbi.jpeg';
export default function Body() {

    return (
        <div id="body-div">
            <div id="body-div-1">
                <img src={Image} alt="sbi-pic"></img><br />
                <h1>Lowest premiums with SBI Life - eWealth...</h1>
                <p>Get life insurance cover along with wealth creation. choose funds of your choice<br /> with SBI life - eWealth insurance. premiums staring  @ Rs. 2500/month</p>
                <button id='learn-btn'>Learn More</button>
                <div>
                    <p style={{float:"right"}}>Ad . SBI life insurance <i class="bi bi-three-dots-vertical"></i></p>
                </div>
            </div>
            <div id="body-div-2">
                <div id='logo-div'>
                    <img src={yahoo} alt="yahoo-pic"></img>
                </div>
                <div>
                    <div id='form-heading'>
                        <strong>Sign in to Yahoo Mail</strong><br />

                        <span>Sign in using your Yahoo account</span>
                    </div>
                    <div id='form-div'>
                        <form>
                            <div id='input-wrap'>
                            <input id="input-1" type="text" placeholder="" /><label>Username , email address or phone number</label><br />
                            <hr id='line' />
                            </div>
                            <button id='input-btn'>Next</button>
                            <div id='checkbox'>
                                <div>
                                    <input type="checkbox" />
                                    <label>&nbsp;Stay signed in </label>
                                </div>
                                <div>
                                    <a style={{textDecoration:"none" ,color:"#188fff"}} href='https//google.com'>Forgotten username?</a>
                                </div>
                            </div>
                            <div>
                                <p>
                                    <button id='btn-2'><a href='https//google.com'>Create an account</a></button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
