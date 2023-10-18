-- CreateTable
CREATE TABLE "leave_policy" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "leave_type_id" INTEGER NOT NULL,
    "start_delay" TEXT NOT NULL,
    "accrual_rate" TEXT NOT NULL,
    "max_accrual" TEXT NOT NULL,
    "carryover" TEXT NOT NULL,
    "carryover_expiry" TEXT NOT NULL,

    CONSTRAINT "leave_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_type" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "leave_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holidays" (
    "id" SERIAL NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "holidays_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leave_policy_title_key" ON "leave_policy"("title");

-- AddForeignKey
ALTER TABLE "leave_policy" ADD CONSTRAINT "leave_policy_leave_type_id_fkey" FOREIGN KEY ("leave_type_id") REFERENCES "leave_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
