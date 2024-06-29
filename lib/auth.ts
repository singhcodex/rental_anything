import jwt from 'jsonwebtoken';

export const authenticate = (handler) => async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return new Response(JSON.stringify({ error: 'Authentication required' }), { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return handler(req, res);
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
    }
};