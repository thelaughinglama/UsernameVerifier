//supported sites: GITHUB HACKERRANK CODEFORCE HACKEREARTH TOPCODER CODECHEF
// const title = "prashant"

const express=require('express');
const path=require('path');
const bodyParser=require('body-parser')
const exphbs=require('express-handlebars')
const rp = require('request-promise');
const cheerio = require('cheerio');
const app=express();
var github,codechef,topcoder,hackerearth,codeforce,hackerrank;

//handlebars
app.engine('handlebars',exphbs({

    defaultLayout:'main'
}))

app.set('view engine','handlebars');


app.get('/',async function(req,res){
if(req.query.username==null){
res.render('index')}
else{title=req.query.username;
  await script(title)
  setTimeout(() => {
    res.render('result' ,{hackerrank:hackerrank,hackerearth:hackerearth,codechef:codechef,github:github,codeforce:codeforce,topcoder:topcoder

    }
)
  }, 6000);
  
}
});
async function script(title){



const optionsHACKER = {  
    uri: `https://hackerrank.com/${title}`,
    transform: function (body) {
        return cheerio.load(body);
    }
};
const optionsCHEF = {
    uri: `https://www.codechef.com/users/${title}`,
    transform: function (body) {
        return cheerio.load(body);
    },
    headers: {
        // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        // "Accept-Encoding": "gzip, deflate, br",
        // "accept-language": "en-US,en;q=0.9,ko;q=0.8",
        // "cache-control": "no-cache",
        // "pragma": "no-cache",
        
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
      }
};
const optionsEARTH = {
    uri: `https://www.hackerearth.com/@${title}`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

const optionsFORCE = {
    uri: `https://www.codeforces.com/profile/${title}`,
    transform: function (body) {
        return cheerio.load(body); 
    }
};
const optionsTOPCODER= {
    uri: `https://topcoder.com/members/${title}`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

const optionsGIT = {
    uri: `https://www.github.com/${title}`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

  rp(optionsHACKER)
    .then(($) => {
        var x = $('.profile-heading').text()
        if (!x) {
            console.log("nottaken hackerrank")
            hackerrank=0;
        }  
        else{console.log('taken hackerrank')
        hackerrank=1;}
       
    }) 
    .catch((err) => {
        console.log('nottaken hackerrank');
hackerrank=0;

    }).then(
        rp(optionsGIT)
            .then(($) => {
               console.log('taken github')
               github=1;
            })
            .catch((err) => {
                console.log('not taken git hub');
        
        github=0;
          })
        ).then(
            rp(optionsFORCE)
                .then(($) => {
               if($('.userbox').html()==null){
                   console.log('user not found codeforces')
                   codeforce=0;
               }
                    else{
                    console.log("username taken codeforce");
                codeforce=1}

                    // console.log('codeforce:'+$('.userbox').html());}
                })
                .catch((err) => {
                console.log('error');
            
            
                })).then(


                    rp(optionsEARTH)
                        .then(($) => {
                    //   if($('title').text()==`  ${title} (${title})'s Developer Profile | HackerEarth  `)
                      //Prashant (Prashant)'s Developer Profile | HackerEarth
                            
                          console.log('taken hackerearth');
                          hackerearth=1;
                      
                    //   else{ 
                    //       console.log(';(')
                      
                        })
                        .catch((err) => {
                           if(err){
                               console.log('nottaken hackerearth');
                               hackerearth=0;
                           }
                    
                        })
                      ).then(
                        rp(optionsTOPCODER)
                            .then(($) => {
                                
                                console.log('taken topcoder');
                                topcoder=1;
                            })
                            .catch((err) => {  
                            
                        
                        if(err){
                        console.log('not taken topcoder');
                    topcoder=0;}
                            })).then( rp(optionsCHEF)
                            .then(($) => {
                         console.log('user found codechef')
                         codechef=1
                            })
                            .catch((err) => {
                            console.log("username avail codechef");
                        
                        codechef=0
                            }))
                



  
// app.listen(2300,console.log("ddd"))}




      //   return  await hackerrank;
       
           

                
   
}
const port=5300;
app.listen(port,()=>{
    console.log(`started server on port 5300 `)
})

// const optionsHACKER = {  
//     uri: `https://hackerrank.com/${title}`,
//     transform: function (body) {
//         return cheerio.load(body);
//     }
// };

// rp(optionsHACKER)
//     .then(($) => {
//         var x = $('.profile-heading').text()
//         if (!x) {
//             console.log("nottaken hackerrank")
//         }
//         else{console.log('taken hackerrank')}
       
//     }) 
//     .catch((err) => {
//         console.log('nottaken hackerrank');


//     });


// const optionsGIT = {
//     uri: `https://www.github.com/${title}`,
//     transform: function (body) {
//         return cheerio.load(body);
//     }
// };

// rp(optionsGIT)
//     .then(($) => {
//        console.log('taken github')
//     })
//     .catch((err) => {
//         console.log('not taken git hub');


//   });


  
// // app.listen(2300,console.log("ddd"))}
// const optionsFORCE = {
//     uri: `https://www.codeforces.com/profile/${title}`,
//     transform: function (body) {
//         return cheerio.load(body); 
//     }
// };

// rp(optionsFORCE)
//     .then(($) => {
//    if($('.userbox').html()==null){
//        console.log('user not found codeforces')
//    }
//         else{
//         console.log("username taken codeforce");}
//         // console.log('codeforce:'+$('.userbox').html());}
//     })
//     .catch((err) => {
//     console.log('error');


//     });


//     const optionsEARTH = {
//         uri: `https://www.hackerearth.com/@${title}`,
//         transform: function (body) {
//             return cheerio.load(body);
//         }
//     };
    
//     rp(optionsEARTH)
//         .then(($) => {
//     //   if($('title').text()==`  ${title} (${title})'s Developer Profile | HackerEarth  `)
//       //Prashant (Prashant)'s Developer Profile | HackerEarth
            
//           console.log('taken hackerearth');
      
//     //   else{ 
//     //       console.log(';(')
      
//         })
//         .catch((err) => {
//            if(err){
//                console.log('nottaken hackerearth');
//            }
    
//         });
//         const optionsTOPCODER= {
//             uri: `https://topcoder.com/members/${title}`,
//             transform: function (body) {
//                 return cheerio.load(body);
//             }
//         };
        
//         rp(optionsTOPCODER)
//             .then(($) => {
                
//                 console.log('taken topcoder');
//             })
//             .catch((err) => {
            
        
//         if(err){
//         console.log('not taken topcoder');}
//             });


//             const optionsCHEF = {
//                 uri: `https://www.codechef.com/users/${title}`,
//                 transform: function (body) {
//                     return cheerio.load(body);
//                 },
//                 headers: {
//                     // "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//                     // "Accept-Encoding": "gzip, deflate, br",
//                     // "accept-language": "en-US,en;q=0.9,ko;q=0.8",
//                     // "cache-control": "no-cache",
//                     // "pragma": "no-cache",
                    
//                     "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36"
//                   }
//             };
            
//             rp(optionsCHEF)
//                 .then(($) => {
//              console.log('user found codechef')
//                 })
//                 .catch((err) => {
//                 console.log("username avail codechef");
            
            
//                 });

                
//     const optionsLINKEDIN = {
//         uri: `https://www.linkedin.com/in/${title}`,
//         transform: function (body) {
//             return cheerio.load(body);
//         },
//         headers: {
//             "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//             "Accept-Encoding": "gzip, deflate, br",
//             "accept-language": "en-US,en;q=0.9,ko;q=0.8",
//             "cache-control": "no-cache",
//             "pragma": "no-cache",
            
//             "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36"
//           }
//     };

    
  

         
    













