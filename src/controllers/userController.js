import User from "../models/User";


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

    await User.create({
        name, 
        username, 
        email, 
        password,
        location,
    });
    return res.redirect("/login");
}
export const edit = (req, res) => res.send("Edit⛏🪓🔨🔧");

export const remove = (req, res) => res.send("Remove User❌🔙🔙🔚🔚");

export const login = (req, res) => res.send("Login🚀");

export const logout = (req, res) => res.send("LogOut🖐🏻");

export const see = (req, res) => res.send("See User😎😋");