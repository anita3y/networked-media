
// NEW: import cookie parser
const express = require('express');
const multer = require('multer');
const nedb = require('@seald-io/nedb');
const nunjucks = require('nunjucks')

const cookieParser = require('cookie-parser')

const app = express();
const upload = multer({
	dest: 'public/uploads',
});

const database = new nedb({
	filename: 'database.db',
	autoload: true,
});

nunjucks.configure('views', {
	autoescape: true,
	express: app,
    noCache: true 
});
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'njk');

app.use(cookieParser())


app.get('/', (req, res)=>{

	// local variable to track number of visits, 
	let totalVisits = 1

	if(req.cookies.visits){
		let convertToNumber = parseInt(req.cookies.visits)
		totalVisits = convertToNumber + 1
	}
	// create cookie using response parameter
	// sends cookie back to client
	// takes in 3 paramenterS:
	// 1.name
	// 2. value of cookies
	//3. objects of cookie attributes that is passed into the header

	res.cookie('visits', totalVisits, {expires: new Date( Date.now() + 100 * 365 * 24 * 60 * 60* 1000)})
    // display
	res.render('home.njk', {serverData: totalVisits})
})

app.listen(6005, ()=>{
    console.log(`http://localhost:6005`)
})