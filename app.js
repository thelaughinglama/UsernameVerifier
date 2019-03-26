const title = "Prashantqqwe"
const rp = require('request-promise');
const cheerio = require('cheerio');
const options1 = {
    uri: `https://hackerrank.com/` + title,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options1)
    .then(($) => {
        var x = $('.profile-heading').text()
        if (!x) {
            console.log("okkkk")
        }
        
        console.log('hackerrank:'+$('.profile-heading').text());
    })
    .catch((err) => {
        console.log('err');


    });


const options2 = {
    uri: `https://www.github.com/` + title,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(options2)
    .then(($) => {
        var y = $('.p-nickname').text()

        console.log('github:'+$('.p-nickname').text());
    })
    .catch((err) => {
        console.log('err');


  });


  const options5 = {
    uri: `https://instagram.com`,
    headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
      }, 
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  rp(options5)
    .then(($) => {var y=$('.v11jx').text()
    if(!y){
        console.log('ok');
    }
      console.log($('body').text());
    })
    .catch((err) => {
   console.log(err);
if(err){
    console.log('error');
}

    });


// app.listen(2300,console.log("ddd"))}
const optionsa = {
    uri: `https://www.codeforces.com/profile/tourist`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

rp(optionsa)
    .then(($) => {
   if($('.userbox').html()==null){
       console.log('user not found')
   }
        else{
        console.log("codeforce ok");}
        // console.log('codeforce:'+$('.userbox').html());}
    })
    .catch((err) => {
    console.log('error');


    });


    const optionsb = {
        uri: `https://www.hackerearth.com/@`+title,
        transform: function (body) {
            return cheerio.load(body);
        }
    };
    
    rp(optionsb)
        .then(($) => {
      if($('title').text()==`  ${title} (${title})'s Developer Profile | HackerEarth  `){//Prashant (Prashant)'s Developer Profile | HackerEarth
            
          console.log('not taken');
      }
      else{ 
          console.log(';(')
      }
            //console.log('codeforce:'+$('.userbox').html());}
        })
        .catch((err) => {
           if(err){
               console.log('error');
           }
    
        });
        const options1 = {
            uri: `https://topcoder.com/members/`+title,
            transform: function (body) {
                return cheerio.load(body);
            }
        };
        
        rp(options1)
            .then(($) => {
                
                console.log('s'+$('head').children('title').text());
            })
            .catch((err) => {
            
        
        if(err){
        console.log('okk');}
            });
        