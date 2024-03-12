import React from 'react'


function Erro() {
  return (
    <div class="wrapper">
    <div class="main">
      <h2>Main content</h2>
      <p>Scroll down the page!</p>
      <h3>How to recreate this</h3>
      <p>
        Position the columns with flex. Then apply two lines of CSS to the sidebar to make it sticky:
        <pre>
            <code>
                position: sticky;<br />
                top: 0;
            </code>
      </pre>
      Include <code>position: -webkit-sticky;</code> for Safari.
      </p>
    </div>
  
    <div class="sidebar">
      <h3>Sticky sidebar</h3>
      <p>I will follow you!</p>
   
    </div>
  </div>
  )
}

export default Erro