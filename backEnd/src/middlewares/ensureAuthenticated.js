const { verify } = require(  'jsonwebtoken');
const authConfig = require(  '../config/auth');
const AppError = require ('../utils/AppError');

function ensureAuthenticated(
  request,
  response,
  next,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWR token is missing', 401)
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
    throw new AppError('Invalid JWT token', 401);
  }
}

module.exports = ensureAuthenticated;