const loadNewsHead=async()=>{
const url=`https://openapi.programming-hero.com/api/news/categories`;
try{
  const res=await fetch(url);
  const data=await res.json();
  displayNewsHead(data.data.news_category);
}
catch(error){
console.log(error);
}

}

const displayNewsHead=(values)=>{
console.log(values);
const newsHead=document.getElementById('news-head');
values.forEach(value => {
  console.log(value);
const div=document.createElement('div');
div.classList.add('nav');
  div.innerHTML=`

  <a class="nav-link ms-2" href="#" onclick="loadNews()">${value.category_name}</a>
  `;
  newsHead.appendChild(div);
  
});
}


const loadNews=async()=>{
  const url=`https://openapi.programming-hero.com/api/news/category/04`;
const res=await fetch(url);
const data=await res.json();
console.log(data.data);

}

loadNewsHead();
