module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Person', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        qr_code: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'persons',
        timestamps: true
    })
}
