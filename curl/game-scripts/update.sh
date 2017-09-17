
curl --include --request PATCH "http://tic-tac-toe.wdibos.com/9691" \
--header "Authorization: Token token=BAhJIiU5YjRjOWJmMmExMjcwN2YyYTYxMjZjOTlmMmIyM2I5OQY6BkVG--7ac9257fe510f09536b0eb81d8036d51e2c53196" \
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
