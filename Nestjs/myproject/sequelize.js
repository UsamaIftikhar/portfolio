console.log("sequelize is here");
const Sequelize = require('sequelize');

const ImageModel = require('./models/images');
// const AdminModel = require('./models/admin');
// const CategoryModel = require('./models/categories');
// const SubCategoryModel = require('./models/subcategory');
// const ProductModel = require('./models/products');
// const OffersModel = require('./models/offers');
// const NotificationModel = require('./models/notification');
const { use } = require('./routes');
const { off } = require('./app');

const sequelize = new Sequelize('imagesdatabase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    // dialectOptions: {
    //     useGMT: true
    //     // charset: "utf8mb4",
    //     // // collate: "utf8mb4_unicode_ci",
    //     // supportBigNumbers: true,
    //     // bigNumberStrings: true
    // },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const image = ImageModel(sequelize, Sequelize);
// const admin = AdminModel(sequelize, Sequelize);
// const categories = CategoryModel(sequelize, Sequelize);
// const subcategories = SubCategoryModel(sequelize, Sequelize);
// const products = ProductModel(sequelize, Sequelize);
// const offers = OffersModel(sequelize, Sequelize);
// const notification = NotificationModel(sequelize, Sequelize);

//  products.belongsTo(categories);
//  categories.hasMany(products,{foreignKey:'categoryId', sourceKey:'id'});

//  subcategories.belongsTo(categories);
//  categories.hasMany(subcategories,{foreignKey:'categoryId', sourceKey:'id'});

//  products.belongsTo(subcategories);
//  subcategories.hasMany(products,{foreignKey:'subcategoryId', sourceKey:'id'});

//  products.belongsTo(user);
//  user.hasMany(products,{foreignKey:'userId', sourceKey:'id'});

//  offers.belongsTo(user);
//  user.hasMany(offers,{foreignKey:'posterId', sourceKey:'id'});

//  offers.belongsTo(user);
//  user.hasMany(offers,{foreignKey:'userId', sourceKey:'id'});

//  offers.belongsTo(products);
//  products.hasMany(offers,{foreignKey:'productId', sourceKey:'id'});

//  notification.belongsTo(user);
//  user.hasMany(notification,{foreignKey:'senderId', sourceKey:'id'});

//  notification.belongsTo(user);
//  user.hasMany(notification,{foreignKey:'recieverId', sourceKey:'id'});

 sequelize.sync({ alter: true})
   .then(() => {
       console.log(`Database & tables created!`)
   });

module.exports = {
    image,
    
    
}
