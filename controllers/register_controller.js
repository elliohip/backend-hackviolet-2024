const bcrypt = require('bcrypt');
const jwt = require('jwt')
const sql = require('../database/sql_connect.cjs');
const async_handler = require('express-async-handler');


module.exports.signup = async_handler(async (req, res, next) => {

    let check_user = (await sql`
    SELECT * FROM "user" 
    WHERE username=${req.body.username}
    `).at(0);
    let check_email = (await sql`
    SELECT * FROM "user" 
    WHERE email=${req.body.email}
    `).at(0);

    if (check_email) {
        return res.json(new Error('email already exists'));
    }
    if(check_user) {
        return res.json(new Error('username already exists'));
    }
    let email_addr_name = String(req.body.email).split('@')[1];
    let email_addr_array = email_addr_name.split('.');

    if (!(email_addr_array.find('vt'))) {
        return res.json(new Error('email is not vt related'));
    }

    let salt = await bcrypt.genSalt(10);
    let encrypted_pass = await bcrypt.hash(req.body.password, salt);
    let user = (await sql`
    INSERT INTO "user" (username, hashed_password, email, screen_name, pfp_path)
    VALUES (${req.body.username}, ${encrypted_pass}, ${req.body.email}, ${req.body.screen_name}, ${null})
    `)
    let token_salt = await bcrypt.genSalt(10);
    let encrypted_str = 
    let token = (await sql`
    INSERT INTO token (user_id, token_str) 
    VALUES (${user.user_id}, ${String()})
    `)
    res.json({
        user,
        token
    });
})

module.exports.login = async_handler(async (req, res, next) => {

})