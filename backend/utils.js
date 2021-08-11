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

// Building a middleware to define the user that is ordering 
export const isAuth = (req, res, next) => {
    const authorisation = req.headers.authorization;
    if(authorisation) {
        const token = authorisation.slice(7, authorisation.length); //why Slice 7: Bearer thetoken623756026HBU9DC90CHNC0C => Bearer + space is 7 so Slice 7
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    res.status(401).send({ message: 'Invailde Token' })
                } else {
                    req.user = decode;
                    next();
                }
            }
        )
    } else {
        // if authorisation doesn't exist
        res.status(401).send({ message: 'No Token Found' })
    }
}