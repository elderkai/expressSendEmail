var express = require('express');
var router = express.Router();
const email = require("../tool/sendEmail")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/email', function(req, res, next) {
	console.log(req.body)
	const mail = req.body.email
	const data = {
		rst: true,
		data: "",
		msg: ""
	}
	if (!mail) {
		return res.send('参数错误')
	} //email出错时或者为空时
	const code = parseInt(Math.random(0, 1) * 10000) //生成随机验证码
	// check[mail] = code
	//发送邮件
	email.sendMail(mail, code, (state) => {
		if (state) {
			return res.send("发送成功")
		} else {
			return res.send("失败")
		}

	})


});
module.exports = router;
