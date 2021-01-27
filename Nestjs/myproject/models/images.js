module.exports = (sequelize, type) => {
    return sequelize.define('images', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: type.STRING,
        content: type.STRING,
        image: type.STRING,
    })
}