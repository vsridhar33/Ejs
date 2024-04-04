const { login, registration, homepage,productlisting,product_detailspage,cart_page } = require("./services");
const jwt = require("jsonwebtoken");

const secretkey = "fjsnfyjhbklnlhuvflnik";
function access(req, res, next) {
  console.log(req.headers["authorization"]);
  token = req.headers["authorization"];
  if (!token) return res.status(401).send("access denied no token provided");
  let tkn = token.split(" ")[1];
  try {
    const decoded = jwt.verify(tkn, secretkey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send("token invalid");
  }
}

module.exports = {
  Registration1: (req, res) => {
    const data = req.body;
    console.log(data);
    registration(data, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: error,
        });
      }
      res.render("login.ejs");
    });
  },
  Registration: (req, res) => {
    res.render("registration.ejs");
  },

  login1: (req, res) => {
    const data = req.body;

    login(data, (error, result) => {
    let login1=true;
    if(login1==false){
      res.render("login.ejs",{message:"login failed",login1})
    }
    homepage(data,(error,result)=>
    { let data=[];
      result.forEach((d)=>{
        data.push({
          id:d.id
          
        });
      });console.log(result);
         res.render("home.ejs",{data:result});
    });
     }) },
     
     login: (req, res) => {
    res.render("login.ejs");
  },

 Homepage1:(req,res)=>{
        const data=req.body;
        homepage(data,(error,result)=>{
            if(error){
                console.log("homepage");
                return res.status(500).json({message:error});
            }
            res.render("login.ejs",{data:result});
        });
        },
    Homepage: (req, res) => {
      res.render("home.ejs");
    },
    ProductListing1:(req,res)=>{
      
      const data=req.body;
      productlisting(data,(error,result)=>{
        console.log(result)
        
        let data=[];
        result.forEach((d)=>{
          data.push({
           id:d.id,
           category:d.category,
           category_type:d.category_type,
           is_deleted:d.is_deleted,
           created_at:d.created_at,
           updated_at:d.updated_at,
           category_id:d.category_id
          });
        });
        console.log(data);
        res.render("prlist.ejs",{data:result});
         // if(error){
              
             // return res.status(500).json({message:error});
          //}console.log(result);
          //res.render("login.ejs",{result:result});
      //});
})},
  ProductListing: (req, res) => {
    res.render("prlist.ejs");
  },
  ProductDetailsPage1: (req, res) => {
    const data = req.body;
    product_detailspage(data, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: error,
        });
      }
      console.log(result)
      res.render("login.ejs");
    });
  },
  ProductDetailsPage: (req, res) => {
    res.render("prdetails.ejs");
  },
  CartPage1: (req, res) => {
    const data = req.body;
    cart_page(data, (error, result) => {
      if (error) {
        return res.status(500).json({
          message: error,
        });
      }
      console.log(result)
      res.render("login.ejs");
    });
  },
  CartPage: (req, res) => {
    res.render("CartPage.ejs");
  },
}
