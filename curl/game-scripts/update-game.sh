curl "http://tic-tac-toe.wdibos.com/" \
--inlude \
--request PATCH  \
--header "Authorization: Token token=$TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"${VALUE}"'"
    },
    "over": "'"${OVER}"'"
  }
}'

echo
