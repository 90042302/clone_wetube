import User from "../models/User";
import bcrypt from "bcrypt";


export const getJoin = (req, res) => res.render("join", {pageTitle : "join"});
export const postJoin = async (req, res) => {
    console.log(req.body);
    const { name, username, email, password, password2, location } = req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(400).render("join", { pageTitle, 
        errorMessage:"✔패스워드가 일치하지 않습니다"});
    } //라턴을 해주지 않으면 코드가 계속됨!! (주의)
    const exists = await User.exists({$or:[{username},{email}]});
    if(exists){
        return res.status(400).render("join", { pageTitle, 
        errorMessage:"이미 사용중인 ✔username OR ✔email 입니다."});
    }
    try{
    await User.create({
        name, 
        username, 
        email, 
        password,
        location,
    });
    return res.redirect("/login");
    } catch(error) {
        return res.status(400).render("join",{ 
            pageTitle: "join", 
            errorMessage:error._message,
        });
    }
}

export const getLogin = (req, res) => res.render("login",{pageTitle:"Login"});


export const postLogin = async(req, res) => {
    const { username, password } = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({ username });
    if(!user){
        return res
        .status(400)
        .render("login",
        {pageTitle,
        errorMessage:"입력한 username을 가진 User가 존재하지 않습니다"});
    }
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){

        return res
        .status(400)
        .render("login",
        {pageTitle,
        errorMessage:"잘못된 password입니다."});
    }
    
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
};


export const edit = (req, res) => res.send("Edit⛏🪓🔨🔧");
export const remove = (req, res) => res.send("Remove User❌🔙🔙🔚🔚");
export const logout = (req, res) => res.send("LogOut🖐🏻");
export const see = (req, res) => res.send("See User😎😋");