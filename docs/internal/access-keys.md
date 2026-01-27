cd certif-scopev01


# 10 clés – 1 crédit chacune

for i in {1..10}; do
  curl -s -X POST https://www.certif-scope.com/api/admin/create-key \
    -H "Content-Type: application/json" \
    -d '{"credits":1,"note":"manual-termux"}'
  echo
done
