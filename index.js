console.log("my js is working");

function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

// let book = localStorage.getItem("book");
// if (book == null) {
//   bookobj = {};
// } else {
//   bookobj = JSON.parse(book);
// }
// <td> for (const element of entries) {
//   <button id =" ${element}"onclick = "deleteNode(this.id)" class="btn btn-primary">Delete Node</button> ;
// }</td>

function Display() {}
Display.prototype.add = function (book) {
  console.log("Adding to UI");
  tableBody = document.getElementById("tableBody");
  const entries = Object.entries(book);
  let uistring = `  <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                   
                    </tr>
  `;
  tableBody.innerHTML += uistring;
};

Display.prototype.clear = function () {
  let library = document.getElementById("library");
  library.reset();
};

Display.prototype.validate = function (book) {
  if (book.name.length > 2 || book.author.length > 2) {
    return true;
  } else {
    return false;
  }
};

Display.prototype.show = function (name, displaymsg) {
  let msg = document.getElementById("msg");

  msg.innerHTML = `<div class="alert alert-${name} alert-dismissible fade show" role="alert">
                      <strong>Message: </strong> ${displaymsg}
                      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`;
  setTimeout(function () {
    msg.innerHTML = "";
  }, 3000);
};

let library = document.getElementById("library");
library.addEventListener("submit", librarySubmit);

function librarySubmit(e) {
  console.log("you have successfully submitted the submission.");

  let name = document.getElementById("bookname").value;
  let author = document.getElementById("author").value;
  let type;

  let fantasy = document.getElementById("fantasy");
  let comics = document.getElementById("comics");
  let history = document.getElementById("history");

  if (fantasy.checked) {
    type = fantasy.value;
  } else if (comics.checked) {
    type = comics.value;
  } else if (history.checked) {
    type = history.value;
  }

  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show(
      "success",
      "Your book has been successfully added to the collection. :)"
    );
  } else {
    display.show("danger", " There has been error uploading your material.");
  }

  e.preventDefault();
}
