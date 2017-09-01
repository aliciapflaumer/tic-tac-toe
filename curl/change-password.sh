curl "http://tic-tac-toe.wdibos.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
    "email": "emailmail.com",
    "password": "scatter1",
    }
  }'
echo
