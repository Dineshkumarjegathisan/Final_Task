const { Sequelize } = require('sequelize');
const connectToDb = require('../connection/db_config.js')
const {Books ,Users} =  connectToDb();


async function createBook(reqBody){
    try {
        const result = await Books.create(reqBody)
        return result ;
    } catch (err) {
        throw err ;
    }
}


async function getAllBooks(limit,offset){
   try {
    if (typeof limit === 'string' && typeof offset === 'string') {
        limit = parseInt(limit)
        offset = parseInt(offset)
   if (isNaN(limit) || isNaN(offset)) 
   {
        return 'In valid offset or limit'
   }
   }
   const resObj={
    total_items:0,
    response:[],
    total_pages:0,
    current_page:0,
    hasMore: false,
   }
    const result = await Books.findAll({
        limit:limit,
        offset:offset
    })
    const resCount = result.length;
    resObj.total_items = resCount ;
    resObj.total_pages =Math.ceil(resCount/limit);
    resObj.current_page = parseInt(offset)+1
    resObj.hasMore = (resObj.total_pages)-(resObj.current_page)>0?true:false
    resObj.response.push(result);
    return resObj ;
   } catch (err) {
    throw err ;
   }
}


async function updateBookById(reqBody ){
    try {
        
        const result = await Books.update(
             {
                bookName:reqBody.bookName,
                bookPrice:reqBody.bookPrice,
                stock:reqBody.stock
            },
           { where:{bookId:reqBody.bookId},returning :true } 
        )
        return result ;
    } catch (err) { 
        throw err ;
    }
}

async function deleteBookById(id){
    try {
        const result = await Books.destroy({
            where:{
                bookId:id
            }
        })
        return result
    } catch (err) {
        throw err ;
    }
}

async function getbookByName(search){
    try {
        console.log(search);
        const result = await Books.findOne({
            where:{
                //bookName:search
                bookName:{
                    [Sequelize.Op.like]: `%${search}%`
                }
            }
        })
        console.log("+++++>"+result);
        return result ;
    } catch (err) {
        throw err ;
    }
}
module.exports = {createBook , getAllBooks ,updateBookById , deleteBookById ,getbookByName}; 



