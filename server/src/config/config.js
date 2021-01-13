const config = {
    // add your information from Microsoft SQL Management Studio
    user: '',
    password: '',
    server: '',
    database: 'TEST',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
    
}

module.exports = config;