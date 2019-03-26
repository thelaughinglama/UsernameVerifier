//GITHUB HACKERRANK CODEFORCE HACKEREARTH TOPCODER
const title = "risinggeek"
const express=require('express');
const exphbs=require('express-handlebars')
const rp = require('request-promise');
const cheerio = require('cheerio');
const app=express()
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

        const port=5000

            app.listen(port, () =>{
                console.log(`Server started on port ${port}`);
              });














