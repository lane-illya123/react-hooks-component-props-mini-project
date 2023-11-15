import React from "react";
import Article from "./Article"


function ArticleList({posts}){
console.log(posts)
const myPost = posts.map((item) =>{

return <Article key={item.id} title={item.title} date={item.date} preview={item.preview}/>    
})    
    
return(
    <main>
     {myPost}   
    </main>
);

}

export default ArticleList;