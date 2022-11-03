export const trending = (req, res) => res.render("home",{pageTitle : "Home"});
//render에서 첫번째 인수는 파일의 이름임(home.pug) / 두번째 인수는 원하는 만큼의 변수를 가질 수 있는 오브젝트

export const see = (req, res) => res.render("watch", {pageTitle : "Watch"});


export const edit = (req, res) => res.render("edit", {pageTitle : "Edit"});



export const search = (req, res) => res.send("Search🔎🔎");

export const upload = (req, res) => res.send("Upload");

export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("Delete Video");
};