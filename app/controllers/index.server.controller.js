exports.render = function (req,res) {

    
    res.render('index', {
        title: 'MEAN STACK 연습',
        user: JSON.stringify(req.user)
    });
};