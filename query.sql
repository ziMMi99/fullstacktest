--fullstackdb database --

USE master;

IF DB_ID('fullstackdb') IS NOT NULL
    DROP DATABASE fullstackdb;


CREATE DATABASE fullstackdb;
GO

USE fullstackdb;