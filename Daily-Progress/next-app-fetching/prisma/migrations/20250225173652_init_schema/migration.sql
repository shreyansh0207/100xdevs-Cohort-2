-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "usernmae" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
