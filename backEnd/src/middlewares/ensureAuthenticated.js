const { verify } = require(  'jsonwebtoken');
const authConfig = require(  '../config/auth');

function ensureAuthenticated(
  request,
  response,
  next,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(400).json('JWR token is missing');
    // throw Error('JWR token is missing');
  }

  const [, token] = authHeader.split(' ');
  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded ;

    request.user = {
      id: sub,
    };

    return next();
  } catch (err) {
    return response.status(400).json('Invalid JWT token');
    // throw Error('Invalid JWT token');
  }
}

module.exports = ensureAuthenticated;