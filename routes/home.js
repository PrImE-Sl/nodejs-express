const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
	res.render('index', {		// res.sendFile(path.join(__dirname, 'views', 'index.html'))
		title: 'Главная страница',
		isHome: true
	})
})


module.exports = router