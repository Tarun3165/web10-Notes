
module.exports = (permittedRoles) => {


    return function (req, res, next) {
        try {
            
            const user = req.user;
            
            //then check if any of the roles that the user has matched with the permitted roles
            
            const PermittedArray = user.roles.filter((role) => 
            permittedRoles.includes(role)
            )
            console.log('PermittedArray:', PermittedArray)
            
            //if not  throw error
            if(PermittedArray.length==0)
            return res.status(403).json({ message: "u are not permitted to access this" })
            
            return next();
        }
        catch (err) {
            return res.status(403).json({ message: "u are not permitted to access this" })
            
        }

    }
}