// show collections
// show dbs


db.movies.find({$and: [{$or: [{"cast": "Jack Nicholson"}, {"cast": "John Huston"}]},
            {"viewerRating" : {$gt: 7}},
            {"mpaaRating": "R"}]}).count();


db.movies.find().pretty();
db.movieDetails.find({"awards.wins": 2, "awards.nominations": 2}).count();
db.movieDetails.find({"writers": ["Ethan Coen", "Joel Coen"]}).count();
db.movieDetails.find({"genres":"Family"}).count();
db.movieDetails.find({"genres.1":"Western"}).count();
db.movieDetails.find({"writers": {$in: ["Ethan Coen", "Joel Coen"]}}).count();
db.movieDetails.find({"writers": {$exists: true}}).count();
db.movieDetails.find({"writers": {$type: "int"}}).count();
db.data.find({$or: [{"genres":"Family"}, {"genres":"Comedy"}]}).count();
db.shipwrecks.find({$or: [{"watlev":"always dry"},{"depth":0}]}).count();
db.data.find({"sections": {$all: ["AG1", "MD1", "OA1"]}}).count();
db.data.find({"sections": {$size: 2}}).count();
db.movieDetails.find({boxOffice: {$elemMatch: {"country": "Germany", "revenue": {$gt: 17}}}});
db.surveys.find({"results": {$elemMatch: {"product": "abc", "score": 10}}});
db.movieDetails.find({"awards.text": {$regex: /^Won.* /}}, {_id: 0, title: 1, "awards.text": 1}).pretty();
results.scores.find({"results": {$gte: 70, $lt: 80}}).count();
db.scores.find({results: {$elemMatch: {$gte: 70, $lt: 80}}}).count();
db.trips.find({$and: [{"tripduration": null}, {"tripduration": {$exists: true}}]}).count();



db.myMovies.updateOne({"genres":"Western"}, {"genres":"Western1"});
db.myMovies.updateMany({"genres":"Western"}, {"genres":"Western1"});

db.myMovies.updateOne({"genres":"Western"}, {"genres":"Western1"}, {upsert: true});
db.myMovies.replaceOne({"genres":"Western"}, {"genres":"Western1"});

db.myMovies.deleteOne({"_id":"uniqueid"});
db.myMovies.deleteMany({"genres":"Western"});

db.myMovies.insertOne({"_id" : "tt0084726", "title" : "Star Trek II: The Wrath of Khan",});
db.myMovies.insertMany([{"_id" : "1", "title" : "Star Trek"}, {"_id" : "tt0796366", "title" : "Star Trek II"}], {ordered: false});