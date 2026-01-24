cd certif-scopev01

export KEY_SECRET="une-cle-secrete-longue-et-aleatoire"

# 1 clé – 1 crédit
node scripts/generate-key.ts 1 1

# 1 clé – 10 crédits
node scripts/generate-key.ts 10 1

# 10 clés – 1 crédit chacune
node scripts/generate-key.ts 1 10
