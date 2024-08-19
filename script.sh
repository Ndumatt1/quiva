#!/bin/bash

# Variables
URL="https://vps.providusbank.com/vps/api/PiP_RepushTransaction_SettlementId"
CLIENT_ID="VVRJUk9FTEZU"  # Replace with the actual Client-Id value
X_AUTH_SIGNATURE="8FD791CC7A533815166635EFD9FB7BD88E455886F085BACD232396EBBBB904D8C71DED8D76386EBA0DC3459AACC366D442D63F605474F3194D11B38726E237F5"  # Replace with the actual X-Auth-Signature value

# Payload
PAYLOAD='{
    "settlement_id": "215240819017150200002"
}'

# Making the request and logging headers
curl -X POST "$URL" \
     -H "Client-Id: $CLIENT_ID" \
     -H "X-Auth-Signature: $X_AUTH_SIGNATURE" \
     -H "Content-Type: application/json" \
     -d "$PAYLOAD" \
     -D -  # Log headers


