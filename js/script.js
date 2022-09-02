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

   <a class="nav-link ms-2" href="#" onclick="loadNews(${value.category_id},'${value.category_name}')">${value.category_name}</a>
  
  `;
  newsHead.appendChild(div);
  
});
}


const loadNews=async(value,n)=>{
  // console.log(n);
  const url=`https://openapi.programming-hero.com/api/news/category/0${value}`;
  // console.log(url);
const res=await fetch(url);
const data=await res.json();
displayNews(data.data,n);

}

const displayNews=(values,name)=>{
console.log(values);
const itemFound=document.getElementById('item-found');
const catagoryName=document.getElementById('catagory-name');
itemFound.innerText=values.length;
catagoryName.innerText=name;
const newsItems=document.getElementById('news-items');
newsItems.innerHTML='';
values.forEach(value => {
  console.log(value);
  const div=document.createElement('div');
  div.classList.add('card','mb-3');
  div.innerHTML=`
  <div class="row g-0">
          <div class="col-md-4">
            <img src="${value.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
  
  `;
  newsItems.appendChild(div);
});
}
loadNewsHead();
