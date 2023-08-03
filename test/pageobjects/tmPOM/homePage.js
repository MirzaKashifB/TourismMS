class homepage{
    
    get AdminLogin(){return $("=Admin Login")}
    get userLogin(){return $("=/ Sign In")}
    get signup(){ return $("//a[text()='Sign Up']")}

}
export default new homepage();