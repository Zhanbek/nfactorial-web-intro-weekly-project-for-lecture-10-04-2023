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
  
  let newsList = document.getElementById("news");
  
  console.log(newsList);
  
  fetch(
    "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=zOQjJ9rnQUPkwNa8A5d3bV3ZIPMT1ZDZ"
  )
    .then(function (promise) {
      return promise.json();
    })
    .then(function (data) {
      data.results.splice(0, 3).forEach((item) => {
        console.log(item);
        const createdDate = new Date(item.updated_date);
        const day = createdDate.getUTCDate();
        const month =  getMonthByNumber(createdDate.getUTCMonth());
        const articleId = item.short_url.split('/').pop();
        console.log(item.short_url);
        console.log(articleId);
        console.log(createdDate);
        console.log(day);
  
        const imageUrl = item.multimedia.length > 0 ? item.multimedia[0].url : "";
  
        newsList.innerHTML += 
          `<li class = "news-item">
              <div class = "article">          
                  <div class = "article-main-part">
                      <div class = "article-info">
                          <img class = "avatar" src = "./images/avatar.png">
                          <span class = "author-name">Authors name</span>
                          <span class = "in">in</span>
                          <span class = "topic-name">Topics Name</span>
                          <span class = "delimeter">·</span>    
                          <span class = "publish-date">${day} ${month}</span>
                      </div>    
                      <a class = "article-topic" href = "./article.html?id=${articleId}">${item.title}</a>    
                      <a class = "article-summary" href = "./article.html?id=${articleId}">${item.abstract}</a>
                  </div>
                  <div class = "article-additional-info">
                      <div class = "hashtags">
                          <a class = "hash-button">${item.section}</a>
                          <span class = "required-time">12 min read</span>
                          <span class = "delimeter">·</span>      
                          <span class = "appeal">Selected for you</span>          
                      </div>
                      <ul class = "actions-list">
                          <li class = "actions-item"></li>
                          <li class = "actions-item"></li>
                          <li class = "actions-item"></li>
                      </ul>
                  </div>
              </div>
              <img class = "news-picture" src = "${imageUrl}" alt = "laptop">      
          </li>`;
        });
    })
    .catch((e) => console.log(e));