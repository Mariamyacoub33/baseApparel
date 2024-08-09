import './Infowraper.css';
import Logo from '../Logo/Logo' ;


function Infowraper (){
    return(
    
        <div id='Infowraperdiv'>
        <Logo></Logo>
<div id='Bottomdiv'>
<h1> WE'RE </h1>
<h2>COMING SOON</h2>
<p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
<div class="email-input-container">
<div id='buttondiv'>
  <input type="text" id="email" name="email" placeholder="janeappleseed#email.com"/>
  <button type="submit"><span class="arrow-right"></span></button>
  </div>
  <p class="error-message">Please provide a valid email</p>
</div>
</div>
        </div>
    )
}

export default Infowraper