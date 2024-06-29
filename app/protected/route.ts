import {authenticate} from "@/lib/auth";

const handler = async (req, res) => {
    return new Response(JSON.stringify({ message: 'This is a protected route', user: req.user }), { status: 200 });
};

export const GET = authenticate(handler);
