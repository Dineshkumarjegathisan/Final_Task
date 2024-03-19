const BookService = require('../service/bookService')
const {v4:uuidv4} = require('uuid')

async function createBook(req,res){
    try {
        const reqBody = {
            bookId :uuidv4(),
            bookName: req.body.bookName,
            bookPrice : req.body.bookPrice,
            stock : req.body.stock,
        }
        console.log(reqBody);
        const response = await BookService.createBook(reqBody)
        res.status(201)
        .json({
            response 
        })
            
    } catch (err) {
        throw err ;
    }
}


async function getAllBooks(req,res){
    try {
    const limit = req.query.limit ;
    const offset = req.query.offset ; 
    const response = await BookService.getAllBooks(limit,offset);
    res.status(200)
    .json({
        response
        })
    } catch (err) {
        throw err ;
    }
}


async function updateBookById (req,res){
    try {
        const reqBody={
            bookId :req.params.id,
            stock : req.body.stock
                    }
                    console.log("======"+reqBody);
    const response = await BookService.updateBookById(reqBody)
    res.status(200).send(response)
    } catch (err) {
        throw err
    }
}
module.exports = {createBook , getAllBooks , updateBookById}