let books = [];
function displayBooks() {
	let row = "";
	for (let i = 0; i < books.length; i++) {
		row += `
      <tr> 
        <td>${books[i].id}</td>
        <td>${books[i].name}</td>
        <td>${books[i].publishDate}</td>
        <td>${books[i].amount}</td>
        <td>${books[i].status}</td>
        <td>
          <button onclick="borrowBook(${i})">Mượn sách</button>
          <button onclick="addAmount(${i})">Thêm số lượng</button>
        </td>
      </tr>
    `;
	}
	document.querySelector("tbody").innerHTML = row;
}

function addNewBook() {
	const id = prompt("Nhập mã sách (5 ký tự)");
	const name = prompt("Nhập tên sách");
	const year = prompt("Nhập năm xuất bản (không quá 4 số)");
	const amount = +parseInt(prompt("Nhập số quyển"));

	const newBook = new Book(id, name, year, amount);
	if (newBook.setId(id) && newBook.setDate(year)) {
		books.push(newBook);
		alert("Đã thêm sách mới thành công!");
		displayBooks();
	} else {
		alert("Mã số sách hoặc năm xuất bản không hợp lệ.");
	}
}

function borrowBook(index) {
	const book = books[index];
	if (book.borrowBook()) {
		alert("Đã mượn sách thành công!");
		displayBooks();
	} else {
		alert("Không có quyển nào để mượn.");
	}
}

function addAmount(index) {
	let amount = parseInt(prompt("Nhập số lượng để thêm:"));
	let book = books[index];
	if (book.addBook(amount)) {
		alert("Đã thêm số lượng thành công!");
		displayBooks();
	} else {
		alert("Số lượng không hợp lệ.");
	}
}
