const { render } = require('ejs');
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session'); // session checker 
const multer = require('multer'); // multer
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views')) //serve staic files
app.use(express.static(path.join(__dirname, '/upload'))) // for img uploading



require('./model/mongoConfig')
var User = require('./model/userSchema')
    // var Sign = require('./model/signIn')
const Contact = require('./model/contactSchema')
const Add = require('./model/addproductSchema')

// app.use(express.static('views/assets'))
// app.use(express.static('assets'))

// app.use('/assets', express.static('assets'));
// var path = require('path');
// app.use(express.static(path.join()));
// app.get('/', function(req, res) {
//     res.send('Hello World');

// app.get('/', function(req, res) {
//     res.send('login page 3543');
// });

// app.get('/aboutus', function(req, res) {
//     res.send('about us page')
// })

// app.post('/login', function(req, res) {
//     res.send('login page post')
// })

// app.put('/login', function(req, res) {
//     res.send('login page put')
// })

// app.delete('/login', function(req, res) {
//     res.send('login page delete')
// })



///Router Method----------------------------------
// app.use(express.static(path.join(__dirname, '../assets')));
// app.use(express.static(__dirname + '/img'));

// app.get('/assets.style.css', function(req, res) {
//     res.sendFile(path.join(__dirname, 'coomon', 'assets', 'style.css'))
// });


//Session & Cookie------------------------------------------------------------------------------->

app.use(cookieParser());
app.use(
    session({
        key: "user_sid",
        secret: "somerandonstuffs",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000,
        },
    })
);


app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie("user_sid");
    }
    next();
});

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect("/dashboard");
    } else {
        next();
    }
};
//Session & Cookie------------------------------------------------------------------------------->







app.set('view engine', 'ejs');
var router = express.Router();

// router.get('/', function(req, res) {
//     // res.sendFile(__dirname + '/Landing_page.html');
//     res.render('index');
// })


router.get('/', async(req, res) => {
    try {
        const data = await Add.find({});
        res.render('index', { data: data });
        console.log(data)
    } catch (err) {
        console.log(err)
    }
})

///* Sign UP *////////////////////////////////----------------->


router.post('/signup', (req, res) => {
    var user = new User({
        nameUp: req.body.nameUp,
        emailUp: req.body.emailUp,
        mobileUp: req.body.mobileUp,
        passUp: req.body.passUp,
        cpassUp: req.body.cpassUp,
    });
    user.save().then(() => {
            console.log('saved data');
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/signup', async(req, res) => {
    try {
        //     res.sendFile(__dirname + '/services.html')
        const data = await User.find({});
        res.render('dashboard/viewregistration', { data: data });
        console.log(data)
    } catch (err) {
        console.log(err)
    }

})

//Sign Up Delete

router.get('/delete/:id', async(req, res) => {
    try {
        await User.findByIdAndRemove(req.params.id);
        res.redirect('/signup');
    } catch (err) {
        res.redirect('/signup');
    }
});
//Sign Up Delete

//Sign Up Edit

router.get('/edit/:id', async(req, res) => {
    try {
        var data = await User.findById(req.params.id);
        res.render('dashboard/editform', ({ data: data }));

        console.log(data);
    } catch (err) {
        res.redirect('err');
    }
});

router.post('/edit/:id', async(req, res) => {
    var updatesignup = {
        nameUp: req.body.nameUp,
        emailUp: req.body.emailUp,
        mobileUp: req.body.mobileUp,
        passUp: req.body.passUp,
        cpassUp: req.body.cpassUp,
    }
    try {
        var data = await User.findByIdAndUpdate(req.params.id, updatesignup);
        res.redirect('/signup')
            // console.log('edit/' + req.params.id)
    } catch (err) {
        // console.log('/edit')
    }
})

//SignUP Edit


///* Sign UP End *////////////////////////////////----------------->

///* Sign In*////////////////////////////////------------------------------>

// router.get('/signin', function(req, res) {
//     if (req.session.user && req.cookies.user_sid) {
//         res.render('dashboard')
//     } else {
//         res.render('signin');
//     }
// })

router.get('/signin', sessionChecker, (req, res) => {
    res.render('/')
})

router.post('/signin', async(req, res) => {
    var emailUp = req.body.emailUp,
        passUp = req.body.passUp;

    try {
        var user = await User.findOne({ emailUp: emailUp })
            .exec();
        if (!user) {
            res.redirect('/')
        }
        // user.comparePassword(passUp, (error, match) => {
        //     if (!match) {
        //         res.redirect('/signin')
        //     }
        // });
        req.session.user = user;
        res.redirect('/dashboard');
    } catch (error) {
        console.log(error);
    }
});


router.get('/dashboard', function(req, res) {
        if (req.session.user && req.cookies.user_sid) {
            res.render('dashboard/index')
        } else {
            res.redirect('/')
        }

    })
    ///* Sign In End *////////////////////////////////------------------------->



// router.get('/index', function(req, res) {
//     if (req.session.user && req.cookies.user_sid) {
//         res.render('dashboard')
//     } else {
//         res.render('index');
//     }
// })


// router.post('/index', async(req, res) => {
//     var emailUp = req.body.emailUp,
//         passUp = req.body.passUp;

//     try {
//         var user = await User.findOne({ emailUp: emailUp })
//             .exec();
//         if (!user) {
//             res.redirect('/index');
//         }
//         user.comparePassword(passUp, (error, match) => {
//             if (!match) {
//                 res.redirect('/index')
//             }
//         });
//         req.session.user = user;
//         res.redirect('/dashboard');
//     } catch (error) {
//         console.log(error);
//     }
// })










router.get('/aboutus', function(req, res) {
    // res.sendFile(__dirname + '/aboutus.html');
    res.render('about');
})

router.get('/services', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('services');

})

///* Contact *////////////////////////////////----------------->


router.get('/contact', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('contact');

})

