const categories = { "分类一": [{ url: `/posts/%E6%A0%87%E9%A2%98%E4%B8%89/`, date: `03 May 2025`, title: `标题三`},{ url: `/posts/%E6%A0%87%E9%A2%98%E4%B8%80/`, date: `10 Apr 2025`, title: `(标题一)`},],"分类二": [{ url: `/posts/%E6%A0%87%E9%A2%98%E4%BA%8C/`, date: `29 Apr 2025`, title: `(标题二)`},{ url: `/posts/%E6%A0%87%E9%A2%98%E4%B8%80/`, date: `10 Apr 2025`, title: `(标题一)`},],"论文分类三笔记": [{ url: `/posts/%E6%A0%87%E9%A2%98%E4%BA%8C/`, date: `29 Apr 2025`, title: `(标题二)`},],"分类三": [{ url: `/posts/%E6%A0%87%E9%A2%98%E4%B8%89/`, date: `03 May 2025`, title: `标题三`},], }

console.log(categories);

window.onload = function () {
  document.querySelectorAll(".article-category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      console.log(posts);
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};