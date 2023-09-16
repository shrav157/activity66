const Login=()=>{
    return(
        <>
        <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <img src="https://source.unsplash.com/random/1920x1080/?icecream,Food" class="card-img-top" alt="..."/>
            <h1 class="card-title text-center">Login</h1>
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
              </div>
              <button type="submit" class="btn btn-warning"><a href="Home.html">Login</a></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div></>
    )
}
export default Login;