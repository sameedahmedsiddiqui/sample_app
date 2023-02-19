exports.landing_index = function(req, res, next) {
    res.render('landing', { title: 'Landing Page' });
}

exports.post_landing_index = function(req, res, next) {
    console.log(req.body.email);
    console.log(req.body.email);
    res.redirect('/');
}