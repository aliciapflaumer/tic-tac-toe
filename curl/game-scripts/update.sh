
curl --include --request PATCH "http://tic-tac-toe.wdibos.com/games/9707" \
--header "Authorization: Token token=BAhJIiUyYzFkOGU2ZTFjMDFjZmNkM2I2OTBiMDVlMzY1M2MwYwY6BkVG--62b42393663cd7ab8ecaddda1b6b76b92a5414a6" \
--header "Content-Type: application/json" \
--data '{
  "game": {
    "cell": {
      "index": 2,
      "value": "x"
    },
    "over": false
  }
}'

echo
