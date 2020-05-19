const express = require('express');
const session = require('express-session');
const passport = require('passport');
const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy;

const app = express();

app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));

passport.use(new WebAppStrategy({
    tenantId: "0f6a1a8c-70e5-4c0c-aeb8-466c84a8ac96",
    clientId: "c5993bce-3b7a-4d0a-95fe-59f993780628",
    secret: "MjhiNDEwOTEtZTg1Ny00MDhhLThhMWItMDM4YjgxZTQ4NTAy",
    oauthServerUrl: "https://eu-gb.appid.cloud.ibm.com/oauth/v4/0f6a1a8c-70e5-4c0c-aeb8-466c84a8ac96",
    redirectUri: "http://localhost:3000/appid/callback"
}));

// Handle Login
app.get('/appid/login', passport.authenticate(WebAppStrategy.STRATEGY_NAME, {
	successRedirect: '/dataentry.html',
	forceLogin: true
}));

// Handle callback
app.get('/appid/callback', passport.authenticate(WebAppStrategy.STRATEGY_NAME));

// Handle logout
app.get('/appid/logout', function(req, res){
	WebAppStrategy.logout(req);
	res.redirect('/');
});

// Protect the whole app
// app.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME));

// Make sure only requests from an authenticated browser session can reach /api
app.use('/api', (req, res, next) => {
	if (req.user){
		next();
	} else {
		res.status(401).send("Unauthorized");
	}
});

// The /api/user API used to retrieve name of a currently logged in user
app.get('/api/user', (req, res) => {
	// console.log(req.session[WebAppStrategy.AUTH_CONTEXT]);
	res.json({
		user: {
			name: req.user.name
		}
	});
});

// Serve static resources
app.use(express.static('./public'));
app.use(express.static('./docs'));

// Start server
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});