module.exports = {
    db: 'mongodb://localhost/mean-book',
    sessionSecret: 'developmentSessionSecret',
    
    facebook: {
    clientID: '1041630435913150',
    clientSecret: '5573e76425a2379309f5758df2a8cb38',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
    twitter: {
    clientID: 'Application Id',
    clientSecret: 'Application Secret',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  
  google: {
    clientID: 'Application Id',
    clientSecret: 'Application Secret',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};