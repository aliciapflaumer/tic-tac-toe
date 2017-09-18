API=“${API_ORIGIN:-http://tic-tac-toe.wdibos.com}”
URL_PATH=“games/”

curl “${API}${URL_PATH}” \
 --include \
 --request PATCH \
 --header “Authorization: Token token=${TOKEN}” \
 --header “Content-Type: application/json” \
 --data ‘{
 }’

echo
