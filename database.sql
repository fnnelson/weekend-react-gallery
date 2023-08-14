CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(200) NOT NULL,
    "description" VARCHAR(180) NOT NULL,
    "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" ("path", "description")
VALUES ('images/goat_small.jpg', 'A goat at Glacier National Park.'), ('images/dogger.jpg', 'A dog having the best day of his life (like he does every day).'), ('images/fancy_fish.jpg', 'A fancy fish hitting the town.'), ('images/gerbil.jpg', 'My pet hamster Mr. Papagiorgio.'), ('images/koala.jpg', 'My friend Koala D. Time hanging out.'), ('images/smiling_goat.jpg', 'A goated goat.'), ('images/alpaca.jpg', 'Academy Award winner Al Pacacino.'), ('images/sheep.jpg', 'You can count on this sheep.');