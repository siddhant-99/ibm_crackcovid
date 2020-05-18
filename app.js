const express = require('express');
const session = require('express-session');
const passport = require('passport');
const WebAppStrategy = require('ibmcloud-appid').WebAppStrategy;

const app = express();

app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialised: true
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

app.get('/appid/callback', passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.get('/appid/logout', function(req, res){
    WebAppStrategy.logout(req);
    res.redirect('/');
});

app.use(passport.authenticate(WebAppStrategy.STRATEGY_NAME));

app.use(express.static('./public'));

app.listen(3000,()=> {
    console.log('Listening on http://localhost:3000');
});