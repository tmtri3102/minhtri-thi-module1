class Book {
	constructor(id, name, publishDate, amount) {
		this.setId(id);
		this.name = name;
		this.setDate(publishDate);
		this.amount = amount;
		this.status = amount > 0;
	}

	setId(id) {
		if (id.length !== 5) return false;

		const firstChar = id.charAt(0);
		if (firstChar < "1" || firstChar > "5") {
			return false;
		}

		for (let i = 1; i < id.length; i++) {
			const char = id.charAt(i);
			if (char < "0" || char > "9") return false;
		}

		this.id = id;
		return true;
	}

	setDate(publishDate) {
		if (publishDate.length > 4) {
			this.publishDate = "";
			return false;
		}
		this.publishDate = publishDate;
		return true;
	}

	addBook(amount) {
		if (amount < 0) return false;
		this.amount += amount;
		this.status = true;
	}

	borrowBook() {
		if (this.amount > 0) {
			this.amount--;
			if (this.amount == 0) {
				this.status = false;
			}
			return true;
		}
		return false;
	}
}
