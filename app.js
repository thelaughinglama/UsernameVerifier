//supported sites: GITHUB HACKERRANK CODEFORCE HACKEREARTH TOPCODER
const title = "prashant1h76"
const express=require('express');
const exphbs=require('express-handlebars')
const rp = require('request-promise');
const cheerio = require('cheerio');
const app=express()

app.get('/',(req,res)=>{
res.render('main')
});







//user verifier script
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
            console.log("nottaken hackerrank")
        }
        else{console.log('taken hackerrank')}
       
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
        console.log("codeforce ok");}
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
                console.log(err);
            
            
                });
        const port=5000

            app.listen(port, () =>{
                console.log(`Server started on port ${port}`);
              });














