const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch
    let userButtons = document.querySelectorAll( '.all-elements'),
    lightbox = document.querySelector('.lightbox');
      name = document.querySelector('.name');


      function GetElementData(element) {
        console.log("#");
      }
      userButtons.forEach((element) =>
        element.addEventListener("click", function() {
          console.log("here it goes", element);
    
          lightbox.classList.add('show-lb');

          let targetDiv = document.querySelector(' .lb-content');
          let elementDescription = `
        <p class="desc-js">${element.description}</p>
        <h4 class="quote-js"> Element Name:</h4>
        ${renderElementName(element.name)}`;
        

         console.log(elementkDescription);
        targetDiv.innerHTML = elementDescription;
        

        })
      );



    function getBookData(event) {
        event.preventDefault();// kill the default a tag behaviour (dont navigate anywhere)
        //debugger;

        // find the image closet to the anchor tag and get its src property

        
        let url = `/elements/${element.getAttribute('href')}`;//  /3 route in express. passing data dynamically

        fetch(url)// go get the data fetch boy!
          .then(res => res.json())// parse the json result into a plain object
          .then(element => {
              console.log("my data resutl is: ", element)

         


              GetElementData(element[0]);
          })
          .catch((err) => {
              console.log(err)
          });
    }

    userButtons.forEach(button => button.addEventListener('click', getBookData));
    lightbox.querySelector(' .close').addEventListener('click',  function() {
        lightbox.classList.remove('show-lb');
    });

})();