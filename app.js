//supported sites: GITHUB HACKERRANK CODEFORCE HACKEREARTH TOPCODER CODECHEF
// const title = "prashant"

const express=require('express');
const path=require('path');
const bodyParser=require('body-parser')
const exphbs=require('express-handlebars')
const rp = require('request-promise');
const cheerio = require('cheerio');
const app=express()

async  function ufind(title){
  

const optionsHACKER = {
uri: `https://hackerrank.com/${title}`,
transform: function (body) {
  return cheerio.load(body);
}
};

rp(optionsHACKER)
.then(($) => {
  var x = $('.profile-heading').text()
  if (!x) {
  console.log('not taken hackerrank')

  }
  else{
      console.log('taken hackerrank')
}
 
})
.catch((err) => {
  console.log('nottaken hackerrank');


});


const optionsGIT = {
uri: `https://www.github.com/${title}`,
transform: function (body) {
  return cheerio.load(body);
}
};

rp(optionsGIT)
.then(($) => {
 console.log('taken github')
 var github="okkok"
})
.catch((err) => {
  console.log('not taken github');


});



// app.listen(2300,console.log("ddd"))}
const optionsFORCE = {
uri: `https://www.codeforces.com/profile/${title}`,
transform: function (body) {
  return cheerio.load(body);
}
};

rp(optionsFORCE)
.then(($) => {
if($('.userbox').html()==null){
 console.log('user not found codeforces')
}
  else{
  console.log("username taken codeforce");}
  // console.log('codeforce:'+$('.userbox').html());}
})
.catch((err) => {
console.log('error');


});


const optionsEARTH = {
  uri: `https://www.hackerearth.com/@${title}`,
  transform: function (body) {
      return cheerio.load(body);
  }
};
 
rp(optionsEARTH)
  .then(($) => {
//   if($('title').text()==`  ${title} (${title})'s Developer Profile | HackerEarth  `)
//Prashant (Prashant)'s Developer Profile | HackerEarth
      
    console.log('taken hackerearth');

//   else{ 
//       console.log(';(')

  })
  .catch((err) => {
     if(err){
         console.log('nottaken hackerearth');
     }

  });
  const optionsTOPCODER= {
      uri: `https://topcoder.com/members/${title}`,
      transform: function (body) {
          return cheerio.load(body);
      }
  };
  
  rp(optionsTOPCODER)
      .then(($) => {
          
          console.log('taken topcoder');
      })
      .catch((err) => {
      
  
  if(err){
  console.log('not taken topcoder');}
      });


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
      
      rp(optionsCHEF)
          .then(($) => {
       console.log('user found codechef')
      
          })
          .catch((err) => {
                          console.log("username avail codechef");
          console.log(codechef)
      
      
          });

          
const optionsLINKEDIN = {
  uri: `https://www.linkedin.com/in/${title}`,
  transform: function (body) {
      return cheerio.load(body);
  },
  headers: {
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9,ko;q=0.8",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.94 Safari/537.36"
    }
};
return await Promise.resolve(github);
}
app.get('/',(req,res)=>{

    if(!req.query.username){
        res.render('index')
    }
    else{var title=req.query.username;
       ufind(title).then(
        res.render('result',{
            github:github
        })
    )
    }
})

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }));
  
  app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


const port=5400
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
  });



// //user verifier script
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
//         console.log('not taken github');


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
    
  

         














