#!/bin/bash
cd `dirname $0`
PORT=$1
if [ -z "$PORT" ]; then
  PORT=8080
fi
python -m SimpleHTTPServer $PORT
