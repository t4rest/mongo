# mongo

Compass  https://www.mongodb.com/download-center/compass

Mongo shell - brew install mongodb/brew/mongodb-community-shell

mongo "mongodb+srv://MONGO_SERVER/DB_NAME?authSource=admin" --username USER_NAME --password PASSWORD

// cluster
mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/100YWeatherSmall?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics
