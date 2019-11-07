const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll( '#all-elements'),
           lightbox = document.querySelector('.lightbox');
          

  




    function parseBookData(element) {// person in the database is a result//model, lightbox, loading animation, css, js magic
        let targetDiv = document.querySelector(' .lb-content'),
            targetImg = lightbox.querySelector('#all-elemens');


        let bookDescription = `
        <p class="desc-js">${book.description}</p>
        <h4 class="quote-js"> Book quote:</h4>
        ${renderBookQuoteel(element.name)}`;

        console.log(bookDescription);
        targetDiv.innerHTML = bookDescription;
        targetImg.src = element.imgsrc;

        lightbox.classList.add('show-lb');


    }

    function logiconsId(event) {
        event.preventDefault();// kill the default a tag behaviour (dont navigate anywhere)
        debugger;
        //console.log(this.logiconsId);

        let url = `/elements/${this.getAttribute('href')}`;//  /3 route in express. passing data dynamically

        if(this.ID = userButtons){

           
        fetch(url)// go get the data fetch boy!
        .then(res => res.json())// parse the json result into a plain object
        .then(data => {
            console.log("my data resutl is: ", data)

            data[0].imgsrc = imgSrc;


            parseBookData(data[0]);
        })
        .catch((err) => {

            console.log(err);
        

        });
        }
    }



        // find the image closet to the anchor tag and get its src property

        //let imgSrc = this.previousElementSibling.getAttribute('src');
    

    userButtons.forEach(button => button.addEventListener('click', logiconsId));
    lightbox.querySelector(' .close').addEventListener('click',  function() {
        lightbox.classList.remove('show-lb');

    });

})();