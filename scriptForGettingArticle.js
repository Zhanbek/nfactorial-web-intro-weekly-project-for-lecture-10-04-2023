const url = window.location.href;
const searchParams = url.searchParams;
// Get the value of the 'id' parameter
const articleId = url.split("=").pop();
const shortURL = 'https://nyti.ms/' + articleId;
console.log(articleId);
console.log(shortURL);

function getMonthByNumber(num) {
    let result = "";
    switch (num) {
      case 0:
        result = "January";
        break;
      case 1:
        result = "February";
        break;
      case 2:
        result = "March";
        break;
      case 3:
        result = "April";
        break;
      case 4:
        result = "May";
        break;
      case 5:
        result = "June";
        break;
      case 6:
        result = "July";
        break;
      case 7:
        result = "August";
        break;
      case 8:
        result = "September";
        break;
      case 9:
        result = "October";
        break;
      case 10:
        result = "November";
        break;
      case 11:
        result = "December";
        break;
    }
    return result;
  }
  
function getMonthByNumber(num) {
    let result = "";
    switch (num) {
      case 0:
        result = "January";
        break;
      case 1:
        result = "February";
        break;
      case 2:
        result = "March";
        break;
      case 3:
        result = "April";
        break;
      case 4:
        result = "May";
        break;
      case 5:
        result = "June";
        break;
      case 6:
        result = "July";
        break;
      case 7:
        result = "August";
        break;
      case 8:
        result = "September";
        break;
      case 9:
        result = "October";
        break;
      case 10:
        result = "November";
        break;
      case 11:
        result = "December";
        break;
    }
    return result;
  }
  
  let newsList = document.getElementById("article");
  
  console.log(newsList);
  
  fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zOQjJ9rnQUPkwNa8A5d3bV3ZIPMT1ZDZ"
  )
    .then(function (promise) {
      return promise.json();
    })
    .then(function (data) {
        const articlesArray  = data.results.filter(item => item.short_url === shortURL);        
        const article = articlesArray[0];       
        console.log(article);
        const createdDate = new Date(article.updated_date);
        const day = createdDate.getUTCDate();
        const month =  getMonthByNumber(createdDate.getUTCMonth());
        console.log(createdDate);
        console.log(day);
  
        const imageUrl = article.multimedia.length > 0 ? article.multimedia[0].url : "";
  
        newsList.innerHTML += 
          `                    <div class = "article-info-top">
          <div class = "article-info-top-left-panel">
              <img class = "author-avatar" src = "./images/Author-avatar.png" alt = "Author's avatar">
              <div class = "article-info-container">
                  <p class = "authors-name">Authors Name</p>
                  <div class = "article-information">
                      <span class = "publish-date">${day} ${month}</span>
                      <span class = "delimeter">·</span> 
                      <span class = "required-time">12 min read</span>
                      <span class = "delimeter">·</span>      
                      <span class = "appeal">Member-only</span>                                     
                  </div>
              </div>
          </div>
          <div class = "article-info-top-right-panel">
              <ul class = "social-network-list">
                  <li class = "social-network-item">
                      <span class = "visually-hidden">LinkedIn</span>
                      <span class = "social-network-image linkedin"></span>
                  </li>
                  <li class = "social-network-item">
                      <span class = "visually-hidden">Facebook</span>
                      <span class = "social-network-image facebook"></span>
                  </li>
                  <li class = "social-network-item">
                      <span class = "visually-hidden">Twitter</span>
                      <span class = "social-network-image twitter"></span>
                  </li>
              </ul>
          </div>                               
      </div>
      <div class = "article-header-container">                        
          <p class = "main-article-header">
              7 Practical CSS Tips
          </p>
          <p class = "additional-article-header">
              How product designers can break from the status quo and help our planet
          </p>                    
          
      </div>

      <img class = "article-image" src = "${imageUrl}" alt = "Фото">

      <div class = "article-subheader-container">
          Subheader
      </div>

      <div class = "article-text">
          How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.
          And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.
          But if you think we’re hyperconnected today, just wait. Globally, just over 55% of today’s households have an internet connection. This gap between the internet haves and have-nots is referred to as the digital divide, and access is skewed toward richer nations. The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20% of the global electricity demand. This presents a troublesome dichotomy. On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already-overloaded power grids.
      </div>
      
      <div class = "article-info-bottom">
          <div class = "article-info-bottom-left">
              <div class = "article-likes-container">
                  <div class = "article-likes-image-container">
                      <span class = "article-likes-image"></span>
                  </div>   
                  <div class = "article-likes-count-container">
                      <span class = "article-likes-count">180</span>    
                  </div>         
                  
              </div>
              <div class = "article-comments-container">
                  <div class = "article-comments-image-container">
                      <span class = "article-comments-image"></span>
                  </div>    
                  <div class = "article-comments-count-container">
                      <span class = "article-comments-count">12</span>                                
                  </div>        
                  
              </div>
          </div>
          <div class = "article-info-bottom-right">
              <div class = "article-empty-container">1</div>
              <div class = "article-bookmark-image-container">
                  <span class = "article-bookmark-image"></span>                                                      
              </div>        
          </div>    
      </div>`;
        })
        .catch((e) => console.log(e));