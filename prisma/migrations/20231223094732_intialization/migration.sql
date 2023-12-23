-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemateAccount" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "DemateAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JournalLogs" (
    "id" SERIAL NOT NULL,
    "trading_method" TEXT,
    "buy_time" TIMESTAMP(3),
    "sell_time" TIMESTAMP(3),
    "buy_price" DOUBLE PRECISION NOT NULL,
    "sell_price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "trading_type" TEXT NOT NULL,
    "broker_name" TEXT NOT NULL,
    "additional_note" TEXT,
    "trade_reason" TEXT,
    "is_news_affected" TEXT NOT NULL,
    "stop_loss" DOUBLE PRECISION,
    "userId" INTEGER,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JournalLogs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_number_key" ON "User"("mobile_number");

-- AddForeignKey
ALTER TABLE "DemateAccount" ADD CONSTRAINT "DemateAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalLogs" ADD CONSTRAINT "JournalLogs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
