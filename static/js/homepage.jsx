"use strict";

function Homepage() {
  return (

    <React.Fragment> 
     <div>
      <p>Welcome to my page</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src= "/static/img/merge.jpg" />
      </div>
      </React.Fragment>


  // below code also works but it will liter our code with div everywhere so we use the above code with REACT Fragment
   /*  <div>
      <p>Welcome to my page</p>
      <a href="/cards">Click here to view the trading cards.</a>
      <img src= "/static/img/merge.jpg" />
    </div> */
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
