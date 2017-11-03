module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

   // send to google to do the authentication
   // profile gets us their basic information including their name
   // email gets their emails
   app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

   // the callback after google has authenticated the user
   app.get('/auth/google/callback',
      passport.authenticate('google', {
           successRedirect : '/profile',
           failureRedirect : '/'
   }));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
