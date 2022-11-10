import Video from "../models/Video";


  // Video.find({},(error, videos) => {});   

  export const home = async(req, res) => {
    const videos = await Video.find({});
    //console.log(videos);
    return res.render("home", { pageTitle: "Home", videos});
    }; 



  export const watch = async(req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
    return res.render("404",{pageTitle:"Video not found"});
    }
    return res.render("watch", { pageTitle: video.title, video:video});
  };


  export const getEdit = async(req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if(!video){
      return res.render("404",{pageTitle:"Video not found"});
      }
      return res.render("edit", { pageTitle: `Edit⚙ ${video.title}`, video});
    };
  
    




  export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
  };

export const getUpload = (req, res) => {
    return res.render("upload",{ pageTitle: "Upload Video"});
};


export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
    title,
    description,
    //createdAt: Date.now(),
    hashtags : hashtags.split(",").map((word) => `#${word}`),
  });
  return res.redirect("/");
}   
//video 생성에 문제가 없으면 home으로 
catch (error)
  {
    return res.render("upload",{ pageTitle: "Upload Video", 
    errorMessage:error._message,});
  }
};
//오류가 있으면 upload를 다시 render

/*
export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body;
    const video = new Video({
      title,
      description,
      createdAt:Date.now(),
      hashtags : hashtags.split(",").map((word) => `#${word}`),
      meta : {
        views : 0,
        rating : 0,
      },
    });
    await video.save();

    return res.redirect("/");
};
*/






