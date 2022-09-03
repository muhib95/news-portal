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
values.sort(function (y, x) {
  return x.total_view - y.total_view;
});

console.table(values);

values.forEach(value => {
  

  const div=document.createElement('div');
  div.classList.add('card','mb-3');
  div.innerHTML=`
  <div class="row g-0">
          <div class="col-md-4">
            <img src="${value.image_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${value.title}</h5>
              <p class="card-text">${value.details.slice(0,155)}<span>...</span></p>
             
              <div class="d-flex justify-content-evenly align-items-center">
  <div class="d-flex justify-content-evenly p-2">
    <img src="${value.author.img}" alt="" style="width: 50px;height: 50px;border-radius: 50px;">
    <div class="ms-2">
      <h4>${value.author.name ?value.author.name:'Not Found'}</h4>
      <p>${value.author.published_date ?value.author.published_date:'Not Found'}</p>
    </div>
   
  </div>
  <div>
    <h4>View <span>${value.total_view ?value.total_view:'Not Found'}</span></h4>
  </div>
  <button class="btn btn-primary">Details</button>
</div>
            </div>
          </div>
        </div>
  
  `;
  newsItems.appendChild(div);
});



}
loadNewsHead();
