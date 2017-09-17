
curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/9761" \
--header "Authorization: Token token=BAhJIiVhM2I4MTdiYjlkMjZkMzE3MTM3MTljMjM0YTQ2YjhjMAY6BkVG--237124d3c446e02c3c33d54077ac93130d1fc007" \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": "'"${INDEX}"'",
      "value": "'"$VALUE"'"
    },
    "over": false
  }
}'

echo
