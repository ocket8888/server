function config(env) {
  return {
    server: {
      host: env.HOST || 'localhost',
      port: env.PORT || 80,
      https_port: env.HTTPS_PORT || 433,
      ssl_key: env.SSL_KEY || './server.key',
      ssL_crt: env.SSL_CRT || './server.crt',
      steam_api_key: env.STEAM_API_KEY || false,
      website_url: (!env.WEBSITE_URL) ? false : ('//' + env.WEBSITE_URL),
      secret: env.SECRET || 'seriously you should set an actual secret this is not secure'
    },
    db: {
      user: env.POSTGRES_USER || env.PGUSER || false,
      password: env.POSTGRES_PASSWORD || env.PGPASSWORD || false,
      database: env.POSTGRES_DB || env.PGDATABASE || false,
      host: env.POSTGRES_HOST || 'db',
      port: env.POSTGRES_PORT || 5432,
      // maximum number of clients in client pool
      max: env.POSTGRES_POOL_MAX || 10,
      // duration that clients are kept open while idle
      idleTimeoutMillis: 30000
    },
    redis: {
      host: env.REDIS_HOST || false,
      port: env.REDIS_PORT || false
    }
  }
}

module.exports = config
