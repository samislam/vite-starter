import { runSeeders } from '@/utils/run-seeders'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()
console.log('\n')

async function main() {
  runSeeders(prisma, [
    /** Your seeders goes here */
  ])
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
