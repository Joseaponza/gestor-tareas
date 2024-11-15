import jwt from 'jsonwebtoken';

export const generarJwt = async (uid) => {
    
    try {
        const token = await jwt.sign(
            { uid },
            process.env.JWT_SECRET,
            { expiresIn: '4h' }
        );

        return token;

    } catch (error) {
        console.error(error);
    }
}