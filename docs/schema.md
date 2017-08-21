# Schema Information

## users
column name       | data type | details
------------------|-----------|----------------------------
id                | Integer   | not null, primary key
username          | String    | not null, indexed, unique
email             | String    | not null, indexed, unique
about             | String    |
password_digest   | String    | not null
session_token     | String    | not null, indexed, unique

## projects
column name       | data type | details
------------------|-----------|----------------------------
id                | Integer   | not null, primary key
userId            | Integer   | not null, foreign key (references users), indexed
title             | String    | not null
description       | String    |
project_pic_url   | String    | not null

## images
column name       | data type | details
------------------|-----------|----------------------------
id                | integer   | not null, primary key
img_url           | string    | not null
project_id        | integer   | not null, foreign key (references projects), indexed

## likes
column name       | data type | details
------------------|-----------|----------------------------
user_id           | integer   | not null, foreign key (references users), indexed
project_id        | integer   | not null, foreign key (references projects), indexed

## comments
column name       | data type | details
------------------|-----------|----------------------------
id                | integer   | not null, primary key
user_id           | integer   | not null
project_id        | integer   | not null
body              | string    | not null





##pictures
