//question 1

const cat = {
    complain: function(){
        console.log("Meow!")
    }
};

cat.complain();

//question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3

heading.style.fontSize = "2em";

//question 4

heading.className = "subheading";

//question 5

const paragraphs = document.querySelectorAll("p");

for(let i=0; i< paragraphs.length; i++){
    
    paragraphs[i].style.color = "#e04321";
    
}

//question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style="background-color: #fbe108">New paragraph</p>`;

//question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catList(list) {
    
    for(let i=0; i< list.length; i++){
        console.log(list[i].name);
    }
}


catList(cats);


//question 8 

function createCats(cats){

    let list = "";

    for(let i=0; i< cats.length; i++){     
        // console.log(cats[i]);

        let catAge = cats[i].age;

        if(!catAge){
            catAge = "Age unknown";
        }

        list = list +`<div>
                        <h5> Name: ${cats[i].name}</h5>
                        <p> Age: ${catAge}</p>                    
                    </div>`;    

        // console.log(list); 
    } 

    return list; 

}
const finalHtml = createCats(cats);

// console.log(finalHtml);

const container = document.querySelector(".cat-container");

container.innerHTML = finalHtml;

createCats(cats);

console.log(container);