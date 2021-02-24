const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
        //node_modules/nodemailer/lib/well-known/services.json  查看相关的配置，如果使用qq邮箱，就查看qq邮箱的相关配置
    service:"qq",
    port:456,
    secure:true,
    auth:{
        user:"2498695596@qq.com",
        pass:"",
    }
});
//pass 不是密码而是stmp的授权码
//邮箱---设置--账户--POP3/SMTP服务---开启---获取stmp授权码

function sendMail(mail,code,call){
    //发送的配置项
    let mailOptions={
        from:'"Express-demo" <2498695596@qq.com>',//发送方
        to:mail,//接收方邮件
        subject:"欢迎使用",
        text:"hello world",
        html: '<p>这里是"Express-demo"详情请点击:</p><a href="https://www.jianshu.com/u/5cdc0352bf01">点击跳转</a>', //页面内容
		// attachments: [{//发送文件
		// 		filename: 'index.html', //文件名字
		// 		path: './index.html' //文件路径
		// 	},
		// 	{
		// 		filename: 'sendEmail.js', //文件名字
		// 		content: 'sendEmail.js' //文件路径
		// 	}
		// ]
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            call(false)
        }else{
            call(true)
        }
    })
}
module.exports={
    sendMail
}