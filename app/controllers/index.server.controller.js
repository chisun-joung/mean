exports.render = function (req,res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    
    req.session.lastVisit = new Date();
    
    res.render('index', {
        title: 'MEAN STACK 연습',
        userFullName: req.user ?req.user.fullName : ''
    });
};