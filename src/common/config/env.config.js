module.exports = {
    "port": 3000,
    "appEndpoint": "http://localhost:3000",
    "apiEndpoint": "http://localhost:3000",
    "jwt_secret": "testShabu$$cerT",
    "jwt_expiration_in_seconds": 30000,
    "environment": "dev",
    "permissionLevels": {
        "PLEB_USER": 1,
        "VALID_USER": 4,
        "ADMIN": 512
    }
};
