class Error {
  render() {
    const html = ` 
            <div class= "error-container">                            
                <div class = "error-massage">
                <h1>No access</h1>
                <p>Try later</p>            
                </div>
            </div>
        
        `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
