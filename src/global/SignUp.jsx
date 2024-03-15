import React from "react";

function SignUp() {
  const [alert, setalert] = React.useState(false);
  const handleclick = (e) => {
    e.preventDefault();
    setalert(true);
    setTimeout(() => {
      setalert(false);
    }, 3000);
  };
  return (
    <div
      className=" background-login  w-100 "
      style={{
        backgroundImage: 'url("./loginImg.jpg")',
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="W-100 postion-relative h-100 d-flex justify-content-center align-items-center filter ">
  
      <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password"/>
        </div>
         <button onClick={handleclick} type="submit" class="submit">
        Sign in
      </button>

    
   </form>

        {alert && (
          <div
            style={{ transform: "translate(50%, 50%)" }}
            class="alert alert-danger text-center showALer text-capitalize top-50 position-absolute  end-50"
            role="alert"
          >
            login functionality is not available yet :( 
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
