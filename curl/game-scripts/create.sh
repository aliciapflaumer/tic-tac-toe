curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request POST \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{

  }'
echo