router.post('/contact', (req, res) => {
    var contact = new Contact({
        selectC: req.body.selectC,
        nameC: req.body.nameC,
        emailC: req.body.emailC,
        noC: req.body.noC,
        msgC: req.body.msgC,
    });
    contact.save().then(() => {
            console.log('saved data');
        })
        .catch((err) => {
            console.log(err);
        })
});
router.get('/viewcontact', async(req, res) => {
        try {
            //     res.sendFile(__dirname + '/services.html')
            const data = await Contact.find({});
            res.render('dashboard/viewcontact', { data: data });
            console.log(data)
        } catch (err) {
            console.log(err)
        }

    })
    ///* DELETE Api


router.get('/delete_contact/:id', async(req, res) => {
    try {
        const deleted = await Contact.findByIdAndRemove(req.params.id);
        res.redirect('/viewcontact');
    } catch (err) {
        res.redirect('/viewcontact');
    }
});

///* DELETE Api

//Edit Api

router.get('/edit_contact/:id', async(req, res) => {
    try {
        var data = await Contact.findById(req.params.id);
        res.render('dashboard/editcontact', ({ data: data }));

        console.log(data);
    } catch (err) {
        res.redirect('err');
    }
});


router.post('/edit_contact/:id', async(req, res) => {
    var updatecontact = {
        selectC: req.body.selectC,
        nameC: req.body.nameC,
        emailC: req.body.emailC,
        noC: req.body.noC,
        msgC: req.body.msgC,
    }
    try {
        var data = await Contact.findByIdAndUpdate(req.params.id, updatecontact);
        res.redirect('/viewcontact')
            // console.log('edit/' + req.params.id)
    } catch (err) {
        // console.log('/edit')
    }
})

//Edit Api

///* Contact End *////////////////////////////////----------------->



router.get('/stream', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('stream');

})
router.get('/events', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('events');

})

router.get('/sports', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('sports');

})

router.get('/terms', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('terms');

})

router.get('/jodi', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('jodi');

})

router.get('/fastx', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('fastx');

})

router.get('/galaxy', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('galaxy');

})

router.get('/johnwick', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('johnwick');

})


//Multer------------------------------------------------------------------->
//For uploading files,imgs,etc..
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload');
    },



    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }

});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });





router.get('/addproduct', function(req, res) {
        //     res.sendFile(__dirname + '/services.html')


        res.render('dashboard/addproduct');

    })
    ///* Add Product  *////////////////////////////////----------------->


// router.post('/addproduct', (req, res) => {
router.post('/addproduct', upload.single('img'), (req, res) => {
    var add = new Add({
        nameP: req.body.nameP,
        castname: req.body.castname,
        date: req.body.date,
        url: req.body.url,
        img: req.file.filename,
        about: req.body.about,
    });
    add.save().then(() => {
            console.log('saved data');
        })
        .catch((err) => {
            console.log(err);
        })
});
router.get('/viewproduct', async(req, res) => {
    try {
        //     res.sendFile(__dirname + '/services.html')
        const data = await Add.find({});
        res.render('dashboard/viewproduct', { data: data });
        console.log(data)
    } catch (err) {
        console.log(err)
    }

})

///* DELETE Api


router.get('/delete_viewproduct/:id', async(req, res) => {
    try {
        await Add.findByIdAndRemove(req.params.id);
        res.redirect('/viewproduct');
    } catch (err) {
        res.redirect('/viewproduct');
    }
});
///* DELETE Api

//Edit Api

router.get('/edit_viewproduct/:id', async(req, res) => {
    try {
        var data = await Add.findById(req.params.id);
        res.render('dashboard/editviewproduct', ({ data: data }));

        console.log(data);
    } catch (err) {
        res.redirect('err');
    }
});

router.post('/edit_viewproduct/:id', async(req, res) => {
    var updateproduct = {
        nameP: req.body.nameP,
        castname: req.body.castname,
        date: req.body.date,
        url: req.body.url,
        img: req.body.img,
        about: req.body.about,
    }
    try {
        var data = await Add.findByIdAndUpdate(req.params.id, updateproduct);
        res.redirect('/viewproduct')
            // console.log('edit/' + req.params.id)
    } catch (err) {
        // console.log('/edit')
    }
})

//Edit Api

///* View Product End *////////////////////////////////----------------->



// router.get('/viewcontact', function(req, res) {
//     //     res.sendFile(__dirname + '/services.html')
//     res.render('dashboard/viewcontact');

// })
router.get('/viewproduct', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('dashboard/viewproduct');

})
router.get('/viewregistration', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('dashboard/viewregistration');

})


router.get('/left', function(req, res) {
    //     res.sendFile(__dirname + '/services.html')
    res.render('dashboard/left');

})






app.use('/', router);
app.listen(3000);