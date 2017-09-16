
curl --include --request PATCH "http://tic-tac-toe.wdibos.com/${ID}" \
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
