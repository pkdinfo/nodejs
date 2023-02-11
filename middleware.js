module.exports = (req, resp, next) => {
	if (!req.query.age) {
		//console.log('reqFilter');
		resp.send('please provide your age');
	} else if (req.query.age < 18) {
		resp.send('you are under age');
	}
	{
		next();
	}
};


