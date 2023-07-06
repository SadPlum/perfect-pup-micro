CREATE TABLE "dogs" (
  "id" uuid PRIMARY KEY NOT NULL,
  "name" string NOT NULL,
  "vaccinated" boolean NOT NULL,
  "vaccinated_fee" interger,
  "created_at" timestamp NOT NULL,
  "date_born" timestamp ,
  "breed" string NOT NULL,
  "bio" string NOT NULL,
  "img_path" string NOT NULL,                        
  "age" interger NOT NULL,
  "await_adoption" boolean NOT NULL,
  "sex" string NOT NULL
);

CREATE TABLE "adopted_dogs" (
  "adopt_id" uuid PRIMARY KEY NOT NULL,
  "id" uuid NOT NULL,
  "name" string NOT NULL,
  "vaccinated" boolean NOT NULL,
  "created_at" timestamp Now(),
  "date_born" timestamp,
  "breed" string NOT NULL,
  "bio" string NOT NULL,
  "img_path" string NOT NULL,
  "age" interger NOT NULL,
  "date_adopted" timestamp NOT NULL,
  "sex" string NOT NULL,
  "customer_write_up" string 
);

ALTER TABLE "adopted_dogs" ADD FOREIGN KEY ("id") REFERENCES "dogs" ("id");