import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prismaClient.js'

const router = express.Router()

//register new user endpoint /auth/register
router.post('/register', async (req, res) => {
    const { username, password } = req.body
    //save the username and an irreversibly encrypted password
    //save sudip | adfakdgjea........esasd

    //encrypt the password
    const hashedPassword = bcrypt.hashSync(password, 8)

    //save the new user and hashed password to db
    try {
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        // now that we have a  user, I want to add their first todo for them
        const defaultTodo = `Hello add your first todo!`
        await prisma.todo.create({
            data: {
                task : defaultTodo,
                userId: user.id
            }
        })

        // create a token 
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)
    }

})

router.post('/login', async (req, res) => {
    //we get their email and we look up to the password associated with that email in the db
    //but we get it back and see its encrypted
    //one way encrypt the password the user just entered

    const { username, password } = req.body

    try {
        const user = await prisma.user.findUnique({
            where: {
                username: username
            }
        })

        // if we cannot find a user associated with that username, return out from the function
        if (!user) { return res.status(404).send({ message: "User not found" }) }

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        //if password does not match, return out of the function
        if (!passwordIsValid) { return res.status(401).send({ message: "invalid password" }) }

        console.log(user)


        // then we have a succcessful authentication
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
        res.json({ token })
    } catch (err) {
        console.log(err.message)
        res.sendStatus(503)

    }
})

export default router