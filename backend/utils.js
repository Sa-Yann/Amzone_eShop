import jwt from 'jsonwebtoken';


export const genrateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email:user.email,
        isAdmin: user.isAdmin
    }, 
    process.env.JWT_SECRET || 'somethingsecret',
    {
        expiresIn: '30d'
    })
}

// Building a middleware to authetificate the user that is ordering 
//  Middlewares accept 3 prameters: req, res, next
export const isAuth = (req, res, next) => {
    const authorisation = req.headers.authorisation;
    if(authorisation) {
        const token = authorisation.slice(7, authorisation.length); 
        //why Slice 7: Bearer thetoken623756026HBU9DC90CHNC0C => Bearer + space is 7 so Slice 7
        // slice(7, authorisation.length) means fron the 8th caracter to the end which is authorisation.lenght
        jwt.verify(
            // verify decrypt the Token
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                // decode contains the data inside the Token
                
                if (err) {
                    res.status(401).send({ message: 'Invailde Token' })
                } else {
                // when building generateToken we define all the needed user infos : 
                // {
                //     _id: user._id,
                //     name: user.name,
                //     email:user.email,
                //     isAdmin: user.isAdmin
                // }
                // so via decode we can retrive all saved user info that were saved in the token 
                // that s why can set those user datas in req.user 
                    req.user = decode;
                    // next() allow to pass user poperty in the req of req.user
                    next();
                }
            }
        )
    } else {
        // if authorisation doesn't exist
        res.status(401).send({ message: 'No Token Found' })
    }
}