import Books from "../models/books.model.js";


//Add or create a book
export async function addBook(req, res) {
    try {
        let book = await Books.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book created successfully',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Book could not be created at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View a book
export async function viewBook(req, res) {
    try {
        let allbooks = await Books.findAll({where: {book_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book record retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No matching book record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//View all books
export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Books.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

//Update a book record
export async function updateBook(req, res) {
    try {
        let bookUp = await Books.findOne({where: {book_id: req.params.id}});
        if (bookUp) {
            bookUp.update(req.body);
            res.json({
                success: true,
                message: "Book updated!",
                data: bookUp,
            })
            
        } else {
            res.json({
                success: true,
                message: 'No matching book record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


//Delete a book
export async function deleteBook(req, res) {
    try {
        let bookDel = await Books.findOne({where: {book_id: req.params.id}});
        if (bookDel) {
            bookDel.destroy();
            res.json({
                success: true,
                message: "Book deleted!",
                data: bookDel,
            })
            
        } else {
            res.json({
                success: true,
                message: 'No matching book record found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

